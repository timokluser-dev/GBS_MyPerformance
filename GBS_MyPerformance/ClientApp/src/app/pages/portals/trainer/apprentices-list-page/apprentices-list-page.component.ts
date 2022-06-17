import {Component, OnInit} from '@angular/core';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.component';
import {Router} from '@angular/router';
import {AppPortals} from '../../../../constants/app-portals.constants';
import {data} from '../mock';
import {CompanyService, StudentService} from 'myperformance-client';

@Component({
  selector: 'app-apprentices-list-page',
  templateUrl: './apprentices-list-page.component.html',
  styleUrls: ['./apprentices-list-page.component.scss'],
})
export class ApprenticesListPageComponent implements OnInit {
  public myStudents: StudentData[] = data;

  public selectedProfession: {
    name: string;
  };

  constructor(private studentApi: StudentService, private companyApi: CompanyService, private router: Router) {}

  ngOnInit() {
    // this.studentApi.apiStudentIdGet('4EA6E71F-00FD-4FC1-ADBD-58CBCF8560FB').subscribe(data => {
    //   console.log(data);
    // });

    // this.companyApi.apiCompanyGet().subscribe(data => {
    //   console.log(data);
    // });

    try {
      const previous = JSON.parse(sessionStorage.getItem('selected-profession'));
      this.selectedProfession = previous.name
        ? this.apprenticesProfessions.filter(p => p.name === previous.name)[0]
        : this.apprenticesProfessions[0];
    } catch (e) {
      this.selectedProfession = this.apprenticesProfessions[0];
    }
  }

  async onDetail($event: StudentData) {
    await this.router.navigate([`/app/${AppPortals.TRAINER}/apprentice`, $event.student.id]);
  }

  onProfessionSelected($event: any) {
    const sender = $event.target as HTMLSelectElement;
    this.selectedProfession = this.apprenticesProfessions.filter(p => p.name === sender.value)[0];
    sessionStorage.setItem('selected-profession', JSON.stringify(this.selectedProfession));
  }

  get ratingCategoriesDefinition(): any[] {
    // get from api using profession
    return this.studentsMarkTableData[0].ratingCategories;
  }

  get apprenticesProfessions(): any[] {
    return [...new Map(this.myStudents.map(s => [s.profession.name, s.profession])).values()];
  }

  get studentsMarkTableData(): StudentData[] {
    const students = this.myStudents.filter(
      s => s.profession.name === this.selectedProfession.name
    );
    return students.length > 0 ? students : [];
  }
}
