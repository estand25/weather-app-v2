/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { DayOfWeek } from '../../src/components';

it('render day of week and confirm title appears', () => {
    const { getByText } = render(
        <DayOfWeek
            title="Sun"
            highTemp="72.5"
            lowTemp="71.5"
            weather="01d"
        />);

    const title = getByText('Sun');
    expect(title).toBeTruthy();
});

it('render day of week without crashing', () => {
    const { getByText } = render(
        <DayOfWeek
            title="Sun"
            highTemp="5"
            lowTemp="9"
            weather="01"
        />);

    const title = getByText("Sun");
    expect(title).toBeTruthy();
});
