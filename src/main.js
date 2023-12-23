import BoardPresenter from './presenter/board-presenter';

document.addEventListener('DOMContentLoaded', () => {
  const boardPresenter = new BoardPresenter();
  boardPresenter.init();
});
