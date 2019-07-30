export const getCurrentDate = () => {
  const currentDate: Date = new Date();
  
  // You could use string templating if you feel like it.
  // It would look like this : `currentDate.toDateString() currentDate.toLocaleTimeString()`.
  // It is not a necessary change, it comes down to preference.
  
  return currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
};
