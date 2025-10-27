import { useTheme } from './../../hooks/useTheme';
import { View, StyleSheet, Text } from 'react-native';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';

type ZenCodeType = {
  content: string;
  light?: number;
};

/**
 * @docunator
 * @title ZenCode
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @description A simple code block component that can be used to display code snippets throughout the app. It styles the code block according to the current theme.
 * @category Themed Components
 * @param {string} content The code content to display
 * @param {number} light A value to lighten or darken the background color. Default is -0.1 (slightly darker).
 */
export default function ZenCode({ content, light = -0.1 }: ZenCodeType) {
  const theme = useTheme();

  const backgroundShaded = ColorUtil.shade(theme.background, light);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundShaded,
      padding: LayoutConfig.space,
      borderRadius: LayoutConfig.border,
      borderWidth: 1,
      borderColor: theme.info
    },
    text: {
      color: ColorUtil.getContrastTextColor(backgroundShaded),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {content}
      </Text>
    </View>
  );
}
