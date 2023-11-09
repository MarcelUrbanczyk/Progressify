export const formatDate = (date: Date) => {
  const dateToFormat = new Date(date);
  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1;
  const year = dateToFormat.getFullYear();
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
};
