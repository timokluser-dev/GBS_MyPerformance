import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableAction, TableActionEvent} from '../table/table.component';
import {TableDataType} from '../table/table.component.constants';

@Component({
  selector: 'app-students-mark-table',
  templateUrl: './students-mark-table.component.html',
  styleUrls: ['./students-mark-table.component.scss'],
})
export class StudentsMarkTableComponent implements OnInit {
  @Input() data!: StudentData[];
  @Output() detail = new EventEmitter<StudentData>();

  //#region Table
  get tableData(): StudentData[] {
    return this.data;
  }

  public tableMapping = [
    {
      header: 'Nachname',
      valueKey: 'student.lastName',
      type: TableDataType.STRING,
    },
    {
      header: 'Vorname',
      valueKey: 'student.firstName',
      type: TableDataType.STRING,
    },
    {
      header: 'Lehrbetrieb',
      valueKey: 'company.name',
      type: TableDataType.STRING,
    },
    {
      header: 'Gesamtnote',
      valueKey: 'diplomaMarkPreview',
      type: TableDataType.MARK,
      textBold: true,
    },
  ];
  public tableActions: TableAction[] = [
    {
      name: 'Detail',
      icon: {
        iconClass: 'bi bi-caret-right-square',
        colorClass: '',
      },
      event: 'detail',
      display: true,
    },
  ];

  //#endregion Table

  constructor() {}

  ngOnInit() {}

  onTableAction($event: TableActionEvent) {
    this.detail.emit($event.object);
  }
}

export interface StudentData {
  student: {
    id: string;
    firstName: string;
    lastName: string;
  };
  company: {
    name: string;
  };
  ratingCategories: [
    {
      name: string;
      mark: number;
    }
  ];
  profession: {
    name: string;
  };
  diplomaMarkPreview: number | null;
}
