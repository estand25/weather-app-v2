import axio from 'axios';

/**
 * Return the OpenWeatherApi Json Data
 */
export const fetchJson = (url, method) => {
    return axio({
        url: url,
        method: method
    })
}