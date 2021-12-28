import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {EditModes} from '../../../../containers/mark-overview-container/mark-overview-container.component';

@Component({
  selector: 'app-mark-overview-page',
  templateUrl: './mark-overview-page.component.html',
  styleUrls: ['./mark-overview-page.component.scss'],
})
export class MarkOverviewPageComponent implements OnInit {
  public editActive = false;

  // enum mapping
  public editModes = EditModes;

  constructor() {}

  ngOnInit() {}

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }
}
