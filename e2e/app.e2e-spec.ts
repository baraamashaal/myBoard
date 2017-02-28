import { MyBoardPage } from './app.po';

describe('my-board App', () => {
  let page: MyBoardPage;

  beforeEach(() => {
    page = new MyBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mb works!');
  });
});
