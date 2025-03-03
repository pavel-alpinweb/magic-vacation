import Scene2dSeaCalf from "./scene-2d-sea-calf";
import Scene2dCrocodile from "./scene-2d-crocodile";

export default () => {
  const scene2dSeaCalf = new Scene2dSeaCalf();
  const scene2dCrocodile = new Scene2dCrocodile();
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);

        if (target === `result`) {
          scene2dSeaCalf.start();
        } else if (target === `result3`) {
          scene2dCrocodile.start();
        }
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();

        const event = new CustomEvent(`startGame`, {
          bubbles: true,
        });

        document.body.dispatchEvent(event);
      });
    }
  }
};
