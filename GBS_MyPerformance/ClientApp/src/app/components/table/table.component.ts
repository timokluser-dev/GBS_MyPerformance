import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {v4 as guid} from 'uuid';
import {override as overrideDate} from '../../../helpers/date-overrides';
import {
  TableAction,
  TableActionEvent,
  TableDataType,
  TableMapping,
} from './table.component.constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  /**
   * if not provided, the table will get rendered using an object array
   */
  @Input() mapping: TableMapping[] | null = null;
  @Input() data!: any[];
  /**
   * the raw array to append new objects to
   * -> no getters
   */
  @Input() rawData: any[] = null;
  @Input() showIds = true;
  @Input() edit = false;
  @Input() create = true;
  @Input() createAdditionalParams: any;

  /**
   * a function to eval if the col can be edited
   * - row will get passed
   */
  @Input() editConditionEval: (row: any) => boolean;

  @Input() actions: TableAction[] = null;
  @Output() actionClick: EventEmitter<TableActionEvent> = new EventEmitter<TableActionEvent>();

  /**
   * special props to remove when using calculated mapping
   */
  public specialProperties = [
    // bold text
    'textBold',
    'editable',
  ];

  constructor() {
    overrideDate();
  }

  ngOnInit() {}

  get tableHeaderRow(): any[] {
    return this.mappingKeys;
  }

  get mappingKeys(): any[] {
    return this.mapping ? this.manualMapping : this.calculatedMapping;
  }

  get calculatedMapping(): any[] {
    if (this.data.length === 0) {
      return [];
    }
    if (!this.showIds) {
      return this.filterSpecialProperties(Object.keys(this.data[0]))
        .filter(key => (key as string).toLowerCase() !== 'id')
        .map(k => {
          return {
            header: k,
            valueKey: k,
            editable: true,
          };
        });
    }
    return this.filterSpecialProperties(Object.keys(this.data[0])).map(k => {
      return {
        header: k,
        valueKey: k,
        editable: true,
      };
    });
  }

  get manualMapping(): any[] {
    return this.mapping;
  }

  get visibleActions(): TableAction[] {
    if (!this.actions) {
      return [];
    }
    // get in edit all, except those with explicit no display
    // if not in edit, get all with explicit display
    return this.edit
      ? this.actions.filter(a => !(a.display !== undefined && !a.display))
      : this.actions.filter(a => a.display);
  }

  filterSpecialProperties(data: any[]): any[] {
    return data.filter(d => !this.specialProperties.includes(d));
  }

  onActionClick(event: string, object: any) {
    this.actionClick.emit({event: event, object});
  }

  getValue(col: any, row: any, editFormat = false) {
    const value = col.valueKey.split('.').reduce((o, d) => o[d], row);

    if (!editFormat && col.type === TableDataType.DATE) {
      // check for date
      const date = new Date(value);
      return isNaN(date.getDate()) ? value : date.toString();
    }

    return value;
  }

  /**
   * if a col is editable
   * @param col
   * @param row
   */
  isEditable(col: any, row: any) {
    return (
      this.edit &&
      (col.editable === undefined || col.editable) &&
      (typeof this.editConditionEval !== 'function' || this.editConditionEval(row)) &&
      // (typeof this.editConditionEval !== 'function' ||
      //     (typeof this.editConditionEval === 'function' && this.editConditionEval(row))) &&
      (row.editable === undefined || row.editable) &&
      (row.calculated === undefined || !row.calculated)
    );
  }

  onInputChange(row: any, valueKey: string, $event) {
    const input = $event.target as HTMLInputElement;
    this.arrayNotationToObject(valueKey, input.value, row);
  }

  onSelectChange(row: any, valueKey: string, $event) {
    const input = $event.target as HTMLSelectElement;
    this.arrayNotationToObject(valueKey, input.value, row);
  }

  onNewClick() {
    this.rawData.push({...this.cloneObject(), id: guid()});
  }

  cloneObject(): any {
    let clone: any = {};
    // tslint:disable-next-line:forin
    for (const key of this.mappingKeys) {
      this.arrayNotationToObject(key.valueKey, null, clone);
    }
    if (this.createAdditionalParams) {
      clone = {...clone, ...this.createAdditionalParams};
    }
    return clone;
  }

  /**
   * converts an array notation to an object
   * e.g. obj['profession.name] --> obj.profession.name
   * @param arrayKey attribute, sub with `.`
   * @param value value of the attribute
   * @param originalObject object to manipulate
   */
  arrayNotationToObject(arrayKey: string, value: any = null, originalObject: any): any {
    const subKeys = arrayKey.split('.');
    if (subKeys.length === 1) {
      // direct attribute
      originalObject[subKeys[0]] = value;
    } else if (subKeys.length === 2) {
      // single nested attribute
      originalObject[subKeys[0]] = {};
      originalObject[subKeys[0]][subKeys[1]] = value;
    }
    return originalObject;
  }
}
