export default (date) => {
  const day = 1000 * 3600 * 24;
  const today = new Date();
  const deadline = new Date(date);
  const daysLeft = Math.floor((deadline.getTime() - today.getTime()) / day);
  return daysLeft;
};
