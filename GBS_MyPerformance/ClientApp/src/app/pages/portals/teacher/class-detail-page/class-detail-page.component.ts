import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.component';
import {AppPortals} from '../../../../constants';
import {SchoolClassDTO, SchoolClassService, StudentService} from 'myperformance-client';
import {data} from '../mock';

@Component({
  selector: 'app-class-detail-page',
  templateUrl: './class-detail-page.component.html',
  styleUrls: ['./class-detail-page.component.scss'],
})
export class ClassDetailPageComponent implements OnInit {
  public schoolClass: string;
  public myClasses = data;
  // public class: SchoolClassDTO;

  constructor(
    private studentApi: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.schoolClass = this.activatedRoute.snapshot.paramMap.get('class');

    this.studentApi.apiStudentGet().subscribe(data => {
      console.log(data);
    });
    // new
    // this.myClasses.push({
    //   id: 1,
    //       name: "name",
    //       starting: 12,
    //       ending: 34,
    //       students: [],
    //       teacherId: 1,
    //       teacher: null,
    //       professionAreaId: 3,
    //       professionArea: {
    //         id: 2,
    //         name: "test",
    //         // subjects: c.professionArea.id,
    //       }
    // });
  }

  async onDetail($event: StudentData) {
    await this.router.navigate([
      `/app/${AppPortals.TEACHER}/class/${this.schoolClass}/student/`,
      $event.student.id,
    ]);
  }

  get studentsMarkTableData(): StudentData[] {
    const schoolClass = this.myClasses.filter(
      c => c.name.toLowerCase() === this.schoolClass.toLowerCase()
    );
    return schoolClass.length > 0 ? schoolClass[0].students : [];
  }

  get ratingCategoriesDefinition(): any[] {
    return this.studentsMarkTableData[0].ratingCategories;
  }

  get breadcrumbs(): any[] {
    return [
      {name: 'Klassen', link: `/app/${AppPortals.TEACHER}/classes`},
      {name: this.schoolClass, link: null},
    ];
  }
}
