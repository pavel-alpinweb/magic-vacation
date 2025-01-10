const sliderControls = document.querySelectorAll(`.js-control`);
const pageHeaderMenu = document.querySelector(`.js-menu`);
const socialBlockToggler = document.querySelector(`.js-social-block-toggler`);
const socialLink = document.querySelectorAll(`.js-social-link`);

const themes = [`purple`, `blue`, `grey`];

export const themeColorElements = [...sliderControls, pageHeaderMenu, socialBlockToggler, ...socialLink];

export const setThemeColor = function (theme) {
  for (const element of themeColorElements) {
    resetThemeColor(element);
    element.classList.add(theme);
  }
};

export const resetThemeColor = function (element) {
  for (let color of themes) {
    element.classList.remove(color);
  }
};
