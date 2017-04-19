import { SearchwithInstagramPage } from './app.po';

describe('searchwith-instagram App', function() {
  let page: SearchwithInstagramPage;

  beforeEach(() => {
    page = new SearchwithInstagramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
