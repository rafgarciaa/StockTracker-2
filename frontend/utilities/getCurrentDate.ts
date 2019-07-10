export const getCurrentDate = () => {
  const currentDate: Date = new Date();
  return currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
};
