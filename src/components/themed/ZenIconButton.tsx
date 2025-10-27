import { useTheme } from '../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ZenIcon from './ZenIcon';
import {type ThemeType} from '../../literals/Type.literal';

/**
 * @docunator
 * @title ZenIconButtonType
 * @description Type definition for the ZenIconButton component props.
 * @category Themed Components Props
 */
type ZenIconButtonType = {
  icon: string;
  type?: ThemeType;
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

/**
 * @docunator
 * @title ZenIconButton
 * @description A button component that displays an icon and handles press and long-press actions with customizable styles and themes.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @param {string} icon - The name of the icon to display.
 * @param {string} type - The theme type for the button (e.g., 'primary', 'secondary').
 * @param {number} size - The size of the button ('small', 'medium', 'large').
 * @param {number} touchableOpacity - The opacity of the button when pressed.
 * @param {boolean} disabled - Whether the button is disabled.
 * @param {StyleSheet} style - Additional styles for the button.
 * @param {function} pressAction - Function to execute on button press.
 * @param {function} onPress - Additional function to execute on button press.
 * @param {function} longPressAction - Function to execute on button long press.
 * @param {function} onLongPress - Additional function to execute on button long press.
 * @param {number} opacity - The overall opacity of the button.
 * @category Themed Components
 * @example {tsx}
 import {
 Column,
 Layout,
 Row,
 Screen,
 Table,
 ZenIconButton,
 ZenText,
 } from 'react-zen-ui';
 import { StyleSheet } from 'react-native';

 export default function IconButtonsScreen() {
     const styles = StyleSheet.create({
        column: { justifyContent: 'center', alignItems: 'center' },
     });

     return (
     <>
         <Screen useTopSafeArea={false}>
             <Layout scrollable={true}>
                 <ZenText type={'p'} paragraph={true} align={'justify'}>
                   Buttons can be also used with icons only. These are called Icon
                   Buttons. They can be used in toolbars or action bars to represent
                   actions with icons only. They can be primary, secondary, warning,
                   info or danger types.
                 </ZenText>

                 <Table>
                     <Row>
                         <Column style={styles.column}>
                         <    ZenIconButton icon={'home'} />
                         </Column>
                         <Column style={styles.column}>
                            <ZenIconButton icon={'bell'} type={'secondary'} />
                         </Column>
                         <Column style={styles.column}>
                            <ZenIconButton icon={'dns'} type={'danger'} />
                         </Column>
                         <Column style={styles.column}>
                            <ZenIconButton icon={'eye'} type={'info'} />
                         </Column>
                         <Column style={styles.column}>
                            <ZenIconButton icon={'google-circle'} type={'warning'} />
                         </Column>
                     </Row>

                 </Table>
             </Layout>
         </Screen>
     </>
     );
 }


 {/tsx}
 * @see ZenIcon
 * @see ZenButton
 */

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

  if (theme[type] === undefined){
    throw new Error(`[ZenIconButton] Theme type "${type}" is not defined in the current theme.`);
  }
  fillColor = theme[type];

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
