import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ZenIcon from './ZenIcon';
import ThemeConfig from '../../config/Theme.config';
import { useState } from 'react';
import  ZenText  from './ZenText';
import LayoutConfig from '../../config/LayoutConfig';

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
