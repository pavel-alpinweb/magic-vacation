import animateInterval from "./animateInterval";

export default class GameCounter {
  constructor(element, duration) {
    this.elementSelector = element;
    this.element = null;
    this.startTime = null;
    this.currentTimeDuration = 0;
    this.requestID = null;
    this.duration = duration;
  }

  startCounter() {
    this.startTime = Date.now();

    this.currentTimeDuration = this.duration;
    animateInterval(this.duration, () => {
      this.updateTime();
    });
  }

  updateTime() {
    this.currentTimeDuration = this.duration - (((Date.now() - this.startTime) / 1000) | 0);

    const minutes = Math.floor(this.currentTimeDuration / 60);
    const seconds = Math.floor(this.currentTimeDuration % 60) | 0;

    const [spanMinutes, spanSeconds] = this.element.querySelectorAll(`span`);

    spanSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    spanMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  }

  init() {
    this.element = document.querySelector(this.elementSelector);

    document.addEventListener(`startGame`, () => {
      this.startCounter();
    });
  }
}
