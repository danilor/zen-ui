import { View, StyleSheet, Image } from 'react-native';
import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from './../../hooks/useTheme';
import ZenText from './../themed/ZenText';
import LayoutConfig from '../../config/LayoutConfig';
import { useState } from 'react';
import ColorUtil from '../../util/Color.util';
import ThemeConfig from '../../config/Theme.config';

/**
 * @docunator
 * @title ZenProfileProps
 * @description Props for the ZenProfile component.
 * @category Widget Components Props
 */
type ZenProfileProps = {
  type?: ThemeType;
  bannerImageSource: any;
  avatarImageSource: any;
  title?: string;
  subTitleElement?: any;
  bordered?: boolean;
  bannerHeight?: number;
  description?: string;
  footer:any;
  style?: any;
};

const LAYOUT_FACTOR = 0.3;

/**
 * @docunator
 * @title ZenProfile
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @description A profile component that displays a banner image, an avatar image, a title, a subtitle element, a description, and a footer. The avatar image is positioned overlapping the banner image. The component is styled according to the current theme and supports different types (primary, secondary, success, info, warning, danger).
 * @category Widget Components
 * @group Widgets
 * @param {string} type - The theme type for the component. Can be 'primary', 'secondary', 'success', 'info', 'warning', or 'danger'. Default is 'primary'.
 * @param {ImageSource} bannerImageSource - The source for the banner image.
 * @param {ImageSource}  avatarImageSource - The source for the avatar image.
 * @param {string} title - The title of the profile.
 * @param {Element|Element[]} subTitleElement - The subtitle element of the profile.
 * @param {boolean} bordered - Whether the avatar and banner images should have borders. Default is true.
 * @param {number} bannerHeight - The height of the banner image. Default is 150.
 * @param {Element|{number} description - The description of the profile.
 * @param {Element|Element[] footer - The footer element of the profile.
 * @param {StyleSheet} style - Additional styles for the profile container.
 * @see ZenButton
 * @see ZenIconButton
 * @see ZenIcon
 * @see ZenText
 * @example {tsx}

 import {
 Layout,
 Screen, ZenButton,
 ZenIcon,
 ZenIconButton,
 ZenSpaceBlock,
 } from 'react-zen-ui';
 import { ZenProfile } from 'react-zen-ui';
 import { StyleSheet, View } from 'react-native';

 export default function ProfileScreen() {

     const styles = StyleSheet.create({
         container: {
            flexDirection: 'row', gap: 10, alignItems: 'center'
         }
     });

     return (
         <>
             <Screen useTopSafeArea={false}>
                 <Layout scrollable={true}>
                     <ZenSpaceBlock />
                     <ZenProfile
                         bannerImageSource={{
                            uri: 'https://picsum.photos/1000?' + Math.random().toString(36),
                         }}
                         avatarImageSource={{
                            uri: 'https://picsum.photos/id/237/500/500',
                         }}
                         title={'Lucky Dog'.toUpperCase()}
                         subTitleElement={
                             <View
                                style={styles.container}
                             >
                                 <ZenIcon name={'star'} color={'yellow'} />
                                 <ZenIcon name={'star'} color={'yellow'} />
                                 <ZenIcon name={'star'} color={'yellow'} />
                                 <ZenIcon name={'star'} color={'yellow'} />
                                 <ZenIcon name={'star'} />
                             </View>
                         }
                         description={
                            'A friendly dog who loves to play and cuddle with everyone he meets. He is always up for an adventure and enjoys exploring new places.'
                         }
                         footer={
                             <View
                                 style={styles.container}
                             >
                                 <ZenIconButton icon={'facebook'} onPress={()=> null} />
                             </View>
                         }
                     />
                 </Layout>
             </Screen>
         </>
     );
 }

 {/tsx}
 */
export default function ZenProfile({
  type = 'primary',
  bannerImageSource,
  avatarImageSource,
  title,
  subTitleElement,
  bordered = true,
  bannerHeight = 150,
  description,
  footer,
  style={},
}: ZenProfileProps) {

  const theme = useTheme();

  if(!theme[type]){
    throw new Error('Invalid theme type provided to ZenProfile component');
  }

  const [containerWidth, setContainerWidth] = useState<number>(0);
  // const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleLayout = (event: any) => {
    const {
      width,
      // height
    } = event.nativeEvent.layout;
    setContainerWidth(width);
    // setContainerHeight(height);
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: ColorUtil.shade(theme.background, ThemeConfig.defaultCardBackgroundFactor),
      paddingBottom: LayoutConfig.space * 2,
      marginBottom: LayoutConfig.space,
    },
    banner: {
      width: '100%',
      height: bannerHeight,
      borderWidth: (bordered ? 1 : 0),
      borderColor: theme[type],
      borderRadius: LayoutConfig.border,
    },
    avatar: {
      width: containerWidth * LAYOUT_FACTOR,
      // height: 100,
      height: containerWidth * LAYOUT_FACTOR,
      top: bannerHeight - (containerWidth * LAYOUT_FACTOR) / 2,
      aspectRatio: 1,
      borderRadius: 999,
      borderWidth: (bordered ? 1 : 0),
      borderColor: theme[type],
      position: 'absolute',
      // marginBottom: (containerWidth * LAYOUT_FACTOR) / 2
      // top: '-30%',
    },
    title:{
      marginTop: (containerWidth * LAYOUT_FACTOR) / 2,
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
    },
    subTitleElement:{
      marginTop: LayoutConfig.space,
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
    },
    description:{
      marginTop: LayoutConfig.space,
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
    },
    footer:{
      marginTop: LayoutConfig.space,
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
    }
  });

  return (
    <>
      <View onLayout={handleLayout} style={[styles.container, style]}>
        <Image style={styles.banner} source={bannerImageSource} />
        <Image style={styles.avatar} source={avatarImageSource} />
        {title && <View style={styles.title}><ZenText type={'h6'}>{title}</ZenText></View>}
        {subTitleElement && <View style={styles.subTitleElement}>{subTitleElement}</View>}
        {description && <View style={styles.description}><ZenText align={'justify'} type={'p'}>{description}</ZenText></View>}
        {footer && <View style={styles.footer}>{footer}</View>}
      </View>
    </>
  );
}
