import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridViewComponent} from './grid-view/grid-view.component';
import {IconTextComponentComponent} from './icon-text-component/icon-text-component.component';
import {MarkTableComponent} from './mark-table/mark-table.component';
import {StudentsMarkTableComponent} from './students-mark-table/students-mark-table.component';
import {TableComponent} from './table/table.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    GridViewComponent,
    IconTextComponentComponent,
    MarkTableComponent,
    StudentsMarkTableComponent,
    TableComponent,
  ],
  exports: [
    GridViewComponent,
    IconTextComponentComponent,
    MarkTableComponent,
    StudentsMarkTableComponent,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
