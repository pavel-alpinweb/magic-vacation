import Scene2d from "./scene-2d";
import Animation from "./Animation";
import easings from "./easings";

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
  key: {
    imageId: `key`,
    x: 50,
    y: 50,
    size: 15,
    opacity: 0,
    transforms: {
      translateY: 0,
    }
  },
  crocodile: {
    imageId: `crocodile`,
    x: 50,
    y: 50,
    size: 30,
    opacity: 1,
    transforms: {
      translateX: 35,
      translateY: -7,
    }
  },
  flamingo: {
    imageId: `flamingo`,
    x: 50,
    y: 50,
    size: 0.1,
    opacity: 1,
    transforms: {
      translateX: 0,
      translateY: -5,
      rotate: 40,
    }
  },
  leaf: {
    imageId: `leaf`,
    x: 50,
    y: 50,
    size: 0.1,
    opacity: 1,
    transforms: {
      translateX: 0,
      translateY: -10,
      rotate: -40,
    }
  },
  saturn: {
    imageId: `saturn`,
    x: 50,
    y: 50,
    size: 0.1,
    opacity: 1,
    transforms: {
      translateX: 0,
      translateY: -5,
      rotate: 40,
    }
  },
  snowflake: {
    imageId: `snowflake`,
    x: 50,
    y: 50,
    size: 0.1,
    opacity: 1,
    transforms: {
      translateY: 5
    }
  },
  watermelon: {
    imageId: `watermelon`,
    x: 50,
    y: 50,
    size: 0.1,
    opacity: 1,
    transforms: {
      translateX: 0,
      translateY: -5,
    }
  },
  drop: {
    imageId: `drop`,
    x: 50,
    y: 50,
    size: 1,
    opacity: 1,
    transforms: {
      scaleX: 0,
      scaleY: 0,
      translateX: 3.4,
      translateY: -6
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

    this.afterInit = () => {
      this.objects.crocodile.before = this.createArcMask.bind(this);
      this.objects.crocodile.after = this.restoreDraw.bind(this);

      this.objects.drop.before = this.createRectMask.bind(this);
      this.objects.drop.after = this.restoreDraw.bind(this);
    };

    this.initEventListeners();
    this.initObjects(OBJECTS);
    this.updateSize();
  }

  initEventListeners() {
    window.addEventListener(`resize`, () => {
      this.updateSize();
    });
  }

  initAnimations() {
    this.animations.push(new Animation({
      func: () => {
        this.drawScene();
      },
      duration: `infinite`,
      fps: 60
    }));

    this.initKeyAnimations();
    this.initFlamingoAnimations();
    this.initWaterMellowAnimations();
    this.initLeafAnimations();
    this.initSnowflakeAnimations();
    this.initSaturnAnimations();
    this.initCrocodileAnimations();
    this.initDropAnimations();
  }

  initKeyAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.key.size = progress * 15;
      },
      duration: 500,
      delay: 0,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.key.opacity = progress;
      },
      duration: 500,
      delay: 200,
      easing: easings.easeOutExpo
    }));
  }

  initFlamingoAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.transforms.translateX = -25 * progress;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.size = progress * 15;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.transforms.rotate = progress * -25 + 25;
      },
      duration: 1000,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.transforms.translateY = progress * 100;
      },
      duration: 500,
      delay: 1000,
      easing: easings.easeInQuad
    }));
  }

  initWaterMellowAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.transforms.translateX = -25 * progress;
        this.objects.watermelon.transforms.translateY = 15 * progress;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.size = progress * 12;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.transforms.translateY += progress * 100;
      },
      duration: 550,
      delay: 1000,
      easing: easings.easeInQuad
    }));
  }

  initLeafAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.transforms.translateX = 30 * progress;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.size = progress * 15;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.transforms.rotate += progress * 2.5;
      },
      duration: 500,
      delay: 200,
      easing: easings.easeLinear
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.transforms.translateY += progress * 100;
      },
      duration: 550,
      delay: 1000,
      easing: easings.easeInCubic
    }));
  }

  initSnowflakeAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.snowflake.transforms.translateX = 15 * progress;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.snowflake.size = progress * 12;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.snowflake.transforms.translateY += progress * 100;
      },
      duration: 450,
      delay: 1000,
      easing: easings.easeInCubic
    }));
  }

  initSaturnAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.transforms.translateX = 25 * progress;
        this.objects.saturn.transforms.translateY = 15 * progress;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.size = progress * 12;
      },
      duration: 500,
      delay: 400,
      easing: easings.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.transforms.rotate += -progress * 2;
      },
      duration: 500,
      delay: 200,
      easing: easings.easeLinear
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.transforms.translateY += progress * 100;
      },
      duration: 400,
      delay: 1000,
      easing: easings.easeInCubic
    }));
  }

  createArcMask() {
    const s = this.size / 100;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2 - 70, 7.5 * s, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.clip();
  }

  createRectMask() {
    const s = this.size / 100;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width / 2, this.canvas.height / 2 - 90, 20 * s, 19 * s);
    this.ctx.closePath();
    this.ctx.clip();
  }

  restoreDraw() {
    this.ctx.restore();
  }

  initCrocodileAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.crocodile.transforms.translateX -= progress / 1.1;
      },
      duration: 700,
      delay: 1000,
      easing: easings.easeOutCirc
    }));
  }

  initDropAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.drop.transforms.scaleX = progress * 1.3;
        this.objects.drop.transforms.scaleY = progress * 1.3;
      },
      duration: 400,
      delay: 1800,
      easing: easings.easeLinear
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        const progressReversed = 1 - progress;

        this.objects.drop.transforms.translateY += progress * 3;
        this.objects.drop.opacity = progressReversed;
      },
      duration: 1000,
      delay: 2300,
      easing: easings.easeLinear,
    }));
  }

  updateSize() {
    this.size = Math.min(window.innerWidth, window.innerHeight);

    this.canvas.height = this.size;
    this.canvas.width = this.size;
  }
}
