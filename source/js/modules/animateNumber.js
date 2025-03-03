export default function (callback, max, step, fps) {
  let currentStep = 0;
  const frameTime = 1000 / fps;
  let now;
  let then = Date.now();
  let elapsed;

  requestAnimationFrame(function draw() {
    // проверяем, сколько времени прошло с предыдущего запуска
    now = Date.now();
    elapsed = now - then;
    // вычисляем текущий шаг
    currentStep = (currentStep + step) < max ? currentStep + step : max;

    if (elapsed > frameTime) {
      // сохранение времени текущей отрисовки кадра
      then = now - (elapsed % frameTime);

      // запуск функции отрисовки
      callback(currentStep);
    }


    if (currentStep < max) {
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, frameTime);
    }
  });
}
