const calcMonthWorkDays = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let days = 0;
    for (let day = 1; day <= daysInMonth; day += 1) {
        const currentDate = new Date(year, month, day);
        const weekDay = currentDate.getDay();
        if (weekDay > 0 && weekDay < 6) {
            days += 1;
        }
    }
    return days;
};
export default calcMonthWorkDays;
//# sourceMappingURL=calc-month-work-days.js.map