import * as wIcon from '../icons/Animated';

/**
 * Get the icon associated to the name
 * @param {*} item
 */
export const iconSwitch = (item) => {
  switch (item) {
    case 'sunny':
      return wIcon.sunny;
    case 'cloudy':
      return wIcon.cloudy;
    case 'cloudyDay1':
      return wIcon.cloudyDay1;
    case 'cloudyDay2':
      return wIcon.cloudyDay2;
    case 'cloudyDay3':
      return wIcon.cloudyDay3;
    case 'cloudyNight1':
      return wIcon.cloudyNight1;
    case 'cloudyNight2':
      return wIcon.cloudyNight2;
    case 'cloudyNight3':
      return wIcon.cloudyNight3;
    case 'rainy1':
      return wIcon.rainy1;
    case 'rainy2':
      return wIcon.rainy2;
    case 'rainy3':
      return wIcon.rainy3;
    case 'rainy4':
      return wIcon.rainy4;
    case 'rainy5':
      return wIcon.rainy5;
    case 'rainy6':
      return wIcon.rainy6;
    case 'rainy7':
      return wIcon.rainy7;
    case 'snowy1':
      return wIcon.snowy1;
    case 'snowy2':
      return wIcon.snowy2;
    case 'snowy3':
      return wIcon.snowy3;
    case 'snowy4':
      return wIcon.snowy4;
    case 'snowy5':
      return wIcon.snowy5;
    case 'snowy6':
      return wIcon.snowy6;
    case 'thunder':
      return wIcon.thunder;
    case 'night':
      return wIcon.night;
    default:
      break;
  }
};
