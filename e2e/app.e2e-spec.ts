import { TrialBalancePage } from './app.po';

describe('trial-balance App', () => {
  let page: TrialBalancePage;

  beforeEach(() => {
    page = new TrialBalancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
