import {Component, OnInit} from '@angular/core';
import {EditTimeSpanService} from 'myperformance-client';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableDataType} from '../../../../components/table/table.component.constants';

@Component({
  selector: 'app-manage-edit-period-page',
  templateUrl: './manage-edit-period-page.component.html',
  styleUrls: ['./manage-edit-period-page.component.scss'],
})
export class ManageEditPeriodPageComponent implements OnInit {
  public editPeriodData = [];

  constructor(private editTimeSpanApi: EditTimeSpanService) {}
  ngOnInit() {
    this.editTimeSpanApi.apiEditTimeSpanGet().subscribe(data => {
      this.editPeriodData.push({
        from: data[0].from,
        to: data[0].to,
      });
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
    this.isEditMode = $event.edit;
  }
}
