export const calculateAge = (date: {
  year: number;
  month: number;
  day: number;
}) => {
  const curDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };
  // console.log(curDate);
  const days =
    curDate.day < date.day
      ? (curDate.month--, curDate.day + 30 - date.day)
      : curDate.day - date.day;

  const months =
    curDate.month < date.month
      ? (curDate.year--, curDate.month + 12 - date.month)
      : curDate.month - date.month;

  const years = curDate.year - date.year;

  return { years, months, days };
};
