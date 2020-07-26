/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Forcast from '../../src/page/Forcast';

it('render Forcast', () => {
    const forcast = render(
        <Forcast/>
    );

    expect(forcast).toBeTruthy();
});
