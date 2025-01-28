import animateInterval from "./animateInterval";

export default class GameCounter {
  constructor(elementSelector, duration) {
    this.element = document.querySelector(elementSelector);
    this.duration = duration;
  }

  startCounter() {
    animateInterval(this.duration, (currentTimeDuration) => {
      this.updateTime(currentTimeDuration);
    });
  }

  updateTime(currentTimeDuration) {

    const minutes = Math.floor(currentTimeDuration / 60);
    const seconds = Math.floor(currentTimeDuration % 60) | 0;

    const [spanMinutes, spanSeconds] = this.element.querySelectorAll(`span`);

    spanSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    spanMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  }

  init() {
    document.addEventListener(`startGame`, () => {
      this.startCounter();
    });
  }
}
