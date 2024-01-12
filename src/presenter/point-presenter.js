import { render } from '../render';
import SortView from '../view/sort-view';
import { getDefaultPoint } from '../const';
import ListPointView from '../view/list-point-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';

export default class PointPresenter {

  constructor({ container, pointModel }) {
    this.bodyContainer = container;
    this.pointListComponent = new ListPointView();
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(new SortView(), this.bodyContainer);
    render(this.pointListComponent, this.bodyContainer);
    render(new EditPointView(getDefaultPoint(), destinations, offers), this.pointListComponent.getElement());
    render(new EditPointView(points[2], destinations, offers), this.pointListComponent.getElement());
    // render(new EditPointView(), this.pointListComponent.getElement());

    for (const point of points) {
      render(new PointView(point, destinations, offers), this.pointListComponent.getElement());
    }
    // for (let i = 0; i < 3; i++) {
    //   render(new PointView({points, destinations, offers}), this.pointListComponent);
    // }
  }
}
