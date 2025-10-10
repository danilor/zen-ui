import {Text, StyleSheet} from 'react-native';
import { useTheme } from 'zen-ui';

type ZenTextProps = {
  children?: any,
  style?: any,
}

/**
 * The most basic text component that will adapt to the current theme
 * @param children
 * @param style
 * @param size
 * @constructor
 */

export default function ZenText(
  {
    children = null,
    style=null,
  }: ZenTextProps
){

  const ZenTheme = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: ZenTheme.text,
    }
  });


  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}
