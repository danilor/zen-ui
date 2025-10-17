import { useTheme } from './../../hooks/useTheme';
import { View, StyleSheet, Text } from 'react-native';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';

type ZenCodeType = {
  content: string;
};

export default function ZenCode({ content }: ZenCodeType) {
  const theme = useTheme();

  const backgroundShaded = ColorUtil.shade(theme.background, -0.1);

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
