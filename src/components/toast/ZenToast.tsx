import { useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import LayersConfig from '../../config/Layers.config';
import ColorUtil from '../../util/Color.util';
import {useTheme} from './../../hooks/useTheme';
import ThemeConfig from '../../config/Theme.config';
import ZenText from './../themed/ZenText';
import ToastConfig from '../../config/Toast.config';
import type { ToastModel } from '../../models/ToastModel';
import { useToast, useToastData } from '../../hooks/useToast';
import LayoutConfig from '../../config/LayoutConfig';
type ToastProps = {

}


const defaultConfig : ToastModel= {
  speed: ToastConfig.default.speed as 'normal'|'fast'|'slow',
  duration: ToastConfig.default.duration,
  position: ToastConfig.default.position as 'top'|'bottom',
  margin: ToastConfig.default.margin,
  transparency: ThemeConfig.defaultDimValue,
};

/**
 * @docunator
 * @title ZenToast
 * @description A simple toast notification component for displaying brief messages to users. Not intended to be used directly, use the useToast hook instead. To enable the usage of toasts, make sure to wrap your application with the ZenThemeProvider component and pass the "toast" parameter as true.
 * @category Utility Components
 * @see useToast
 * @see ZenThemeProvider
 * @experimental This is a new component and may undergo significant changes in future releases.
 */
export default function ZenToast(
  {

  }: ToastProps,
) {

  const toast = useToastData();
  const _toast = useToast();

  const theme = useTheme();
  const animatedValue = new Animated.Value(0);



  useEffect(() => {

    // console.log('TOAST CHANGED', toast);



    if (toast.message !== '') {
      toast.config = { ...defaultConfig, ...toast.config };
      animatedValue.setValue(0);
      animatedValue.stopAnimation();

      Animated.timing(animatedValue, {
        toValue: 1,
        duration:
          toast.config.speed === 'fast'
            ? ToastConfig.speed.fast
            : toast.config.speed === 'slow'
              ? ToastConfig.speed.slow
              : ToastConfig.speed.normal,
        useNativeDriver: true,
      }).start();
       setTimeout(() => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration:
            toast.config.speed === 'fast'
              ? ToastConfig.speed.fast
              : toast.config.speed === 'slow'
                ? ToastConfig.speed.slow
                : ToastConfig.speed.normal,
          useNativeDriver: true,
        }).start(() => {
          //  onHide()
          _toast('');
        });
      }, toast.config.duration); // Hide after 3 seconds
    }
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);


  // @ts-ignore
  const position: string = ( toast.config && toast.config.position ? toast.config.position : defaultConfig.position);

  // @ts-ignore
  const margin: string = ( toast.config && toast.config.margin ? toast.config.margin : defaultConfig.margin);

  // @ts-ignore
  const type: string = ( toast.config && toast.config.type ? toast.config.type : defaultConfig.type);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    // @ts-ignore
    outputRange: [0, (position === 'top' ? margin : -1 * margin)], // Slide from top
  });


  let cC = theme.background;
  if(type !== 'default' && theme[type]){
    cC = theme[type]!;
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: (position==='bottom' ? '100%' : 'auto'), // Adjust position as needed
      // bottom: (position==='bottom' ? margin : 'auto'),
      bottom: (position === 'top' ? '100%' : 'auto'),
      left: '10%',
      right: '10%',
      backgroundColor: cC,
      padding: LayoutConfig.space,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: LayersConfig.toast,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: ThemeConfig.defaultDimValue,
      shadowRadius: 4,
      elevation: 5,
      maxWidth: '80%',
    },
    messageText: {
      // color: ColorUtil.getContrastTextColor(cC),
      // fontSize: 16,
    },
  });

  return (

      <Animated.View style={[styles.container, { ["transform"]: [{ translateY }] }]}>
        <ZenText textColor={ColorUtil.getContrastTextColor(cC)} style={styles.messageText}>{toast.message}</ZenText>
      </Animated.View>

  );
}
