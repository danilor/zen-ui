import ZenIcon from './ZenIcon';
import {Animated, Easing} from 'react-native';
import { useEffect } from 'react';

/**
 * @docunator
 * @title ZenLoadingProps
 * @description Props for the ZenLoading component.
 * @category Themed Components Props
 */
type ZenLoadingProps = {
  size?: 'small' | 'large' | number
  color?: string,
  duration?: number
}

const iconName = 'refresh-double';

/**
 * @docunator
 * @title ZenLoading
 * @description A loading indicator using an animated icon. You can set the size to small, medium or large.
 * @param {number} size The size of the loading indicator. Can be 'small', 'large' or a number. Default is 'small'
 * @param {string} color The color of the loading indicator. Default is the text color of the current theme
 * @param {number} duration The duration of one full rotation in milliseconds. Default is 1500ms
 * @category Themed Components
 *
 */
export default function ZenLoading(
  {
    size = 'small',
    color,
    duration = 1500
  }: ZenLoadingProps

){

  const spinValue = new Animated.Value(0);
  const spin = () => {
    spinValue.setValue(0); // Reset the spin value
    Animated.timing(
      spinValue,
      {
        toValue: 1, // Animate to 1
        duration: duration, // Duration of one full rotation
        easing: Easing.linear, // Linear easing for a continuous spin
        useNativeDriver: true, // Use native driver for performance
      }
    ).start(() => spin()); // Loop the animation
  };

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Map 0-1 to 0-360 degrees
  });

  const iconSize = (size === 'small' ? 24 : ( size === 'large' ? 36 : (typeof size === 'number' ? size : null)  )  );

  useEffect(()=>{
    spin();
  },[]);


  return (
    <>
      <Animated.View style={{ transform: [{ rotate }] , width: iconSize}}>
        <ZenIcon
          color={color ?? undefined}
          size={ iconSize ?? undefined }
          name={iconName}
        />
      </Animated.View>

    </>
  );

}
