import {Text, StyleSheet} from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import ThemeConfig from '../../config/Theme.config';

type ZenTextProps = {
  children?: any,
  style?: any,
  type?: keyof typeof ThemeConfig.text
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
    type = 'p'
  }: ZenTextProps
){

  const ZenTheme = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: ZenTheme.text,
      fontSize: ThemeConfig.text[type].size,
      margin:0,
      padding:0,
      fontWeight: ThemeConfig.text[type].weight as any,
    }
  });


  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}
