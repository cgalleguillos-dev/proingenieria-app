export const hoursBetween = (date1: string, date2: string) => {
  const initDateSplit = date1.split(":");
  const endDateSplit = date2.split(":");
  const initDateHour = parseInt(initDateSplit[0]);
  const initDateMinutes = parseInt(initDateSplit[1]);
  const endDateHour = parseInt(endDateSplit[0]);
  const endDateMinutes = parseInt(endDateSplit[1]);
  const hours = endDateHour - initDateHour;
  const minutes = endDateMinutes - initDateMinutes;
  return hours + minutes / 60;
}