import { useState, useEffect } from 'react';
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
 */
export default function ZenToast(
  {

  }: ToastProps,
) {


  const [visible, setVisible] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('Notification');

  const toast = useToastData();
  const _toast = useToast();

  const [config, setConfig] = useState<ToastModel>(defaultConfig);

  const theme = useTheme();
  const animatedValue = new Animated.Value(0);

  useEffect(() => {

    // console.log('TOAST CHANGED', toast);

    if( toast && toast.message && !visible && message === ''){
      setMessage(toast.message);
      setConfig({...defaultConfig, ...toast.config});
      setVisible(true);
    }

    if (visible) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: config.speed === 'fast' ? ToastConfig.speed.fast : config.speed === 'slow' ? ToastConfig.speed.slow : ToastConfig.speed.normal,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: config.speed === 'fast' ? ToastConfig.speed.fast : config.speed === 'slow' ? ToastConfig.speed.slow : ToastConfig.speed.normal,
          useNativeDriver: true,
        }).start(() =>{
          //  onHide()
          setVisible(false);
          setMessage('');
          _toast('');
        });
      }, config.duration); // Hide after 3 seconds
    }
    // @ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, toast]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    // @ts-ignore
    outputRange: [0, (config.position === 'top' ? config.margin : -1 * config.margin)], // Slide from top
  });


  let cC = theme.background;
  if(config.type && config.type !== 'default' && theme[config.type]){

    cC = theme[config.type]!;
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: (config.position==='bottom' ? '100%' : 'auto'), // Adjust position as needed
      // bottom: (position==='bottom' ? margin : 'auto'),
      bottom: (config.position === 'top' ? '100%' : 'auto'),
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
    visible && (
      <Animated.View style={[styles.container, { ["transform"]: [{ translateY }] }]}>
        <ZenText textColor={ColorUtil.getContrastTextColor(cC)} style={styles.messageText}>{message}</ZenText>
      </Animated.View>
    )
  );
}
