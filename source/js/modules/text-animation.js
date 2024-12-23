import {getRandom} from "./utils";

export default class TextAnimation {
  constructor(
      element,
      timeGap,
      duration,
      startDelay,
  ) {
    this._element = document.querySelector(element);
    this._timeGap = timeGap;
    this._duration = duration;
    this._startDelay = startDelay;

    this._timeOffset = 0;

    this._PROPERTY = `transform`;
    this._ACTIVATE_CLASS = `active`;
    this._STYLE_CLASS = `animated-text`;

    this.prePareText();
  }

  wrapLetterInWord(word) {
    const wordElement = Array.from(word).reduce((fragment, latter) => {
      const span = document.createElement(`span`);
      span.textContent = latter;
      this._timeOffset = getRandom(this._timeOffset, this._timeOffset += this._timeGap);
      span.style.transition = `${this._PROPERTY} ${this._duration}ms ease ${this._timeOffset}ms`;
      fragment.appendChild(span);
      return fragment;
    }, document.createDocumentFragment());
    return wordElement;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(this._STYLE_CLASS);

    const wordsArray = this._element.textContent.trim().split(` `).filter((latter)=>latter !== ``);

    const wrappedWords = wordsArray.reduce((fragmentParent, word) => {
      const wordContainer = document.createElement(`span`);
      wordContainer.appendChild(this.wrapLetterInWord(word));
      wordContainer.classList.add(`text__word`);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(wrappedWords);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    setTimeout(() => {
      this._element.classList.add(this._ACTIVATE_CLASS);
    }, this._startDelay);
  }


  destroyAnimation() {
    this._element.classList.remove(this._ACTIVATE_CLASS);
  }
}
