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
import PrizeCounter from "./modules/prizeCounter";

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
const prizeCounterJourneys = new PrizeCounter({
  elementSelector: `.js-prize-journeys`,
  step: 1,
  max: 3,
  fps: 3,
  delay: 0,
});
const prizeCounterCases = new PrizeCounter({
  elementSelector: `.js-prize-cases`,
  step: 1,
  max: 7,
  fps: 12,
  delay: 1000,
});
const prizeCounterCodes = new PrizeCounter({
  elementSelector: `.js-prize-codes`,
  step: 24,
  max: 900,
  fps: 30,
  delay: 1500,
});

fullPageScroll.init();
textAnimationSwitcher.init();
gameCounter.init();

prizeCounterJourneys.init();
prizeCounterCases.init();
prizeCounterCodes.init();
