import animateNumber from "./animateNumber";

export default class PrizeCounter {
  constructor(params) {
    this.element = document.querySelector(params.elementSelector);
    this.step = params.step;
    this.max = params.max;
    this.fps = params.fps;
    this.delay = params.delay;
  }

  startCounter() {
    this.element.innerHTML = `0`;

    setTimeout(() => {
      animateNumber((currentStep) => {
        this.updateCounter(currentStep);
      }, this.max, this.step, this.fps);
    }, this.delay);
  }

  updateCounter(currentStep) {
    this.element.innerHTML = currentStep;
  }

  init() {
    const url = new URL(window.location.href);
    if (url.hash.slice(1, url.hash.length) === `prizes`) {
      this.startCounter();
    }

    document.addEventListener(`screenChanged`, (event) => {
      if (event.detail.screenName === `prizes`) {
        this.startCounter();
      }
    });
  }
}
