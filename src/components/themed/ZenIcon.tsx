import { Image, StyleSheet } from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import IconsConfig from '../../config/Icons.config';

type ZenIconProps = {
  name: string;
  style?: any;
  size?: number;
  color?: string;
};

/**
 * @title ZenIcon Component
 * A simple icon component that will adapt to the current theme and display the provided icon
 * @param name The icon we want to use
 * @param style
 * @param size number The size of the icon
 * @param color string The Color of the Icon. Default to text color of the theme
 * @constructor
 */
export default (
  {
    name,
    style = {},
    size = 18,
    color
  }
  : ZenIconProps,
) => {

  if(!IconsConfig[name]){
    throw new Error('[ZenIcon] Icon not found: ' + name);
  }

  const ZenTheme = useTheme();

  const styles = StyleSheet.create({
    icon: {
      tintColor: (color ?? ZenTheme.text),
      height: size,
      width: size,
      resizeMode: 'contain',
    },
  });

  return (
    <Image
      style={[styles.icon, style]}
      source={IconsConfig[name]}
    />
  );
}
