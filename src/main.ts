import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularSummitWorkshopAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularSummitWorkshopAppComponent);
