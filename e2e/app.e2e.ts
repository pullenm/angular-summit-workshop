import { AngularSummitWorkshopPage } from './app.po';

describe('angular-summit-workshop App', function() {
  let page: AngularSummitWorkshopPage;

  beforeEach(() => {
    page = new AngularSummitWorkshopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-summit-workshop works!');
  });
});
