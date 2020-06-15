/**
 * Return the OpenWeatherApi Json for daily specific hourly data
 *
 * @param {*} i - Json from OpenWeatherAPI for the 5 days
 * @param {*} daily - One of the day of the result you want
 */
export const jsonDailyHours = (i, daily) => {
    var weeklyData = [];

    for (let index = 0; index < i.data.list.length; index++) {
        weeklyData = weeklyData.concat(i.data.list[index]);
    }

    var begin = 0;
    var end = 0;

    switch (daily) {
        case 0:
            begin = 0;
            end = 7;
            break;
        case 1:
            begin = 8;
            end = 15;
            break;
        case 2:
            begin = 16;
            end = 23;
            break;
        case 3:
            begin = 24;
            end = 31;
            break;
        case 4:
            begin = 32;
            end = 39;
            break;
        default:
            begin = 0;
            end = 40;
            break;
    }

    return weeklyData.slice(begin, end);
};

/**
 * Return Daily from OpenWeatherApi
 *
 * @param {*} i - Json from OpenWeatherAPI for the 5 days
 */
export const jsonDailyWeather = (i) => {
    var weeklyData = [];

    for (let index = 0; index < i.data.list.length; index = index + 8) {
        weeklyData = weeklyData.concat(i.data.list[index]);
    }

    return weeklyData;
};

/**
 * Return Daily weather from OpenWeatherAPI
 *
 * @param {*} i - Json from OpenWeatherAPI for the 5 days
 */
export const jsonWeather = (i) => {
    var weathers = i.map((a) => a.weather);
    var weather = [];

    for (let index = 0; index < weathers.length; index++) {
        weather = weather.concat(weathers[index]);
    }

    return weather;
};

/**
 * Return Daily weather icon from OpenWeatherAPI
 *
 * @param {*} i - Json from OpenWeatherAPI for the 5 days
 */
export const jsonWeatherIcon = (i) => {
    var weathers = i.map((a) => a.weather);
    var wIcons = [];

    for (let index = 0; index < weathers.length; index++) {
        wIcons = wIcons.concat(weathers[index]);
    }

    return wIcons.map((a) => a.icon);
};

/**
 * Return day of weather from OpenWeatherAPI
 *
 * @param {*} i - Json from OpenWeatherAPI for the 5 days
 */
export const jsonWeatherDayOfWeek = (i) => {
    var weathers = i.map((a) => a.weather);
    var dayOfWeek = [];

    for (let index = 0; index < weathers.length; index++) {
        var newDate = new Date(i.map((i) => i.dt_txt)[index]);

        dayOfWeek = dayOfWeek.concat(newDate.toString().substring(0, 3));
    }

    return dayOfWeek;
};
