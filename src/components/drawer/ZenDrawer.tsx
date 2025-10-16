import { StyleSheet, View, Dimensions, Image, StatusBar } from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';


type DrawerType={
  position?: 'left'|'right',
  backgroundDimmed?: boolean,
  backgroundColor?: string,
  headerImage?: any,
  headerImageSize?: number,
  // @ts-ignore
  items?: React.ReactElement[],
  sizeRatio?: number,
}

export default function ZenDrawer(
  {
    position='right',
    backgroundDimmed=true,
    backgroundColor='rgba(0,0,0,0.7)',
    headerImage,
    headerImageSize,
    items = [],
    sizeRatio=0.6,
  }:DrawerType
) {

  const theme = useTheme();

  const styles = StyleSheet.create({
    back:{
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      backgroundColor: (backgroundDimmed)?(backgroundColor ?? 'rgba(0,0,0,0.7)'):'transparent',
      // opacity: 0.5,
      position: 'absolute',
      top:0,
      left:0,
      zIndex: 999,
    },
    container:{
      backgroundColor: theme.background,
      position: 'absolute',
      top:0,
      left: position==='left'?0:'auto',
      right: position==='right'?0:'auto',
      bottom: 0,
      width: Dimensions.get('screen').width * sizeRatio,
      height: Dimensions.get('screen').height,
      zIndex: 1000,
      // paddingTop: StatusBar.currentHeight?StatusBar.currentHeight+LayoutConfig.space,
      display: 'flex',
      flexDirection: 'column',
    },
    topImage:{
      marginBottom: LayoutConfig.space,
      height: (headerImageSize ?? Dimensions.get('screen').height * 0.2),
      width: '100%',
      backgroundColor: 'red',
      // flex: 1,
    },
    items:{
      marginTop: (headerImage?0:StatusBar.currentHeight??LayoutConfig.space),
      flex: 1,
      // backgroundColor: 'red',
      width: '100%',
      alignItems:'flex-start',
      gap: LayoutConfig.space /2,
    }
  });

  return (
    <View style={styles.back}>
      <View style={styles.container}>

        {headerImage && (
          <Image
            source={headerImage}
            style={styles.topImage}
            resizeMode="cover"
          />
        )}

        {items.length > 0 && (
          <View style={styles.items}>
            {items}
          </View>
        )}

      </View>
    </View>
  );
}
