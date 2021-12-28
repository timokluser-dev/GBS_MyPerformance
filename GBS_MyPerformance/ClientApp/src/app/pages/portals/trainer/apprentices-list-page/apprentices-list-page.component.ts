import {Component, OnInit} from '@angular/core';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.component';
import {Router} from '@angular/router';
import {AppPortals} from '../../../../constants/app-portals.constants';

@Component({
  selector: 'app-apprentices-list-page',
  templateUrl: './apprentices-list-page.component.html',
  styleUrls: ['./apprentices-list-page.component.scss'],
})
export class ApprenticesListPageComponent implements OnInit {
  public _studentsMarkTableData: StudentData[] = [
    {
      student: {
        id: '44e1dfea-7723-4e35-9792-0b23210b124a',
        firstName: 'Max',
        lastName: 'Mustermann',
      },
      profession: {
        name: 'Informatiker Fachr. Applikationsentwicklung',
      },
      company: {
        name: 'COMPANY',
      },
      ratingCategories: [
        {
          name: 'IK',
          mark: 5.5,
        },
      ],
      diplomaMarkPreview: null,
    },
    {
      student: {
        id: '44e1dfea-7723-4e35-9792-0b23210b124b',
        firstName: 'John',
        lastName: 'Doe',
      },
      profession: {
        name: 'Informatiker Fachr. Systemtechnik',
      },
      company: {
        name: 'COMPANY',
      },
      ratingCategories: [
        {
          name: 'IK',
          mark: 5.5,
        },
      ],
      diplomaMarkPreview: 5.0,
    },
  ];

  public selectedProfession: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const previous = sessionStorage.getItem('selected-profession');
    this.selectedProfession = previous ? JSON.parse(previous) : this.apprenticesProfessions[0];
  }

  onDetail($event: StudentData) {
    this.router.navigate([`/app/${AppPortals.TRAINER}/apprentice`, $event.student.id]);
  }

  onProfessionSelected($event: any) {
    const sender = $event.target as HTMLSelectElement;
    this.selectedProfession = this.apprenticesProfessions.filter(p => p.name === sender.value)[0];
    sessionStorage.setItem('selected-profession', JSON.stringify(this.selectedProfession));
  }

  get apprenticesProfessions(): any[] {
    return this._studentsMarkTableData.map(s => s.profession);
  }

  get studentsMarkTableData(): StudentData[] {
    return this._studentsMarkTableData.filter(s => s.profession === this.selectedProfession);
  }
}
