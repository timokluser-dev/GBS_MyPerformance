import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableAction, TableActionEvent, TableMapping} from '../table/table.component.constants';
import {TableDataType} from '../table/table.component.constants';
import {StudentData} from './students-mark-table.constants';

@Component({
  selector: 'app-students-mark-table',
  templateUrl: './students-mark-table.component.html',
  styleUrls: ['./students-mark-table.component.scss'],
})
export class StudentsMarkTableComponent implements OnInit {
  @Input() data!: StudentData[];
  /**
   * all rating categories for the diploma and their factor
   */
  @Input() ratingCategoriesDefinition: any[];
  @Output() detail = new EventEmitter<StudentData>();

  //#region Table
  get tableData(): StudentData[] {
    const tableData = [];

    // remapping for every student
    for (const student of this.data) {
      const studentClone = {...student};
      // TODO better name ratingCategoriesDefinition
      for (const ratingCategory of this.ratingCategoriesDefinition) {
        studentClone[ratingCategory.abbreviation] = {
          ...student.ratingCategories.filter(
            r => r.abbreviation === ratingCategory.abbreviation
          )[0],
        };
      }
      tableData.push({...student, ...studentClone});
    }

    return tableData;
  }

  public tablePreMapping: TableMapping[] = [
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

  get ratingCategoriesMapping(): any[] {
    return this.ratingCategoriesDefinition.map(r => {
      return {
        header: r.abbreviation,
        valueKey: r.abbreviation + '.mark',
        type: TableDataType.STRING,
      };
    });
  }

  get tableMapping(): TableMapping[] {
    return [
      // existing table mapping
      ...this.tablePreMapping,
      // the rating categories for header
      ...this.ratingCategoriesMapping,
      // total
      {
        header: 'Gesamtnote',
        valueKey: 'diplomaMarkPreview',
        type: TableDataType.MARK,
        textBold: true,
      },
    ];
  }

  get calculationText(): string {
    return this.ratingCategoriesDefinition
      .map(r => `${r.diplomaFactor * 100}% ${r.abbreviation}`)
      .join(' + ');
  }
}

// fix: for existing references
export {StudentData};
