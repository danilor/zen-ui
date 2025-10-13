import ZenIcon from './ZenIcon';
import {Animated, Easing} from 'react-native';
import { useEffect } from 'react';

type ZenLoadingProps = {
  size?: 'small' | 'large' | number
  color?: string,
  duration?: number
}

const iconName = 'refresh-double';

/**
 * A loading indicator using an animated icon.
 * You can set the size to small, medium or large.
 * @param size
 * @param color
 * @param duration
 * @constructor
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
