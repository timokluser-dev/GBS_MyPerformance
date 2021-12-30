import {Component, OnInit} from '@angular/core';
import {data} from '../mock';

@Component({
  selector: 'app-classes-overview-page-component',
  templateUrl: './classes-overview-page-component.component.html',
  styleUrls: ['./classes-overview-page-component.component.scss'],
})
export class ClassesOverviewPageComponentComponent implements OnInit {
  public breadcrumbs = [{name: 'Klassen', link: null}];
  public classes = data;
  constructor() {}

  ngOnInit() {}
}
