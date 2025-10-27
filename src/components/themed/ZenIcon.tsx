import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import IconsConfig from '../../config/Icons.config';
import ThemeConfig from '../../config/Theme.config';

/**
 * @docunator
 * @title ZenIconProps
 * @description Props for the ZenIcon component.
 * @category Themed Components Props
 */
type ZenIconProps = {
  name: string;
  style?: any;
  size?: number;
  color?: string;
  onPress?: () => void;
  disabled?: boolean;
};

/**
 * @docunator
 * @title ZenIcon
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @description A simple icon component that will adapt to the current theme and display the provided icon. If you want to overwrite the color, you can provide a color prop to change it. By default, the icon will adjust to the text color, size and format of the current theme.
 * @param {string} name The icon we want to use
 * @param {StyleSheet} style Additional styles for the icon
 * @param {number} size Number The size of the icon
 * @param {string} color The Color of the Icon. Default to text color of the theme
 * @param {function} onPress onPress action
 * @param {boolean} disabled Whether the icon is disabled. Default is false.
 * @category Themed Components
 * @example {tsx}

import { ZenIcon } from 'react-zen-ui';

export default function ExampleComponent(){
  return (
    <ZenIcon
      name={'home'}
      size={32}
      color={'#ff0000'}
      onPress={() => alert('Icon pressed!')}
    />
  );
}

 {/tsx}
 @see ZenText
 @see ZenIconButton
 */
export default (
  {
    name,
    style = {},
    size = 26,
    color,
    onPress,
    disabled = false,
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
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  if(onPress !== undefined && typeof onPress === 'function'){
    return (
      <TouchableOpacity disabled={disabled} activeOpacity={ThemeConfig.defaultDimValue} onPress={onPress}>
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
