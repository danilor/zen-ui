import { useTheme } from '../../hooks/useTheme';
import ZenText from './../themed/ZenText';
import { Dimensions, StyleSheet, View, StatusBar } from 'react-native';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import ZenIcon from '../themed/ZenIcon';

type ZenHeaderProps = {
  useTopSafeArea?: boolean;
  showBackButton?: boolean;
  title?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  rightAccessory?: any;
};

const iconSize = 28;

/**
 * @title ZenHeader Component
 * A simple header component that will adapt to the current theme and display a title and a back button if needed
 *
 * @param useTopSafeArea
 * @param title
 * @param showBackButton
 * @param rightIcon
 * @param onRightIconPress
 * @param rightAccessory
 * @param props
 * @constructor
 */
export default function ZenHeader({
  useTopSafeArea = true,
  title,
  showBackButton = true,
  rightIcon,
  onRightIconPress = () => {
    return null;
  },
  rightAccessory = null,
  ...props
}: ZenHeaderProps & NativeStackHeaderProps) {
  // console.log('Rendering ZenHeader', props);

  const theme = useTheme();

  const baseColor = ColorUtil.getContrastTextColor(theme.primary);

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
        {props.navigation.canGoBack() && showBackButton && (
          <ZenIcon
            name={'cursor-pointer'}
            size={iconSize}
            color={baseColor}
            onPress={() => props.navigation.goBack()}
          />
        )}

        <ZenText fill={false} textColor={baseColor} type={'h4'}>
          {title ?? props.options.title ?? 'Header'}
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
      </View>
    </View>
  );
}
