export const dateString = (date: Date) => {
  const currentDate =new Date(date)
  const day = currentDate.getDate();

  let stringDay = "01";
  if (day < 10 && day !== 0) stringDay = "0" + day;
  else if (day >= 10) stringDay = `${day}`;

  const monthInteger = currentDate.getMonth() + 1;
  const month =
    monthInteger < 10 ? `0${monthInteger}` : monthInteger;
  const dateString = `${stringDay}-${month}-${currentDate.getFullYear()}`;
  console.log(dateString);
  return dateString;
};
