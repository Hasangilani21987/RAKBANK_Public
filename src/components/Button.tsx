import React from 'react';
import {convertFontScale} from '../helpers/functions';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type TextButtonProps = {
  btnTxt: string;
  btnTxtColor: string;
  onPress: () => void;
  disableBtn?: boolean;
  disableBtnStyles?: StyleProp<ViewStyle>;
  btnContainerStyles?: StyleProp<ViewStyle>;
};

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

const AnimatedTextBtn = ({
  btnTxt,
  onPress,
  btnTxtColor,
  disableBtnStyles,
  disableBtn = true,
  btnContainerStyles,
}: TextButtonProps) => {
  const scale = useSharedValue(1); // Default scale

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95, {
      damping: 15,
      stiffness: 200,
    });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 200,
    });
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <AnimatedButton
        disabled={disableBtn}
        style={[animatedStyle, disableBtnStyles, btnContainerStyles]}>
        <Text style={[styles.btnTxtStyles, {color: btnTxtColor}]}>
          {btnTxt}
        </Text>
      </AnimatedButton>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnTxtStyles: {
    fontSize: convertFontScale(14),
  },
});

export default AnimatedTextBtn;
