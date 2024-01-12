import { createElement } from '../render.js';
// import createPointTemplate from './point-view';
// import createEditPointTemplate from './edit-point-view';
// import { offers } from '../mock/offers.js';
// import { points } from '../mock/points.js';
// import { destinations} from '../mock/destinations.js';

function createListPointViewTemplate() {
  // ${new createEditPointTemplate(offers, points, destinations).getTemplate()}
  // ${new createPointTemplate(offers, points, destinations).getTemplate()}
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
}
export default class ListPointView {
  getTemplate() {
    return createListPointViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
