import { render, RenderPosition } from './render';
import PointModel from './model/point-model';
import PointPresenter from './presenter/point-presenter';
import FilterView from './view/filter-view';
import InfoView from './view/info-view';

const mainContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const bodyContainer = document.querySelector ('.trip-events');

render (new InfoView(), mainContainer, RenderPosition.AFTERBEGIN);
render (new FilterView(), filtersContainer, RenderPosition.BEFOREBEGIN);

const pointModel = new PointModel();
pointModel.init();

const pointPresenter = new PointPresenter({container: bodyContainer, pointModel: pointModel});
pointPresenter.init();
