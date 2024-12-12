import TextAnimation from "./text-animation";

export default () => {
  window.addEventListener(`load`, () => {
    document.body.classList.add(`document-ready`);

    const introTitleAnimation = new TextAnimation(`.intro__title`, 100, 400, 500);

    introTitleAnimation.runAnimation();
  });
};

export const SCREEN_BLOCKER_TIMEOUT = 400;
