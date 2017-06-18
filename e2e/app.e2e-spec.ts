import { SitepointTodosPage } from './app.po';

describe('sitepoint-todos App', () => {
  let page: SitepointTodosPage;

  beforeEach(() => {
    page = new SitepointTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
