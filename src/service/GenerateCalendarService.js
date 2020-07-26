import CalendarItem from '../model/CalendarItem';

/**
 * Generate a day card with the following information using image from OpenWeatherAPP
 * @param {*} day
 * @param {*} highTemp
 * @param {*} lowTemp
 * @param {*} imageOfDay
 */
export const generateDailyCard = (day, highTemp, lowTemp, imageOfDay) => {
  return new CalendarItem(day, highTemp, lowTemp, imageOfDay);
};

/**
 * Generated a series of day cards
 * @param {*} dayOfWeek
 * @param {*} highTempList
 * @param {*} lowTempList
 * @param {*} imageOfDays
 */
export const generateWeeklyCards = (
  dayOfWeek,
  highTempList,
  lowTempList,
  imageOfDays
) => {
  var weekly = [];

  for (let index = 0; index < dayOfWeek.length; index++) {
    var day = new CalendarItem(
      index,
      dayOfWeek[index],
      highTempList[index],
      lowTempList[index],
      imageOfDays[index]
    );

    weekly = weekly.concat([day]);
  }

  return weekly;
};
