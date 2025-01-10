// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import animations from './modules/animations.js';
import FullPageScroll from './modules/full-page-scroll';
import TextAnimationSwitcher from "./modules/TextAnimationSwitcher";
import GameCounter from "./modules/gameCounter";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
animations();

const fullPageScroll = new FullPageScroll();
const textAnimationSwitcher = new TextAnimationSwitcher();
const gameCounter = new GameCounter(`.js-game-counter`, 60 * 5);
fullPageScroll.init();
textAnimationSwitcher.init();
gameCounter.init();
