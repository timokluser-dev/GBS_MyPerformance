import {Component, OnInit} from '@angular/core';
import {RatingService, SchoolClassDTO, SchoolClassService} from 'myperformance-client';
import {data} from '../mock';

@Component({
  selector: 'app-classes-overview-page-component',
  templateUrl: './classes-overview-page-component.component.html',
  styleUrls: ['./classes-overview-page-component.component.scss'],
})
export class ClassesOverviewPageComponentComponent implements OnInit {
  public breadcrumbs = [{name: 'Klassen', link: null}];
  public class: SchoolClassDTO;
  public classes = [];
  constructor(private api: SchoolClassService, private api2: RatingService) {}

  ngOnInit() {
    this.api.apiSchoolClassGet().subscribe(data => {
      console.log(data)
      data.forEach(c => {
        // console.log(Date.parse(c.starting))
        // console.log(new Date(c.starting));
        this.class = {
          id: c.id,
          name: c.name,
          starting: new Date(c.starting),
          ending: c.ending,
          students: [
            // get students
          ],
          teacherId: c.teacherId,
          teacher: null,
          professionAreaId: c.professionAreaId,
          professionArea: {
            id: c.professionArea.id,
            name: c.professionArea.id,
            // subjects: c.professionArea.id,
          }
        };
        this.classes.push(this.class);
      });
      console.log(this.classes);
    });

    this.api2.apiRatingGet().subscribe(data => {
      console.log(data.map(rating => `${rating.id}: ${rating.ratingCategory.name}`));
    });
  }
}
