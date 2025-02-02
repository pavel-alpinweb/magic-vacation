import TextAnimation from "./text-animation";

export default class TextAnimationSwitcher {
  constructor() {
    this.animationsSet = [
      {
        screen: `top`,
        animations: [
          new TextAnimation(`.intro__title`, 100, 400, 100),
          new TextAnimation(`.intro__date`, 100, 600, 1000),
        ],
      },
      {
        screen: `story`,
        animations: [
          new TextAnimation(`.slider__item-title`, 100, 400, 100),
        ],
      },
      {
        screen: `prizes`,
        animations: [
          new TextAnimation(`.prizes__title`, 100, 400, 1100),
        ],
      },
      {
        screen: `rules`,
        animations: [
          new TextAnimation(`.rules__title`, 100, 400, 100),
        ],
      },
      {
        screen: `game`,
        animations: [
          new TextAnimation(`.game__title`, 100, 400, 100),
        ],
      },
    ];
    this.currentTextAnimation = null;
  }

  setCurrentTextAnimationByUrl() {
    const url = new URL(window.location.href);
    const screen = url.hash === `` ? `top` : url.hash.slice(1, url.hash.length);

    this.currentTextAnimation = this.animationsSet.find((animation) => animation.screen === screen);
  }

  runCurrentTextAnimation() {
    if (!this.currentTextAnimation) {
      return;
    }

    for (const animation of this.currentTextAnimation.animations) {
      animation.runAnimation();
    }
  }

  destroyCurrentTextAnimation() {
    if (!this.currentTextAnimation) {
      return;
    }

    for (const animation of this.currentTextAnimation.animations) {
      animation.destroyAnimation();
    }
  }

  init() {
    this.setCurrentTextAnimationByUrl();
    this.runCurrentTextAnimation();
    document.addEventListener(`screenChanged`, () => {
      this.destroyCurrentTextAnimation();
      this.setCurrentTextAnimationByUrl();
      this.runCurrentTextAnimation();
    });
  }
}
