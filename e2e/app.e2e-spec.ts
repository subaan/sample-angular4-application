import { SampleAngular4ApplicationPage } from './app.po';

describe('sample-angular4-application App', () => {
  let page: SampleAngular4ApplicationPage;

  beforeEach(() => {
    page = new SampleAngular4ApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
