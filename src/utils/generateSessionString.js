export function generateSessionString() {
  return [...Array(128)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}
