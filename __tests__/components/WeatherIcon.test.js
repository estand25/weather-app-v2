/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { WeatherIcon } from '../../src/components';

it('render without crashing', () => {
    const openWeatherIcon = render(
        <WeatherIcon
            weather={'01d'}
        />
    );

    expect(openWeatherIcon).toBeTruthy();
});
