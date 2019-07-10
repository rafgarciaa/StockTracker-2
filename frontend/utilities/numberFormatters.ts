export const changeToPercent = (num: number) => {
  return num ? (num * 100).toFixed(2) : null;
};
