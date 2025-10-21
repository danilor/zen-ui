import { StyleSheet, TouchableOpacity } from 'react-native';
import ZenText from './ZenText';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ColorUtil from '../../util/Color.util';
import ZenIcon from './ZenIcon';
import ThemeConfig from '../../config/Theme.config';
import {type ThemeType} from '../../literals/Type.literal';
/**
 *  ZenButtonProps
 * Props for the ZenButton component.
 * @category Themed Components
 */
export type ZenButtonProps = {
  title: string;
  type?: ThemeType;
  textColor?: string;
  fill: boolean;
  touchableOpacity?: number;
  pressAction?: () => void;
  onPress?: () => void;
  longPressAction?: () => void;
  onLongPress?: () => void;
  leftIcon?: string;
  rightIcon?: string;
  leftAccessory?: any;
  rightAccessory?: any;
  disabled?: boolean;
  style?: any;
};

/**
 *  ZenButton
 * A simple button component that can be used throughout the app.
 * It supports different types (primary, secondary, success, info, warning, danger) and all of them
 * are styled according to the current theme.
 * The text color will be automatically selected based on the brightness of the button color,
 * but it can be overwritten by passing a textColor prop.
 * @category Themed Components
 * @param {object} options The options for the button.
 * @param {string} options.title The title of the button
 * @param {string} options.type The type of the button. Can be 'primary', 'secondary', 'success', 'info', 'warning', or 'danger'. Default is 'primary'.
 * @param {string} options.textColor The color of the button text. If not provided, it will be automatically selected based on the button color.
 * @param {boolean} options.fill Whether the button should fill the width of its container. Default is true.
 * @param {number} options.touchableOpacity The opacity of the button when pressed. Default is 0.7.
 * @param {function} options.pressAction Alias for pressAction
 * @param {function} options.onPress onPress action
 * @param {function} options.longPressAction Alias for longPressAction
 * @param {function} options.onLongPress onLongPress action
 * @param {string} options.leftIcon The left icon of the button. Should be a valid icon name from the ZenIcon component.
 * @param {string} options.rightIcon The right icon of the button. Should be a valid icon name from the ZenIcon component.
 * @param {Element} options.leftAccessory A left accessory. Accepts any valid React Node.
 * @param {Element} options.rightAccessory A right accessory. Accepts any valid React Node.
 * @param {boolean} options.disabled Whether the button is disabled. Default is false.
 * @param {StyleSheet} options.style Additional styles for the button container.
 *
 */
export default function ZenButton({
  title,
  type = 'primary',
  textColor,
  fill = true,
  touchableOpacity = 0.7,
  pressAction = () => {},
  onPress = () => {},
  longPressAction = () => {},
  onLongPress = () => {},
  leftIcon,
  rightIcon,
  leftAccessory = null,
  rightAccessory = null,
  disabled = false,
  style = {},
}: ZenButtonProps) {
  const theme = useTheme();

  let fillColor = 'white';

  if( theme[type] === undefined ){
    throw new Error(`Theme type "${type}" is not defined in the current theme.`);
  }
  fillColor = theme[type];


  const styles = StyleSheet.create({
    button: {
      // width: fill ? '100%' : 'auto',
      flex: fill ? 1 : undefined,
      backgroundColor: fillColor,
      borderRadius: LayoutConfig.border,
      padding: LayoutConfig.space,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: LayoutConfig.space,
      // color: textColor
      opacity: disabled ? ThemeConfig.defaultDimValue : 1,
      // height: 100
    },
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={touchableOpacity}
      style={[styles.button, style]}
      onPress={() => {
        if (!disabled) {
          pressAction();
          onPress();
        }
      }}
      onLongPress={() => {
        if (!disabled) {
          longPressAction();
          onLongPress();
        }
      }}
    >
      {leftAccessory}
      {leftIcon && (
        <ZenIcon
          color={textColor ?? ColorUtil.getContrastTextColor(fillColor)}
          name={leftIcon}
        />
      )}
      <ZenText
        textColor={textColor ?? ColorUtil.getContrastTextColor(fillColor)}
        fill={false}
      >
        {title}
      </ZenText>
      {rightIcon && (
        <ZenIcon
          color={textColor ?? ColorUtil.getContrastTextColor(fillColor)}
          name={rightIcon}
        />
      )}
      {rightAccessory}
    </TouchableOpacity>
  );
}
