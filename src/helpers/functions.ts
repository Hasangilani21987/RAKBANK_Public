import {Platform, Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

const generateUniqueId = () => {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

const convertFontScale = (size: number) => {
  const scale = width / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export {generateUniqueId, convertFontScale};
