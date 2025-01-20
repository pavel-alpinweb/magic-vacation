export default function (duration, callback, interval = 1000) {
  const startTime = Date.now();

  requestAnimationFrame(function draw() {
    callback();
    const currentTimeDuration = duration - (((Date.now() - startTime) / 1000) | 0);

    if (currentTimeDuration > 0) {
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, interval);
    }
  });
}
