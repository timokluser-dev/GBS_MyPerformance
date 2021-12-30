import {enableProdMode} from '@angular/core';

export function enableProductionMode() {
  // @ts-ignore
  // tslint:disable-next-line
  console.log = console.warn = console.debug = console.error = console.table = () => {};

  enableProdMode();
}
