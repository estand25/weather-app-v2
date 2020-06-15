import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../../src/app/index.js'

it('render without crashing', () => {
    const app = render(<App />)
    expect(app).toBeTruthy()
})