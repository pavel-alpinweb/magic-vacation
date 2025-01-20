import throttle from 'lodash/throttle';
import {SCREEN_BLOCKER_TIMEOUT} from "./animations";
import {resetThemeColor, setThemeColor, themeColorElements} from "./ChangeThemeColor";

export default class FullPageScroll {
  constructor() {
    this.THROTTLE_TIMEOUT = 1000;
    this.scrollFlag = true;
    this.timeout = null;
    this.scrollBlockerTimeout = 0;

    this.screenElements = document.querySelectorAll(`.screen:not(.screen--result)`);
    this.menuElements = document.querySelectorAll(`.page-header__menu .js-menu-link`);

    this.activeScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChanged.bind(this);
  }

  init() {
    document.addEventListener(`wheel`, throttle(this.onScrollHandler, this.THROTTLE_TIMEOUT, {trailing: true}));
    window.addEventListener(`popstate`, this.onUrlHashChengedHandler);

    this.onUrlHashChanged();
  }

  onScroll(evt) {
    if (this.scrollFlag) {
      this.reCalculateActiveScreenPosition(evt.deltaY);
      const currentPosition = this.activeScreen;
      if (currentPosition !== this.activeScreen) {
        this.changePageDisplay();
      }
    }
    this.scrollFlag = false;
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.timeout = null;
      this.scrollFlag = true;
    }, this.THROTTLE_TIMEOUT);
  }

  onUrlHashChanged() {
    const newIndex = Array.from(this.screenElements).findIndex((screen) => location.hash.slice(1) === screen.id);
    this.activeScreen = (newIndex < 0) ? 0 : newIndex;
    this.changePageDisplay();
  }

  changePageDisplay() {
    const activeScreen = this.screenElements[this.activeScreen];
    this.scrollBlockerTimeout = activeScreen.classList.contains(`screen--prizes`) ? SCREEN_BLOCKER_TIMEOUT : 0;
    if (activeScreen.classList.contains(`screen--story`)) {
      setThemeColor(`purple`);
    } else {
      for (const element of themeColorElements) {
        resetThemeColor(element);
      }
    }
    this.showScreenBlocker();
    setTimeout(() => {
      this.changeVisibilityDisplay();
    }, this.scrollBlockerTimeout);
    this.changeActiveMenuItem();
    this.emitChangeDisplayEvent();
    this.startGame();
  }

  changeVisibilityDisplay() {
    this.screenElements.forEach((screen) => {
      screen.classList.add(`screen--hidden`);
      screen.classList.remove(`active`);
    });
    this.screenElements[this.activeScreen].classList.remove(`screen--hidden`);
    setTimeout(() => {
      this.screenElements[this.activeScreen].classList.add(`active`);
    }, 100);
  }

  showScreenBlocker() {
    const activeScreen = this.screenElements[this.activeScreen];
    const screenBlocker = document.querySelector(`#history-screen-blocker`);
    if (activeScreen.classList.contains(`screen--prizes`)) {
      screenBlocker.classList.add(`show`);
    } else {
      screenBlocker.classList.remove(`show`);
    }
  }

  changeActiveMenuItem() {
    const activeItem = Array.from(this.menuElements).find((item) => item.dataset.href === this.screenElements[this.activeScreen].id);
    if (activeItem) {
      this.menuElements.forEach((item) => item.classList.remove(`active`));
      activeItem.classList.add(`active`);
    }
  }

  emitChangeDisplayEvent() {
    const event = new CustomEvent(`screenChanged`, {
      detail: {
        'screenId': this.activeScreen,
        'screenName': this.screenElements[this.activeScreen].id,
        'screenElement': this.screenElements[this.activeScreen]
      },
      bubbles: true,
    });

    document.body.dispatchEvent(event);
  }

  startGame() {
    const isResultScreenShow = document.querySelector(`.screen--result.screen--show`);

    const activeScreen = this.screenElements[this.activeScreen];
    const isGameScreen = activeScreen.classList.contains(`screen--game`);

    if (!isResultScreenShow && isGameScreen) {
      const event = new CustomEvent(`startGame`, {
        bubbles: true,
      });

      document.body.dispatchEvent(event);
    }
  }

  reCalculateActiveScreenPosition(delta) {
    if (delta > 0) {
      this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
    } else {
      this.activeScreen = Math.max(0, --this.activeScreen);
    }
  }
}
