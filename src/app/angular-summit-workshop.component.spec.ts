import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularSummitWorkshopAppComponent } from '../app/angular-summit-workshop.component';

beforeEachProviders(() => [AngularSummitWorkshopAppComponent]);

describe('App: AngularSummitWorkshop', () => {
  it('should create the app',
      inject([AngularSummitWorkshopAppComponent], (app: AngularSummitWorkshopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-summit-workshop works!\'',
      inject([AngularSummitWorkshopAppComponent], (app: AngularSummitWorkshopAppComponent) => {
    expect(app.title).toEqual('angular-summit-workshop works!');
  }));
});
