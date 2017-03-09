import { EBillPage } from './app.po';

describe('e-bill App', () => {
  let page: EBillPage;

  beforeEach(() => {
    page = new EBillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
