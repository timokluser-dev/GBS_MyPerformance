import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxSpinnerModule} from 'ngx-spinner';
import {GridViewComponent} from './grid-view/grid-view.component';
import {IconTextComponentComponent} from './icon-text-component/icon-text-component.component';
import {MarkTableComponent} from './mark-table/mark-table.component';
import {StudentsMarkTableComponent} from './students-mark-table/students-mark-table.component';
import {TableComponent} from './table/table.component';
import {RouterModule} from '@angular/router';
import {TabsComponent} from './tabs/tabs.component';
import {PageTitleComponent} from './page-title/page-title.component';
import {DirectivesModule} from '../directives/directives.module';
import {ConfirmationComponent} from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    // NavMenuComponent, <-- do not import in ComponentsModule, as it is imported by the AppModule directly
    GridViewComponent,
    IconTextComponentComponent,
    MarkTableComponent,
    StudentsMarkTableComponent,
    TableComponent,
    TabsComponent,
    PageTitleComponent,
    ConfirmationComponent,
  ],
  exports: [
    GridViewComponent,
    IconTextComponentComponent,
    MarkTableComponent,
    StudentsMarkTableComponent,
    TableComponent,
    TabsComponent,
    PageTitleComponent,
    ConfirmationComponent,
  ],
  imports: [CommonModule, RouterModule, DirectivesModule, NgxSpinnerModule],
})
export class ComponentsModule {}
