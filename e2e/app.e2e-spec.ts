import { NgAnglandPage } from './app.po';

describe('ng-femob-landing-page App', () => {
  let page: NgAnglandPage;

  beforeEach(() => {
    page = new NgAnglandPage();
  });

  it('Angland is working', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
