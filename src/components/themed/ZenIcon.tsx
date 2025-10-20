import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import IconsConfig from '../../config/Icons.config';
import ThemeConfig from '../../config/Theme.config';

type ZenIconProps = {
  name: string;
  style?: any;
  size?: number;
  color?: string;
  onPress?: () => void;
};

/**
 *  ZenIcon Component
 * A simple icon component that will adapt to the current theme and display the provided icon
 * @param name The icon we want to use
 * @param style
 * @param size number The size of the icon
 * @param color string The Color of the Icon. Default to text color of the theme
 *
 */
export default (
  {
    name,
    style = {},
    size = 26,
    color,
    onPress
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

  if(onPress !== undefined && typeof onPress === 'function'){
    return (
      <TouchableOpacity activeOpacity={ThemeConfig.defaultDimValue} onPress={onPress}>
        <Image
          style={[styles.icon, style]}
          source={IconsConfig[name]}
        />
      </TouchableOpacity>
    );
  }

  return (
    <Image
      style={[styles.icon, style]}
      source={IconsConfig[name]}
    />
  );
}
