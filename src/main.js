import { render } from './render';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
// import AddListPointView from './view/add-new-point-view';
import ListView from './view/list-view';
import EditPointView from './view/edit-point-view';

const siteMainElement = document.querySelector('.trip-main');
const siteSortElement = document.querySelector('.trip-events');

render(new FilterView(), siteMainElement);
render(new SortView(), siteSortElement);
// render(new AddListPointView(), siteSortElement);
render(new EditPointView(), siteSortElement);
render(new ListView(), siteSortElement);
