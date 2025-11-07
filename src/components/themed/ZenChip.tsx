import { View, StyleSheet, TouchableOpacity } from 'react-native';
import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from './../../hooks/useTheme';
import ZenText from './ZenText';
import LayoutConfig from '../../config/LayoutConfig';
import ZenIcon from './ZenIcon';

const chipType = 's1';
const iconSize = LayoutConfig.space * 1.5;

type ZenChipsProps = {
  text?: string;
  type?: ThemeType | 'default';
  rounded?: boolean;
  ghost?: boolean;
  onPress?: Function;
  style?: object;
  leftIcon?: string;
  rightIcon?: string;
};

/**
 * @docunator
 * @title ZenChips
 * @description A simple chip component to display a small piece of information.
 * @category Themed Components
 * @version 1.0.0
 * @param {string} type - The theme type to use. Default is 'default'.
 * @param {string} text - The text to display inside the chip. Default is 'Chip'.
 * @param {boolean} rounded - Whether the chip should have rounded corners. Default is true.
 * @param {boolean} ghost - Whether the chip should have a ghost style (transparent background). Default is false.
 * @param {Function} onPress - Function to execute when the chip is pressed.
 * @param {StyleSheet} style - Additional styles to apply to the chip container.
 * @param {string} leftIcon - Name of the left icon to display inside the chip.
 * @param {string} rightIcon - Name of the right icon to display inside the chip.
 *
 * @see ZenText
 * @see ZenIcon
 * @see ZenButton
 * @example {tsx}

 import {
   Layout,
   Screen,
   ZenIcon,
   ZenListItem,
   ZenSpaceBlock,
   ZenChips,
 } from 'react-zen-ui';
 import { useState } from 'react';

 export default function ListScreen() {
   const [currentTime] = useState(new Date().toLocaleTimeString());
   const [currentDate] = useState(new Date().toLocaleDateString());

   return (
     <>
     <Screen useTopSafeArea={false}>
         <Layout scrollable={true}>


         <View style={styles.chipsContainer}>
            <ZenChips type={'primary'} text={'Primary'} />
            <ZenChips type={'warning'} text={'Warning'} />
            <ZenChips type={'success'} text={'Success'} />
            <ZenChips type={'info'} text={'Info'} />
            <ZenChips type={'danger'} text={'Danger'} />
          </View>

         </Layout>
     </Screen>
     </>
   );
 }
const styles = StyleSheet.create({
  chipsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});


 {/tsx}
 */
export default function ZenChip({
  text = 'Chip',
  type = 'default',
  rounded = true,
  ghost = false,
  onPress,
  style = {},
  leftIcon,
  rightIcon,
}: ZenChipsProps) {
  const theme = useTheme();

  if (type !== 'default' && theme[type] === undefined) {
    throw new Error(
      'ZenChips: theme.type is undefined. Please make sure you are using a valid theme.'
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: ghost
        ? 'transparent'
        : (theme[type] ?? theme.backgroundSecondary),
      borderWidth: 1,
      borderColor: theme[type] ?? theme.text,
      paddingHorizontal: LayoutConfig.space,
      paddingVertical: LayoutConfig.space / 4,
      minWidth: LayoutConfig.space * LayoutConfig.chipsMinimalFactor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: LayoutConfig.space / 2,
      borderRadius: rounded ? LayoutConfig.border : 0,
      flexDirection: 'row',
    },
  });

  if (onPress !== undefined) {

    return ( // @ts-ignore
      <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        { leftIcon && (
          <ZenIcon name={leftIcon} size={iconSize} />
        )}
        <ZenText type={chipType}>{text}</ZenText>
        { rightIcon && (
          <ZenIcon name={rightIcon} size={iconSize} />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, style]}>
      { leftIcon && (
        <ZenIcon name={leftIcon} size={iconSize} />
      )}
      <ZenText type={chipType}>{text}</ZenText>
      { rightIcon && (
        <ZenIcon name={rightIcon} size={iconSize} />
      )}
    </View>
  );
}
