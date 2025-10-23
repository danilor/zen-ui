import { View, StyleSheet } from 'react-native';
import { type ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenDivider Props
 * @description Props for the ZenDivider component.
 * @category Structure Components Props
 */
type ZenDividerType = {
  type: ThemeType;
  opacity?: number;
  thickness?: number;
  marginFactor?: number;
};

/**
 * @docunator
 * @title ZenDivider
 * @description Component to create a customizable divider line.
 * @param {string} type The theme type for the divider color.
 * @param {number} opacity The opacity of the divider line. Default is 0.3.
 * @param {number} thickness The thickness of the divider line in pixels. Default is 2.
 * @param {number} marginFactor Factor to multiply the standard layout space for top and bottom margins. Default is 0.5.
 * @category Structure Components
 * @constructor
 */
export default function ZenDivider({ type, opacity= 0.3, thickness = 2, marginFactor = 0.5 }: ZenDividerType) {
  const theme = useTheme();
  if (theme[type] === undefined) {
    throw new Error(
      `Theme type "${type}" is not defined in the current theme.`
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme[type],
      height: thickness,
      opacity: opacity,
      marginTop: LayoutConfig.space * marginFactor,
      marginBottom: LayoutConfig.space * marginFactor,
    },
    divider: {},
  });
  return <View style={styles.container} />;
}
