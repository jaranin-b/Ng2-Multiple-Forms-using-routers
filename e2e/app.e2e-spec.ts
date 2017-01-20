import { QuestionsprojectPage } from './app.po';

describe('questionsproject App', function() {
  let page: QuestionsprojectPage;

  beforeEach(() => {
    page = new QuestionsprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
