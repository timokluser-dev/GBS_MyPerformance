import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.component';
import {AppPortals} from '../../../../constants';
import {data} from '../mock';

@Component({
  selector: 'app-class-detail-page',
  templateUrl: './class-detail-page.component.html',
  styleUrls: ['./class-detail-page.component.scss'],
})
export class ClassDetailPageComponent implements OnInit {
  public schoolClass: string;
  public myClasses = data;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.schoolClass = this.activatedRoute.snapshot.paramMap.get('class');
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
