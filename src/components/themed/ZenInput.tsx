import { TextInput, StyleSheet, View } from 'react-native';
import type { ComponentProps } from 'react';
import ZenText from './ZenText';
import { useTheme } from './../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ZenIcon from './ZenIcon';

type ZenInputProps = {
  label?: string
  dir?: 'ltr' | 'rtl',
  leftIcon?: string
  rightIcon?: string
  leftAccessory?: any
  rightAccessory?: any,
  multiline?: boolean,
  multilineVariantHeight?: number

};

/**
 * An input field with a label. The label is optional.
 * @param label
 * @param dir
 * @param leftIcon
 * @param rightIcon
 * @param leftAccessory
 * @param rightAccessory
 * @param multiline
 * @param multilineVariantHeight
 * @param props All regular TextInput props
 * @see https://reactnative.dev/docs/textinput
 * @constructor
 */
export default function ZenInput(
  {
    label,
    dir = 'ltr',
    leftIcon,
    rightIcon,
    leftAccessory,
    rightAccessory,
    multiline = false,
    multilineVariantHeight = 10,
    ...props
  }: ZenInputProps & ComponentProps<typeof TextInput>,
) {

  const theme = useTheme();

  const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    inputSpace:{
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: LayoutConfig.border,
      paddingTop: (multiline) ? LayoutConfig.space / 2 : 0,
      // paddingBottom: LayoutConfig.space / 2,
      marginTop: (label) ? LayoutConfig.space / 8 : 0,
      marginBottom: LayoutConfig.space / 8,
      paddingRight: LayoutConfig.space / 4,
      paddingLeft: LayoutConfig.space / 4,
      height: (multiline) ? LayoutConfig.space * multilineVariantHeight : LayoutConfig.space * 4,
      display: 'flex',
      flexDirection: 'row',
      alignItems: (multiline) ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: LayoutConfig.space / 4,
      // backgroundColor: theme.backgroundSecondary,
      position:'relative'
    },
    input: {
      flex:12,
      position:'relative',
      color: theme.text,
      // paddingRight: (rightIcon) ? LayoutConfig.space * 4 : LayoutConfig.space,
      // paddingLeft: (leftIcon) ? LayoutConfig.space * 4 : LayoutConfig.space,
      height: (multiline) ? LayoutConfig.space * multilineVariantHeight : '100%',
      // backgroundColor:'red',
      includeFontPadding: false,
      alignSelf:'stretch',
      textAlign: (dir === 'rtl') ? 'right' : 'left',
      textAlignVertical: (multiline) ? 'top' : 'center',
      // position: 'relative',
      // fontSize: 16,
    },
    icon:{

    },

  });

  return (
    <View style={styles.container}>
      {label && (<ZenText type={'p'} paragraph={false} align={'left'}>{label}</ZenText>)}
      <View style={styles.inputSpace}>
        {leftAccessory}
        {leftIcon && (<ZenIcon style={[styles.icon]} key={'left_icon'} name={leftIcon} /> )}
        <TextInput multiline={multiline} placeholderTextColor={theme.text} style={styles.input} {...props} />
        {rightIcon && (<ZenIcon style={[styles.icon]} key={'right_icon'} name={rightIcon} /> )}
        {rightAccessory}
      </View>



    </View>
  );

}
