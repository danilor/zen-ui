import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ZenIcon from './ZenIcon';
import ThemeConfig from '../../config/Theme.config';
import { useState } from 'react';
import  ZenText  from './ZenText';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenCheckProps
 * @description Props for the ZenCheck component.
 * @category Themed Components Props
 */

type ZenCheckProps = {
  type: ThemeType;
  label?: string;
  position?: 'left' | 'right';
  value?: boolean;
  onChange?: (newValue: boolean) => void;
  style?: any,
  useBackground?: boolean,
  disabled?: boolean,
};

/**
 * @docunator
 * @title ZenCheck
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @description A simple checkbox component that can be used throughout the app. It supports different types (primary, secondary, success, info, warning, danger) and all of them are styled according to the current theme. The checkbox can be positioned to the left or right of the label.
 * @category Themed Components
 * @param {string} type - The type of the checkbox. Can be 'primary', 'secondary', 'success', 'info', 'warning', or 'danger'. Default is 'primary'.
 * @param {string} label - The label of the checkbox.
 * @param {string} value - The initial value of the checkbox. Default is false.
 * @param {string} position - The position of the checkbox relative to the label. Can be 'left' or 'right'. Default is 'left'.
 * @param {function} onChange - The function to call when the value of the checkbox changes.
 * @param {StyleSheet} style - Additional styles for the checkbox container.
 * @param {boolean} useBackground - Whether to use a background color for the checkbox icon. Default is false.
 * @param {boolean} disabled - Whether the checkbox is disabled. Default is false.
 * @constructor
 */
export default function ZenCheck({
  type = 'primary',
  label,
  value = false,
  position = 'left',
  onChange,
  style = {},
  useBackground = false,
  disabled = false,
}: ZenCheckProps) {
  const [checked, setChecked] = useState(value);
  const theme = useTheme();

  if (theme[type] === undefined) {
    throw new Error(
      `Theme type "${type}" is not defined in the current theme.`
    );
  }

  const color = theme[type];
  const backgroundColor = ColorUtil.shade(color, 0.5);

  const styles = StyleSheet.create({
    container: {
      flexDirection: (position === 'left' ? 'row' : 'row-reverse'),
      gap: LayoutConfig.space,
      alignItems: 'center',
      opacity: (disabled ? ThemeConfig.defaultDimValue : 1),
    },
  });

  const onPress = () => {
    if(onChange){
      onChange(!checked);
    }
    setChecked(!checked);
  }

  return (
   <View style={[styles.container, style]}>
     <TouchableOpacity
       disabled={disabled}
       activeOpacity={ThemeConfig.defaultDimValue}

       onPress={onPress}
     >
       <ZenIcon disabled={disabled} name={(checked ? 'check-square' : 'square')} color={color} style={{backgroundColor:(useBackground?backgroundColor:'transparent')}} />

     </TouchableOpacity>
     {label && ( <ZenText>{label}</ZenText> )}
   </View>
  );
}
