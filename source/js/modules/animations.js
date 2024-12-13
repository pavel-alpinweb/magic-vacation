export default () => {
  window.addEventListener(`load`, () => {
    document.body.classList.add(`document-ready`);
  });
};

export const SCREEN_BLOCKER_TIMEOUT = 400;
