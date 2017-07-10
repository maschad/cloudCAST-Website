import { CloudcastClientPage } from './app.po';

describe('cloudcast-client App', () => {
  let page: CloudcastClientPage;

  beforeEach(() => {
    page = new CloudcastClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
