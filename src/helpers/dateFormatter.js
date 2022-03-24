export const dateFormatter = (val) => {
  let date = new Date();

  return date.toDateString(val);
};
