import {enableProductionMode} from './helpers/production-mode';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

export function getBaseUrl() {
  // e.g. https://localhost:5001/api/weatherforecast
  return `${document.getElementsByTagName('base')[0].href}api/`;
}

const providers = [{provide: 'BASE_URL', useFactory: getBaseUrl, deps: []}];

if (environment.production) {
  enableProductionMode();
  // override console log
  window &&
    (window.console.log = window.console.debug = window.console.table = window.console.warn = () => {});
}

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
