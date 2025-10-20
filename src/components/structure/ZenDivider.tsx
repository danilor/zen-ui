import { View, StyleSheet } from 'react-native';
import { type ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';

type ZenDividerType = {
  type: ThemeType;
  opacity?: number;
  thickness?: number;
  marginFactor?: number;
};

/**
 * ZenDivider component to create a customizable divider line.
 * @param type
 * @param opacity
 * @param thickness
 * @param marginFactor
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
