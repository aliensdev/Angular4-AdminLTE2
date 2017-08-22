import { Angular4CroissantAdminLTE2Page } from './app.po';

describe('angular4-croissant-admin-lte2 App', () => {
  let page: Angular4CroissantAdminLTE2Page;

  beforeEach(() => {
    page = new Angular4CroissantAdminLTE2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
