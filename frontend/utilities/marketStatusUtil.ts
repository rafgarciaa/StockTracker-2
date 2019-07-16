export const isMarketOpen = () => {
  const dateNow: Date = new Date();
  const marketOpen: number = new Date().setUTCHours(13, 30, 0, 0);
  const marketClose: number = new Date().setUTCHours(20, 0, 0, 0);

  return dateNow.getTime() > marketOpen && dateNow.getTime() < marketClose;
};
