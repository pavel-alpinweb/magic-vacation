export default function (duration, callback) {
  const startTime = Date.now();

  requestAnimationFrame(function draw() {
    const currentTimeDuration = duration - (((Date.now() - startTime) / 1000) | 0);
    callback(currentTimeDuration);

    if (currentTimeDuration > 0) {
      requestAnimationFrame(draw);
    }
  });
}
