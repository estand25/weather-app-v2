/* eslint-disable react/prop-types */
import React from 'react';
import DayOfWeek from './DayOfWeek';

const DayOfWeekForcast = ({
    id,
    dayOfWeek,
    highTemp,
    lowTemp,
    weatherImage
}) => {
    return (
        <DayOfWeek
            title={dayOfWeek}
            highTemp={highTemp}
            lowTemp={lowTemp}
            weather={weatherImage}
        />
    );
};

export default DayOfWeekForcast;
