function easeLinear(x) {
  return x;
}

function easeInCubic(x) {
  return x * x * x;
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function easeInExpo(x) {
  if (x === 0) {
    return 0;
  } else {
    return Math.pow(2, 10 * x - 10);
  }
}

function easeOutExpo(x) {
  if (x === 1) {
    return 1;
  } else {
    return 1 - Math.pow(2, -10 * x);
  }
}

function easeInElastic(x) {
  const c4 = (2 * Math.PI) / 3;

  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  }
}

function easeOutElastic(x) {
  const c4 = (2 * Math.PI) / 3;

  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  }
}

function easeInQuad(x) {
  return x * x;
}

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInCirc(x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function easeInQuint(x) {
  return x * x * x * x * x;
}

function easeInBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return c3 * x * x * x - c1 * x * x;
}

const timingFunctions = Object.freeze({
  easeLinear,
  easeInCubic,
  easeOutCubic,
  easeInExpo,
  easeOutExpo,
  easeInElastic,
  easeOutElastic,
  easeInQuad,
  easeOutCirc,
  easeInCirc,
  easeInQuint,
  easeInBack,
});


export default timingFunctions;
