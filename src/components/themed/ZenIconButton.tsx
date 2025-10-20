import { useTheme } from '../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ZenIcon from './ZenIcon';

type ZenIconButtonType = {
  icon: string;
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  touchableOpacity?: number;
  style?: any;
  pressAction?: () => void;
  onPress?: () => void;
  longPressAction?: () => void;
  onLongPress?: () => void;
  opacity?: number;
};

export default function ZenIconButton({
  icon,
  type = 'primary',
  size = 'medium',
  touchableOpacity = 0.7,
  disabled = false,
  style = {},

  pressAction = () => {},
  onPress = () => {},
  longPressAction = () => {},
  onLongPress = () => {},
  opacity = 1,
}: ZenIconButtonType) {
  const theme = useTheme();

  let fillColor = 'white';

  let height = 42;
  if (size === 'small') {
    height = 36;
  } else if (size === 'large') {
    height = 52;
  }

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

  const overColor = ColorUtil.getContrastTextColor(fillColor);
  const aLittleBitDarkerColor = ColorUtil.shade(fillColor, -0.3);

  const styles = StyleSheet.create({
    button: {
      backgroundColor: fillColor,
      height: height,
      width: height,
      aspectRatio: 1,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: '50%',
      borderWidth: 1,
      borderColor: aLittleBitDarkerColor,
      opacity: disabled ? 0.3 : opacity,
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
      <ZenIcon name={icon} size={height * 0.6} color={overColor} />
    </TouchableOpacity>
  );
}
