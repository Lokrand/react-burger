export const getDate = (date) => {
  const moment = require('moment');
  require('moment/locale/ru');
  const time = new Date(Date.parse(date))
  const russionTime = new Intl.DateTimeFormat("ru", {timeZoneName: "short"}).format(time)
  const day = moment(date).calendar()
  return `${day} i-${russionTime.slice(russionTime.indexOf(',') + 2)}`
}

