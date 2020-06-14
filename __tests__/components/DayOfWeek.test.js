import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DayOfWeek } from '../../src/components'

test('render day of week and confirm title appears', () => {
    const { getByText } = render(
        <DayOfWeek
            title="Sun"
            highTemp='72.5'
            lowTemp='71.5'
            weather="01d"
        />)
    
    const title = getByText('Sun')
    expect(title).toBeTruthy()
})