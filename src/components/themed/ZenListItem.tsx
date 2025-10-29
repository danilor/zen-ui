import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ZenText from './ZenText';
import type { ThemeType } from '../../literals/Type.literal';
import ColorUtil from '../../util/Color.util';
import ThemeConfig from '../../config/Theme.config';

type ZenListItemProps = {
  title: string;
  description?: string;
  type?: ThemeType;
  imageSource?: any;
  height?: number;
  backColor?: string;
  onPress?: Function;
  disabled?: boolean;
  rightText?: string;
  rightAccessory?: any | any[];
  bordered?: boolean;
  squared?: boolean;
  spacing?: number;
};

/**
 * @docunator
 * @title ZenListItem
 * @description A list item component that can display a title, description, image, and right accessory.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @category Themed Components
 * @param {string} title The title of the list item.
 * @param {string} description The description of the list item.
 * @param {string} type The theme type of the list item.
 * @param {ImageSource} imageSource The source of the image to be displayed on the left side of the list item.
 * @param {number} height The height of the list item.
 * @param {string} backColor The background color of the list item.
 * @param {Function} onPress The function to be called when the list item is pressed.
 * @param {boolean} disabled Whether the list item is disabled.
 * @param {string} rightText The text to be displayed on the right side of the list item.
 * @param {Element} rightAccessory The accessory component to be displayed on the right side of the list item.
 * @param {boolean} bordered Whether the list item has a border.
 * @param {boolean} squared Whether the list item has squared corners.
 * @param {number} spacing The spacing between list items.
 * @see ZenIcon
 * @see ZenText
 * @example {tsx}

 import {
   Layout,
   Screen,
   ZenIcon,
   ZenListItem,
   ZenSpaceBlock,
   ZenText,
 } from 'react-zen-ui';
 import { useState } from 'react';

 export default function ListScreen() {
   const [currentTime] = useState(new Date().toLocaleTimeString());
   const [currentDate] = useState(new Date().toLocaleDateString());

   return (
     <>
     <Screen useTopSafeArea={false}>
         <Layout scrollable={true}>


         <ZenListItem title={'Item 1'} />
         <ZenListItem
         title={'Item 2 with description'}
         description={'Description'}
         rightText={currentTime}
         />

         <ZenListItem
         title={'Item 3 with image'}
         description={'Image will be at the left'}
         imageSource={{ uri: 'https://picsum.photos/100' }}
         />

         </Layout>
     </Screen>
     </>
   );
 }


 {/tsx}
 */
export default function ZenListItem({
  title,
  description = '',
  type = 'primary',
  imageSource,
  height = 50,
  backColor,
  onPress = undefined,
  disabled = false,
  rightText,
  rightAccessory,
  bordered = false,
  squared = false,
  spacing = LayoutConfig.space / 4

}: ZenListItemProps) {
  const theme = useTheme();

  if (theme[type] === undefined) {
    throw new Error(`ZenListItem: theme type '${type}' is not defined.`);
  }

  const cardBackgroundColor = ColorUtil.shade(
    theme.background,
    ThemeConfig.defaultCardBackgroundFactor
  );

  const styles = StyleSheet.create({
    item: {
      minHeight: height,
      backgroundColor: backColor ?? cardBackgroundColor,
      marginTop: spacing,
      marginBottom: spacing,
      display: 'flex',
      flexDirection: 'row',
      height: height,
      borderWidth: bordered ? 1 : 0,
      borderColor: theme[type],
      borderRadius: (squared) ? 0 : LayoutConfig.border,
      // overflow: 'hidden',
    },
    left: {
      position: 'relative',
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
      // backgroundColor: 'blue',
      flex: 2,
      // gap: LayoutConfig.space,
      // padding: LayoutConfig.space,
    },
    leftText: {
      padding: LayoutConfig.space / 2,
      paddingLeft: LayoutConfig.space,
    },

    leftImage: {
      width: 'auto',
      height: '100%',
      aspectRatio: 1,
      // flex: 1
    },
    right: {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      height: height,
      // backgroundColor: 'green',
      // padding: LayoutConfig.space,
      justifyContent: 'flex-end',
    },
    rightText: {
      // textAlign: 'right',
      // backgroundColor: 'red',
      paddingRight: LayoutConfig.space / 2,
      paddingTop: LayoutConfig.space / 2,
      flex: 1,
    },
    rightAccessory: {
      // backgroundColor: 'blue',
      flex: 1,
      paddingRight: LayoutConfig.space / 2,
      paddingBottom: LayoutConfig.space / 2,
      padding: LayoutConfig.space / 2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      gap: LayoutConfig.space / 2,
    },
  });

  const itemElement = () => {
    return (
      <View style={styles.item}>
        <View style={[styles.left]}>
          {imageSource ? (
            <Image source={imageSource} style={styles.leftImage} />
          ) : null}

          <View style={styles.leftText}>
            <ZenText style={{ fontWeight: 'bold' }} type={'p'}>
              {title}
            </ZenText>
            {description ? <ZenText type={'s1'}>{description}</ZenText> : null}
          </View>
        </View>
        <View style={[styles.right]}>
          <View style={styles.rightText}>
            {rightText ? (
              <ZenText align={'right'} type={'s1'}>
                {rightText}
              </ZenText>
            ) : null}
          </View>
          <View style={[styles.rightAccessory]}>{rightAccessory}</View>
        </View>
      </View>
    );
  };

  if (onPress) {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={ThemeConfig.defaultDimValue}
      >
        {itemElement()}
      </TouchableOpacity>
    );
  }

  return itemElement();
}
