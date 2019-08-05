export const changeToPercent = (num: number | null) => {
  return num ? (num * 100).toFixed(2) : 0;
};
