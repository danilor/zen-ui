import { View, StyleSheet } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
import ZenIconButton from '../themed/ZenIconButton';
import LayersConfig from '../../config/Layers.config';


/**
 * @docunator
 * @title ZenFloatingIconsType
 * @description Props for the ZenFloatingIcons component
 * @category Navigation Components Props
 */
type ZenFloatingIconsType = {
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'center';
  buttons?: {
    icon: string;
    type: 'primary' | 'secondary' | 'warning' | 'danger' | 'info';
    onPress?: () => void;
  }[];
};

/**
 * @docunator
 * @title ZenFloatingIcons
 * @description A set of floating icon buttons that can be positioned at the bottom of the screen
 * @category Navigation Components
 * @param {number} size - The size of the buttons (small, medium, large)
 * @param {string} position - The position of the buttons (left, right, center)
 * @param {Object} buttons - An array of button objects with icon, type and onPress function
 * @constructor
 */
export default function ZenFloatingIcons({
  size = 'medium',
  position = 'center',
  buttons = [],
}: ZenFloatingIconsType) {
  // console.log('Buttons', buttons, 'Size', size, 'Position', position);

  // const theme = useTheme();

  let height = 50;
  if (size === 'small') {
    height = 40;
  } else if (size === 'large') {
    height = 60;
  }

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'red',
      position: 'absolute',
      bottom: 20,
      right: 0,
      left: 0,
      height: height,
      width: '100%',
      zIndex: LayersConfig.floatingIcons,
      justifyContent:
        position === 'left'
          ? 'flex-start'
          : position === 'right'
            ? 'flex-end'
            : 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
      gap: LayoutConfig.space,
    },
  });
  return (
    <View style={styles.container}>
      {buttons.map((button, index: number) => (
        <ZenIconButton
          key={'floating_icon_button_' + index}
          icon={button.icon}
          type={button.type}
          onPress={button.onPress}
          size={size}
        />
      ))}
    </View>
  );
}
