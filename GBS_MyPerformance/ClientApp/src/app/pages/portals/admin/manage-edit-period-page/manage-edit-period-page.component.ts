import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableDataType} from '../../../../components/table/table.component.constants';

@Component({
  selector: 'app-manage-edit-period-page',
  templateUrl: './manage-edit-period-page.component.html',
  styleUrls: ['./manage-edit-period-page.component.scss'],
})
export class ManageEditPeriodPageComponent implements OnInit {
  public editPeriodMapping = [
    {
      header: 'Von',
      valueKey: 'from',
      type: TableDataType.DATE,
      editable: true,
      inputType: 'date',
    },
    {
      header: 'Bis',
      valueKey: 'to',
      type: TableDataType.DATE,
      editable: true,
      inputType: 'date',
    },
  ];
  public editPeriodData = [
    {
      from: '2021-12-02',
      to: '2021-12-15',
    },
  ];
  public isEditMode = false;

  constructor() {}

  ngOnInit() {}

  onEdit($event: EditClickEvent) {
    this.isEditMode = $event.edit;
    console.log(this.editPeriodData);
  }
}
