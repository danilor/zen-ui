import { StyleSheet, TouchableOpacity } from 'react-native';
import ZenText from './ZenText';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ColorUtil from '../../util/Color.util';
import ZenIcon from './ZenIcon';

type ZenButtonProps = {
  title: string,
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger',
  textColor?: string,
  fill: boolean
  touchableOpacity?: number,
  pressAction?: () => void
  longPressAction?: () => void,
  leftIcon?: string,
  rightIcon?: string,
  leftAccessory?: any,
  rightAccessory?: any
};

/**
 * A simple button component that can be used throughout the app.
 * It supports two types: primary and secondary. The button will adapt to the current theme.
 * The text color will be automatically selected based on the brightness of the button color,
 * but it can be overwritten by passing a textColor prop.
 * @param title
 * @param type
 * @param textColor
 * @param fill
 * @param touchableOpacity
 * @param pressAction
 * @param longPressAction
 * @param leftIcon
 * @param rightIcon
 * @param leftAccessory
 * @param rightAccessory
 * @constructor
 */
export default function ZenButton({
  title,
  type = 'primary',
  textColor,
  fill = true,
  touchableOpacity = 0.7,
  pressAction = () => {},
  longPressAction = () => {},
  leftIcon,
  rightIcon,
  leftAccessory = null,
  rightAccessory = null
}: ZenButtonProps) {

  const theme = useTheme();

  let fillColor = 'white';

  switch (type) {
    case 'primary':
      fillColor = theme.primary;
      break;
    case 'secondary':
      fillColor = theme.secondary;
      break;
    case 'success':
      fillColor = theme.success!;
      break;
    case 'info':
      fillColor = theme.info!;
      break;
    case 'warning':
      fillColor = theme.warning!;
      break;
    case 'danger':
      fillColor = theme.danger!;
      break;
    default:
      fillColor = theme.primary;
      break;
  }

  const styles = StyleSheet.create({
    button: {
      width: (fill) ? '100%' : 'auto',
      flex: (fill) ? 0 : 1,
      backgroundColor: fillColor,
      borderRadius: LayoutConfig.border,
      padding: LayoutConfig.space,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: LayoutConfig.space,
      // color: textColor

    },
  });

  return (
    <TouchableOpacity
      activeOpacity={touchableOpacity}
      style={styles.button}
      onPress={() => { pressAction() }}
      onLongPress={() => { longPressAction() }}
    >
      {leftAccessory}
      {leftIcon && (
        <ZenIcon color={textColor?? ColorUtil.getContrastTextColor(fillColor) } name={leftIcon} />
      )}
      <ZenText textColor={textColor?? ColorUtil.getContrastTextColor(fillColor) } fill={false}>{title}</ZenText>
      {rightIcon && (
        <ZenIcon color={textColor?? ColorUtil.getContrastTextColor(fillColor) } name={rightIcon} />
      )}
      {rightAccessory}
    </TouchableOpacity>
  );
}
