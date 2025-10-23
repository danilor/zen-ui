import { TextInput, StyleSheet, View } from 'react-native';
import type { ComponentProps } from 'react';
import ZenText from './ZenText';
import { useTheme } from './../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ZenIcon from './ZenIcon';
import ColorUtil from '../../util/Color.util';
import ThemeConfig from '../../config/Theme.config';
import type { ThemeType } from '../../literals/Type.literal';

/**
 * @docunator
 * @title ZenInputProps
 * @description Props for the ZenInput component.
 * @category Themed Components Props
 *
 */
type ZenInputProps = {
  label?: string;
  dir?: 'ltr' | 'rtl';
  leftIcon?: string;
  rightIcon?: string;
  leftAccessory?: any;
  rightAccessory?: any;
  multiline?: boolean;
  multilineVariantHeight?: number;
  disabled?: boolean;
  type?: ThemeType
};

/**
 * @docunator
 * @title ZenInput
 * @description An input field with a label. The label is optional.
 * @category Themed Components
 * @param {string} label The label for the input field
 * @param {string} dir The direction of the text. Can be 'ltr' or 'rtl'. Default is 'ltr'
 * @param {string} leftIcon The left icon name
 * @param {string} rightIcon The right icon name
 * @param {Element} leftAccessory The left accessory element
 * @param {Element} rightAccessory The right accessory element
 * @param {boolean} multiline Whether the input is multiline
 * @param {number} multilineVariantHeight The height multiplier for multiline inputs. Default is 10
 * @param {boolean} disabled Whether the input is disabled
 * @param {string } type The theme type for the input. Default is 'primary'
 * @param {Object} props All regular TextInput props
 * @link https://reactnative.dev/docs/textinput
 *
 */
export default function ZenInput({
  label,
  dir = 'ltr',
  leftIcon,
  rightIcon,
  leftAccessory,
  rightAccessory,
  multiline = false,
  multilineVariantHeight = 10,
  disabled = false,
  type = 'primary',
  ...props
}: ZenInputProps & ComponentProps<typeof TextInput>) {
  const theme = useTheme();


  if(theme[type] === undefined){
    throw new Error(`Theme type "${type}" is not defined in the current theme.`);
  }


  const styles = StyleSheet.create({
    container: {
      // flex: 1,
    },
    inputSpace: {
      borderWidth: 1,
      borderColor: theme[type] ?? theme.primary,
      borderRadius: LayoutConfig.border,
      paddingTop: multiline ? LayoutConfig.space / 2 : 0,
      // paddingBottom: LayoutConfig.space / 2,
      marginTop: label ? LayoutConfig.space / 8 : 0,
      marginBottom: LayoutConfig.space / 4,
      paddingRight: LayoutConfig.space / 4,
      paddingLeft: LayoutConfig.space / 4,
      height: multiline
        ? LayoutConfig.space * multilineVariantHeight
        : LayoutConfig.space * 4,
      display: 'flex',
      flexDirection: 'row',
      alignItems: multiline ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: LayoutConfig.space / 4,
      backgroundColor: ColorUtil.shade(
        theme.background,
        ThemeConfig.defaultShareRatio.input
      ),
      position: 'relative',
    },
    input: {
      flex: 12,
      position: 'relative',
      color: theme.text,
      // paddingRight: (rightIcon) ? LayoutConfig.space * 4 : LayoutConfig.space,
      // paddingLeft: (leftIcon) ? LayoutConfig.space * 4 : LayoutConfig.space,
      height: multiline ? LayoutConfig.space * multilineVariantHeight : '100%',
      // backgroundColor:'red',
      includeFontPadding: false,
      alignSelf: 'stretch',
      textAlign: dir === 'rtl' ? 'right' : 'left',
      textAlignVertical: multiline ? 'top' : 'center',
      // position: 'relative',
      // fontSize: 16,
    },
    icon: {},
  });

  return (
    <View style={styles.container}>
      {label && (
        <ZenText type={'p'} paragraph={false} align={'left'}>
          {label}
        </ZenText>
      )}
      <View style={styles.inputSpace}>
        {leftAccessory}
        {leftIcon && (
          <ZenIcon style={[styles.icon]} key={'left_icon'} name={leftIcon} />
        )}
        <TextInput
          multiline={multiline}
          placeholderTextColor={theme.text}
          style={styles.input}
          editable={!disabled}
          {...props}
        />
        {rightIcon && (
          <ZenIcon style={[styles.icon]} key={'right_icon'} name={rightIcon} />
        )}
        {rightAccessory}
      </View>
    </View>
  );
}
