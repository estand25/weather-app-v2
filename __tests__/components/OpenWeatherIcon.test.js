/* eslint-disable eol-last */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { OpenWeatherIcon } from '../../src/components';

it('render OpenWeatherIcon without crashing', () => {
    const openWeatherIcon = render(
        <OpenWeatherIcon
            icon={'01d'}
        />
    );
    expect(openWeatherIcon).toBeTruthy();
});