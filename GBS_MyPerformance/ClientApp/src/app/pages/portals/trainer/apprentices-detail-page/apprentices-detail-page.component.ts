import {Component, OnInit} from '@angular/core';
import {EditModes} from '../../../../containers/mark-overview-container/mark-overview-container.component';
import {ActivatedRoute} from '@angular/router';
import {StudentData} from '../../../../components/students-mark-table/students-mark-table.component';
import {data} from '../mock';

@Component({
  selector: 'app-apprentices-detail-page',
  templateUrl: './apprentices-detail-page.component.html',
  styleUrls: ['./apprentices-detail-page.component.scss'],
})
export class ApprenticesDetailPageComponent implements OnInit {
  public apprenticeId: string;

  public myApprentices: StudentData[] = data;

  // enum mapping
  public editModes = EditModes;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.apprenticeId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  get apprentice(): any {
    return this.myApprentices.filter(a => a.student.id === this.apprenticeId)[0];
  }
}
