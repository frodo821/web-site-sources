export function isMobile() {
  return getComputedStyle(document.documentElement).getPropertyValue('--is-mobile').trim() === "yes"
}

export function generateRandomStr(len: number) {
  const chrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  return Array.from(new Array(len).keys()).map(_=>chrs[Math.ceil(Math.random()*61)]).join('');
}
