/* eslint-disable react/prop-types */
import React from 'react';
import { IconService } from '../service';

const WeatherIcon = ({ weather }) => {
  const iconWeather = IconService.iconSwitch(weather);

  return <img src={iconWeather} alt="" />;
};

export default WeatherIcon;
