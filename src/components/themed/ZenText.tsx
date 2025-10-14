import {Text, StyleSheet} from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import ThemeConfig from '../../config/Theme.config';
import LayoutConfig from '../../config/LayoutConfig';

type ZenTextProps = {
  children?: any,
  style?: any,
  type?: keyof typeof ThemeConfig.text,
  align?: 'left' | 'center' | 'right' | 'justify',
  paragraph?: boolean,
  textColor?: string,
  fill?: boolean,

}

/**
 * The most basic text component that will adapt to the current theme
 * @param children
 * @param style
 * @param size
 * @param type
 * @param align
 * @param paragraph
 * @param textColor
 * @param fill

 * @constructor
 */

export default function ZenText(
  {
    children = null,
    style=null,
    type = 'p',
    align = 'left',
    paragraph = false,
    textColor,
    fill = false,

  }: ZenTextProps
){

  const ZenTheme = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: textColor ?? ZenTheme.text,
      fontSize: ThemeConfig.text[type].size,
      marginTop:(paragraph) ? LayoutConfig.space : 0,
      marginBottom:(paragraph) ? LayoutConfig.space : 0,
      marginLeft: 0,
      marginRight: 0,
      padding:0,
      fontWeight: ThemeConfig.text[type].weight as any,
      width: (fill) ? '100%' : 'auto',
      textAlign: align
    }
  });


  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}
