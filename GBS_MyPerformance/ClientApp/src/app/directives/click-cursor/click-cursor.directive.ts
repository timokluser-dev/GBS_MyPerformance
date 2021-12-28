import {Directive, HostBinding} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click]',
})
export class ClickCursorDirective {
  // show the pointer cursor for elements with (click) events

  @HostBinding('style.cursor') cursor = 'pointer';

  constructor() {}
}
