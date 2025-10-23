import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
import ZenText from './../themed/ZenText';
import ThemeConfig from '../../config/Theme.config';
import ColorUtil from '../../util/Color.util';
import { useTheme } from './../../hooks/useTheme';
import ZenIcon from '../themed/ZenIcon';
import { useToggleDrawer } from '../../hooks/useDrawer';

/**
 * @docunator
 * @title ZenDrawerItem
 * @description A single item for the ZenDrawer component
 * @category Drawer Components Props
 */
type ZenDrawerItemProps = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  onPress?: () => void;
  arrow?: boolean;
  closeOnPress?: boolean;
};

const defaultIconSize = 22;
const defaultDimmedValue = 0.2;

/**
 * @docunator
 * @title ZenDrawerItem
 * @description A single item for the ZenDrawer component
 * @category Drawer Components
 * @param {string} label - The label of the drawer item
 * @param {string} leftIcon - The name of the left icon (from ZenIcon)
 * @param {string} rightIcon - The name of the right icon (from ZenIcon)
 * @param {function} onPress - The function to call when the item is pressed
 * @param {boolean} arrow - Whether to show a right arrow icon
 * @param {function} closeOnPress - Whether to close the drawer when the item is pressed
 * @author Danilo Ramírez Mattey
 */
export default function ZenDrawerItem({
  label,
  leftIcon,
  rightIcon,
  onPress = () => { return null; },
  arrow = true,
  closeOnPress = true,
}: ZenDrawerItemProps) {
  const theme = useTheme();

  /**
   * Function to toggle the drawer
   */
  const toggleDrawer = useToggleDrawer();

  const styles = StyleSheet.create({
    item: {
      // flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: LayoutConfig.space,
      backgroundColor: ColorUtil.shade(theme.background, -1 * (defaultDimmedValue)),
      width: '100%',
      gap: LayoutConfig.space,
    },
    rightIcon:{
      marginLeft: 'auto',

    }
  });

  const clickMenu = ()=>{
    if(onPress){
      onPress();
    }
    if(closeOnPress){
      // Close the drawer
      toggleDrawer();
    }
  }

  return (
    <TouchableOpacity onPress={clickMenu}
      activeOpacity={ThemeConfig.defaultDimValue}
      style={styles.item}
    >
      {leftIcon && <ZenIcon name={leftIcon} size={defaultIconSize} />}
      <ZenText paragraph={false} fill={false}>
        {label}
      </ZenText>
      {rightIcon && <View style={styles.rightIcon}><ZenIcon name={rightIcon} size={defaultIconSize} /></View>}
      {arrow && <View style={styles.rightIcon}><ZenIcon name={'arrow-right'} size={defaultIconSize} /></View>}
    </TouchableOpacity>
  );
}
