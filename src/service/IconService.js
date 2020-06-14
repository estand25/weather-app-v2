import * as  wIcon from '../icons/Animated'

/**
 * Get the icon associated to the name
 * @param {*} item 
 */
export const iconSwitch = (item) => {
    switch (item) {
        case 'sunny':
            return wea.sunny;
        case 'cloudy':
            return wea.cloudy;
        case 'cloudyDay1':
            return wea.cloudyDay1;
        case 'cloudyDay2':
            return wea.cloudyDay2;
        case 'cloudyDay3':
            return wea.cloudyDay3;
        case 'cloudyNight1':
            return wea.cloudyNight1;
        case 'cloudyNight2':
            return wea.cloudyNight2;
        case 'cloudyNight3':
            return wea.cloudyNight3;
        case 'rainy1':
            return wea.rainy1;
        case 'rainy2':
            return wea.rainy2;
        case 'rainy3':
            return wea.rainy3;
        case 'rainy4':
            return wea.rainy4;
        case 'rainy5':
            return wea.rainy5;
        case 'rainy6':
            return wea.rainy6;
        case 'rainy7':
            return wea.rainy7;
        case 'snowy1':
            return wea.snowy1;
        case 'snowy2':
            return wea.snowy2;
        case 'snowy3':
            return wea.snowy3;
        case 'snowy4':
            return wea.snowy4;
        case 'snowy5':                
            return wea.snowy5;
        case 'snowy6':
            return wea.snowy6;
        case 'thunder':
            return wea.thunder;
        case 'night':
            return wea.night;
        default:
            break;
    }  
}