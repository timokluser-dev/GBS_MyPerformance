import {Component, OnInit} from '@angular/core';
import {SchoolClassService, WeatherForecastService} from 'myperformance-client';
import {data} from '../mock';

@Component({
  selector: 'app-classes-overview-page-component',
  templateUrl: './classes-overview-page-component.component.html',
  styleUrls: ['./classes-overview-page-component.component.scss'],
})
export class ClassesOverviewPageComponentComponent implements OnInit {
  public breadcrumbs = [{name: 'Klassen', link: null}];
  public classes = data;

  constructor(private api: SchoolClassService, private api2: WeatherForecastService) {}

  ngOnInit() {
    this.api.apiSchoolClassGet().subscribe(data => {
      console.log(data.map(schoolClass => schoolClass.id));
    });

    this.api2.apiWeatherForecastGet().subscribe(data => {
      console.log(data.map(weatherForecast => weatherForecast.summary));
    });
  }
}
