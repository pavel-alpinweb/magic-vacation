export default function (callback, max, step, fps) {
  let currentStep = 0;
  const frameTime = 1000 / fps;

  requestAnimationFrame(function draw() {
    currentStep = (currentStep + step) < max ? currentStep + step : max;
    callback(currentStep);

    if (currentStep < max) {
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, frameTime);
    }
  });
}
