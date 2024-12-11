export function getRandom(min, max) {
  if (min > max) {
    [min, max] = [max, min]; // exchange
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
