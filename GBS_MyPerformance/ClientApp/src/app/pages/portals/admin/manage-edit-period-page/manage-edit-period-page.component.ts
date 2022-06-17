import {Component, OnInit} from '@angular/core';
import {EditTimeSpanDTO, EditTimeSpanService} from 'myperformance-client';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableDataType} from '../../../../components/table/table.component.constants';

@Component({
  selector: 'app-manage-edit-period-page',
  templateUrl: './manage-edit-period-page.component.html',
  styleUrls: ['./manage-edit-period-page.component.scss'],
})
export class ManageEditPeriodPageComponent implements OnInit {
  public editPeriodData: EditTimeSpanDTO;

  constructor(private editTimeSpanApi: EditTimeSpanService) {}
  ngOnInit() {
    this.editTimeSpanApi.apiEditTimeSpanGet().subscribe(data => {
      this.editPeriodData = data;
    });
  }

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

  public isEditMode = false;

  onEdit($event: EditClickEvent) {
    if ($event.edit == false) {
      // this.editPeriodData[0].from = '2023-9-10T13:23:44'; // todo: get get inserted date
      // this.editPeriodData[0].to = '2023-12-21T13:23:44'; // todo: get get inserted date
      this.editTimeSpanApi.apiEditTimeSpanIdPut(this.editPeriodData[0].id, this.editPeriodData[0]);
    }
    this.isEditMode = $event.edit;
  }
}
