import moment from "moment";
import "moment/locale/ru";

export const getDate = (date: string): string => {
  const time = Date.parse(date);
  const russionTime = new Intl.DateTimeFormat("ru", {
    timeZoneName: "short",
  }).format(time);
  const day = moment(date).calendar();
  return `${day} i-${russionTime.slice(russionTime.indexOf(",") + 2)}`;
};
