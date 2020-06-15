/* eslint-disable react/prop-types */
import React from 'react';
import WeatherIcon from './WeatherIcon';
import OpenWeatherIcon from './OpenWeatherIcon';

const DayOfWeek = ({ title, highTemp, lowTemp, weather }) => {
    const getWeatherIcon = (weather_) => {
        if (weather_.length === 3) {
            return <OpenWeatherIcon icon={weather_} />;
        } else {
            return <WeatherIcon weather={weather_} />;
        }
    };

    const degreeConvertation = (temp) => {
        if (temp.toString().split('.').length >= 2) {
            return temp.toString().split('.')[0] + '\xB0';
        } else {
            return temp + '\xB0';
        }
    };

    return (
        <div className="DOW_frame">
            <div className="DOW_title_Section">
                <p className="DOW_title">{title}</p>
            </div>
            <div className="DOW_Middle_Section">{getWeatherIcon(weather)}</div>
            <div className="DOW_Low_Section">
                <div>
                    <p className="DOW_Subtitle_Hight">{degreeConvertation(highTemp)}</p>
                </div>
                <div>
                    <p className="DOW_Subtitle_Low">{degreeConvertation(lowTemp)}</p>
                </div>
            </div>
        </div>
    );
};

export default DayOfWeek;
