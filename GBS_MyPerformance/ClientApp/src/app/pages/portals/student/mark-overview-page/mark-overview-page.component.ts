import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {EditModes} from '../../../../containers/mark-overview-container/mark-overview-container.component';
import {MarkService} from 'myperformance-client';
import {data as mockData} from '../mock';

@Component({
  selector: 'app-mark-overview-page',
  templateUrl: './mark-overview-page.component.html',
  styleUrls: ['./mark-overview-page.component.scss'],
})
export class MarkOverviewPageComponent implements OnInit {
  public editActive = false;
  public data = mockData;

  // enum mapping
  public editModes = EditModes;

  constructor(private api: MarkService) {}

  ngOnInit() {
    this.api.apiMarkStudentIdGet('4EA6E71F-00FD-4FC1-ADBD-58CBCF8560FB').subscribe(data => {
      console.log(data);
    }
  )}

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }
}
