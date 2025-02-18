import Scene2d from "./scene-2d";

const IMAGES_URLS = Object.freeze({
  crocodile: `img/module-4/lose-images/crocodile.png`,
  drop: `img/module-4/lose-images/drop.png`,
  flamingo: `img/module-4/lose-images/flamingo.png`,
  key: `img/module-4/lose-images/key.png`,
  leaf: `img/module-4/lose-images/leaf.png`,
  saturn: `img/module-4/lose-images/saturn.png`,
  snowflake: `img/module-4/lose-images/snowflake.png`,
  watermelon: `img/module-4/lose-images/watermelon.png`,
});

const OBJECTS = Object.freeze({
  crocodile: {
    imageId: `crocodile`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  drop: {
    imageId: `drop`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  flamingo: {
    imageId: `flamingo`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  key: {
    imageId: `key`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  leaf: {
    imageId: `leaf`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  saturn: {
    imageId: `saturn`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  snowflake: {
    imageId: `snowflake`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
  watermelon: {
    imageId: `watermelon`,
    x: 90,
    y: 50,
    size: 10,
    opacity: 0,
    transforms: {
      translateY: -10
    }
  },
});

export default class Scene2dCrocodile extends Scene2d {
  constructor() {
    const canvas = document.getElementById(`crocodile-scene`);

    super({
      canvas,
      objects: OBJECTS,
      imagesUrls: IMAGES_URLS,
    });

    this.initEventListeners();
    this.initObjects(OBJECTS);
    this.updateSize();
  }

  initEventListeners() {
    window.addEventListener(`resize`, () => {
      this.updateSize();
    });
  }

  updateSize() {
    this.size = Math.min(window.innerWidth, window.innerHeight);

    this.canvas.height = this.size;
    this.canvas.width = this.size;
  }
}
