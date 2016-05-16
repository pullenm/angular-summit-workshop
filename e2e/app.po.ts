export class AngularSummitWorkshopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-summit-workshop-app h1')).getText();
  }
}
