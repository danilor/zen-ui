import { useTheme } from '../../hooks/useTheme';
import ZenText from './../themed/ZenText';
import { Dimensions, StyleSheet, View, StatusBar } from 'react-native';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';

import ZenIcon from '../themed/ZenIcon';
import { useToggleDrawer } from '../../hooks/useDrawer';

/**
 * @docunator
 * @title ZenHeaderProps
 * @description Props for the ZenHeader component
 * @category Navigation Components Props
 */
type ZenHeaderProps = {
  useTopSafeArea?: boolean;
  showBackButton?: boolean;
  title?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  rightAccessory?: any;
  automaticDrawerIcon?: string;
  goBack?: () => void;
  goBackIcon?: string;
};

const iconSize = 28;

/**
 * @docunator
 * @title ZenHeader
 * @description A simple header component that will adapt to the current theme and display a title and a back button if needed
 * @category Navigation Components
 * @param {boolean} useTopSafeArea - Whether to use the top safe area or not
 * @param {string} title - The title to display in the header
 * @param {boolean} showBackButton - Whether to show the back button or not
 * @param {string} rightIcon - The name of the right icon to display
 * @param {function} onRightIconPress - The function to call when the right icon is pressed
 * @param {Element} rightAccessory - Any React Element to show on the right side of the header
 * @param {string} automaticDrawerIcon If any string is indicated, it will show a drawer icon that will open the drawer when pressed
 * @param {function} goBack - The function to call when the back button is pressed
 * @param {string} goBackIcon - The name of the back icon to display
 * @link https://github.com/danilor/zen-ui/blob/main/example/src/App.tsx#L93
 * @author Danilo Ramírez Mattey
 *
 */
export default function ZenHeader({
  useTopSafeArea = true,
  title,
  showBackButton = false,
  rightIcon,
  onRightIconPress = () => {
    return null;
  },
  rightAccessory = null,
  automaticDrawerIcon,
  goBack = () => {},
  goBackIcon = 'cursor-pointer',
}: ZenHeaderProps) {
  // console.log('Rendering ZenHeader', props);

  const theme = useTheme();
  const toggleDrawer = useToggleDrawer();

  const baseColor = ColorUtil.getContrastTextColor(theme.primary);

  const drawerMenuPress = () => {
    toggleDrawer();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.primary,
      // flex: 1,
      flexDirection: 'row',
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: Dimensions.get('window').height / 12,
      padding: LayoutConfig.space,
      paddingTop: useTopSafeArea
        ? LayoutConfig.space + (StatusBar.currentHeight ?? 0)
        : LayoutConfig.space,
    },
    left: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: LayoutConfig.space,
    },
    right: {
      flexDirection: 'row',
      gap: LayoutConfig.space,
      justifyContent: 'flex-end',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {showBackButton && (
          <ZenIcon
            name={goBackIcon}
            size={iconSize}
            color={baseColor}
            onPress={() => goBack()}
          />
        )}

        <ZenText fill={false} textColor={baseColor} type={'h4'}>
          {title ?? 'Header'}
        </ZenText>
      </View>

      <View style={styles.right}>
        {rightIcon !== undefined && (
          <ZenIcon
            name={rightIcon}
            size={iconSize}
            color={baseColor}
            onPress={onRightIconPress}
          />
        )}
        {rightAccessory}
        {automaticDrawerIcon !== undefined && (
          <ZenIcon
            name={automaticDrawerIcon}
            size={iconSize}
            color={baseColor}
            onPress={drawerMenuPress}
          />
        )}
      </View>
    </View>
  );
}
