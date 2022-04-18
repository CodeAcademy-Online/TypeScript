const calcMonthWorkDays = (
  year: number = new Date().getFullYear(),
  month: number = new Date().getMonth(),
): number => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let days: number = 0;
  for (let day = 1; day <= daysInMonth; day += 1) {
    const currentDate: Date = new Date(year, month, day);
    const weekDay: number = currentDate.getDay();
    if (weekDay > 0 && weekDay < 6) {
      days += 1;
    }
  }
  return days;
};

export default calcMonthWorkDays;
