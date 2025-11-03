import {View, StyleSheet, Image } from 'react-native';
import ZenText  from './../themed/ZenText';
import ZenIconButton  from './../themed/ZenIconButton';
import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import ColorUtil from '../../util/Color.util';
import ThemeConfig from '../../config/Theme.config';

type ZenSpotlightProps = {
  title?: string;
  titleBackground?: boolean;
  titleType?: keyof typeof ThemeConfig.text,
  imageSource: any;
  footerText?: string;
  iconName?: string;
  type?: ThemeType
  bordered?: boolean;
  borderRounded?: boolean;
  style?: any;
  onPress?: () => void;
}

/**
 * @docunator
 * @title ZenSpotlight
 * @description A spotlight component that displays an image with an optional footer and an icon button.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @category Widget Components
 * @group Widgets
 * @param {string} title - Optional title to be displayed on top of the image.
 * @param {boolean} titleBackground - Whether the title should have a background for better visibility. Default is false.
 * @param {string} titleType - The text type for the title. Default is 'h3'.
 * @param {ImageSource} imageSource - The source of the image to be displayed.
 * @param {string} footerText - Optional text to be displayed in the footer.
 * @param {string} iconName - The name of the icon to be displayed in the button. Default is 'arrow-right-circle'.
 * @param {string} type - The theme type for the component. Default is 'primary'.
 * @param {boolean} bordered - Whether the image should have a border. Default is false.
 * @param {boolean} borderRounded - Whether the border should be rounded. Default is false.
 * @param {Object} style - Additional styles for the container.
 * @param {Function} onPress - Function to be called when the icon button is pressed.
 * @example {tsx}
 import { Layout, Screen, ZenSpaceBlock, ZenSpotlight } from 'react-zen-ui';
 import {View} from 'react-native';

 export default function SpotlightScreen() {
   return (
     <>
       <Screen useTopSafeArea={false}>
         <Layout scrollable={true}>
         <ZenSpaceBlock />
         <ZenSpotlight footerText={'This image was taken from Picsum'} imageSource={{uri:'https://picsum.photos/300?random'}} bordered={true} borderRounded={true} />
         </Layout>
       </Screen>
     </>
   );
 }

 {/tsx}
 @see ZenText
 @see ZenIconButton
 */
export default function ZenSpotlight(
  {
    title,
    titleType = 'h3',
    titleBackground = false,
    imageSource,
    footerText,
    iconName = 'arrow-right-circle',
    type = 'primary',
    bordered= false,
    borderRounded = false,
    style = {},
    onPress = () => {}
  } : ZenSpotlightProps
){

  const theme = useTheme();

  if(!theme[type]){
    throw new Error('ZenSpotlight: Invalid type provided');
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      position: 'relative',
      marginBottom: LayoutConfig.space * 2
    },
    footer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    image:{
      flex: 1,
      // width: '100%',
      // height: 'auto',
      aspectRatio: 1,
      borderWidth: (bordered ? 1 : 0),
      borderColor: theme[type],
      borderStyle: 'solid',
      borderRadius: (borderRounded ? LayoutConfig.border : 0),
    },
    icon:{
      position: 'absolute',
      right: 0,
      transform: 'translate(0%, -50%)',
    },
    title:{
      position: 'absolute',
      top: LayoutConfig.space,
      left: LayoutConfig.space,
      zIndex: 1,
      backgroundColor: (titleBackground ? ColorUtil.hexToRgb(theme.background, 0.4) : 'transparent'),
    }
  });

  return (
    <View style={[styles.container, style]}>

      { title && (<ZenText style={styles.title} type={titleType} paragraph={false}>{title}</ZenText>) }

      <Image style={styles.image} source={imageSource} />
      <View style={styles.footer}>
        { footerText && (<ZenText type={'s2'}>{footerText}</ZenText>) }
        <ZenIconButton onPress={onPress} style={styles.icon} type={type} icon={iconName} />
      </View>

    </View>
  );
}
