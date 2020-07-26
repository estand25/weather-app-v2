/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { DayOfWeekForcast } from '../../src/components';

it('render day of week forcast and confirm title appears', () => {
    const { getByText } = render(
        <DayOfWeekForcast
            dayOfWeek="Sun"
            highTemp="72.5"
            lowTemp="71.5"
            weatherImage="01d"
        />);

    const title = getByText("Sun");
    expect(title).toBeTruthy();
});
