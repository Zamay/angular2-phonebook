import { PhonebookPage } from './app.po';

describe('phonebook App', () => {
  let page: PhonebookPage;

  beforeEach(() => {
    page = new PhonebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
