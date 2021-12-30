import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClickCursorDirective} from './click-cursor/click-cursor.directive';

@NgModule({
  declarations: [ClickCursorDirective],
  exports: [ClickCursorDirective],
  imports: [CommonModule],
})
export class DirectivesModule {}
