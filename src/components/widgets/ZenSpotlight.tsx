import {View, StyleSheet, Image } from 'react-native';
import ZenText  from './../themed/ZenText';
import ZenIconButton  from './../themed/ZenIconButton';
import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';

type ZenSpotlightProps = {
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
    }
  });

  return (
    <View style={[styles.container, style]}>

      <Image style={styles.image} source={imageSource} />
      <View style={styles.footer}>
        { footerText && (<ZenText type={'s2'}>{footerText}</ZenText>) }
        <ZenIconButton onPress={onPress} style={styles.icon} type={type} icon={iconName} />
      </View>

    </View>
  );
}
