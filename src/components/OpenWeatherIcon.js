/* eslint-disable react/prop-types */
import React from 'react';

const OpenWeatherIcon = ({ icon }) => {
    const iLink = 'http://openweathermap.org/img/w/' + icon + '.png';

    return (
        <div>
            <img src={iLink} width="64" height="64" alt="" />
        </div>
    );
};

export default OpenWeatherIcon;
