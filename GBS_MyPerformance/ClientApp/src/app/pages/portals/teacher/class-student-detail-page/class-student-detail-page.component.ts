import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {data} from '../mock';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.constants';
import {EditModes} from '../../../../containers/mark-overview-container/mark-overview-container.component';
import {AppPortals} from '../../../../constants';

@Component({
  selector: 'app-class-student-detail-page',
  templateUrl: './class-student-detail-page.component.html',
  styleUrls: ['./class-student-detail-page.component.scss'],
})
export class ClassStudentDetailPageComponent implements OnInit {
  public schoolClass: string;
  public studentId: string;
  public editActive = false;

  public myClasses = data;

  // enum mapping
  public editModes = EditModes;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.schoolClass = this.activatedRoute.snapshot.paramMap.get('class');
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  get student(): StudentData {
    const student = this.myClasses
      .filter(c => c.name === this.schoolClass)[0]
      .students.filter(s => s.student.id === this.studentId)[0];
    return student ? student : null;
  }

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }

  get studentFullName(): string {
    return this.student
      ? `${this.student.student.firstName}  ${this.student.student.lastName}`
      : 'Nicht Vorhanden';
  }

  get breadcrumbs(): any[] {
    return [
      {name: 'Klassen', link: `/app/${AppPortals.TEACHER}/classes`},
      {name: this.schoolClass, link: `/app/${AppPortals.TEACHER}/class/${this.schoolClass}`},
      {name: this.studentFullName, link: null},
    ];
  }
}
