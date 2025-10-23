import {Text, StyleSheet} from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import ThemeConfig from '../../config/Theme.config';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenTextProps
 * @description Props for the ZenText component.
 * @category Themed Components Props
 *
 */
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
 * @docunator
 * @title ZenText
 * @description The most basic text component that will adapt to the current theme
 * @param {Element} children The text content to be displayed within the ZenText component.
 * @param {StyleSheet} style Additional styles to customize the appearance of the text.
 * @param {number} size The size of the text. Can be 'small', 'medium', 'large' or a number.
 * @param {string} type The type of text style to apply. Options are 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'.
 * @param {string} align The alignment of the text. Options are 'left', 'center', 'right', 'justify'.
 * @param {boolean} paragraph Whether to add margin to the top and bottom of the text to separate it as a paragraph.
 * @param {string} textColor The color of the text. Defaults to the text color of the current theme.
 * @param {boolean} fill Whether the text should take the full width of its container.

 *
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
