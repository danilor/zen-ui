import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  StatusBar,
  Animated, TouchableOpacity, Platform, useWindowDimensions
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';
import { useDrawer, useToggleDrawer } from '../../hooks/useDrawer';
import { useEffect, useRef } from 'react';
import ThemeConfig from '../../config/Theme.config';
import LayersConfig from '../../config/Layers.config';

/**
 * @docunator
 * @title DrawerType
 * @description Props for the ZenDrawer component
 * @category Drawer Components Props
 */
type DrawerType = {
  position?: 'left' | 'right';
  backgroundDimmed?: boolean;
  backgroundColor?: string;
  headerImage?: any;
  headerImageSize?: number;
  // @ts-ignore
  items?: React.ReactElement[];
  sizeRatio?: number;
  animationTime?: number;
};

/**
 * @docunator
 * @type Component
 * @access Public
 * @copyright No copyright
 * @title ZenDrawer
 * @description A drawer component that can be opened from the left or right side of the screen. It is controlled by the useDrawer and useToggleDrawer hooks. Works on web and on mobile devices.
 * @category Drawer Components
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @param {string} position - The position of the drawer (left or right)
 * @param {number} backgroundDimmed - Whether the background should be dimmed or not
 * @param {string} backgroundColor - The color of the background when dimmed
 * @param {Element} headerImage - An optional image to display at the top of the drawer
 * @param {number} headerImageSize - The height of the header image
 * @param {Elements[]} items - An array of React Elements to display as items in the drawer. Recommended to use ZenDrawerItem and ZenDrawerTitle components.
 * @param {number} sizeRatio - The size of the drawer as a ratio of the screen width
 * @param {number} animationTime - The time in milliseconds for the open/close animation
 * @order 0
 * @error {AnimationError} The animation time is invalid. It must be a positive number.
 * @example {tsx}
  import { ZenDark,
           ZenThemeProvider,
           ZenDrawer,
           ZenDrawerTitle,
           ZenDrawerItem } from 'react-zen-ui';

  export default function App() {

     const DrawerItems = [
         <ZenDrawerTitle title={'Main Menu'} key={'title'} />,
         <ZenDrawerItem
             label={'Home'}
             key={'home'}
             leftIcon={'home'}
             onPress={() => navigation.navigate('Home' as never)}
         />,
         <ZenDrawerItem
             label={'Theme'}
             key={'theme'}
             leftIcon={'settings'}
             onPress={() => navigation.navigate('Theme' as never)}
         />,
         <ZenDrawerItem
             label={'Drawer'}
             key={'drawer'}
             leftIcon={'settings'}
             onPress={() => navigation.navigate('Drawer' as never)}
         />,
         <ZenDrawerTitle title={'Example elements'} key={'example_elements'} />,
         <ZenDrawerItem
             label={'Example Car'}
             key={'example'}
             leftIcon={'car'}
             rightIcon={'truck'}
         />,
         <ZenDrawerItem
             label={'Dimensional'}
             key={'dimensional'}
             leftIcon={'clock'}
         />,
     ];

    const image = require('../assets/logo.png');

    const headerComponent = (props: NativeStackHeaderProps) => (
      <ZenHeader
        automaticDrawerIcon={'menu'}
        showBackButton={props.navigation.canGoBack()}
        title={props.options.title as string}
        goBack={()=>{ props.navigation.goBack(); }}
        {...props}
      />
    );

    return (
         <ZenThemeProvider theme={ZenDark}>
         <ZenDrawer
             headerImage={image}
             headerImageSize={275}
             items={DrawerItems}
         />
          <Stack.Navigator
            screenOptions={{
              animation: 'default',
              headerShown: true,
              header: headerComponent,
           }}
          >
              // OTHER STACK SCREEN ELEMENTS AND COMPONENTS HERE
           </Stack.Navigator>
         </ZenThemeProvider>
     );
   }
    {/tsx}
 */
export default function ZenDrawer({
  position = 'right',
  backgroundDimmed = true,
  backgroundColor = 'rgba(0,0,0,0.7)',
  headerImage,
  headerImageSize,
  items = [],
  sizeRatio = 0.6,
  animationTime = 250,

}: DrawerType) {
  /**
   * Get the current theme
   */
  const theme = useTheme();

  const { width, height } = useWindowDimensions();

  /**
   * Get if the drawer is opened
   */
  const opened = useDrawer();
  const toggleDrawer = useToggleDrawer();

  let size = 0;
  let cHeight = 0;
  if (Platform.OS === 'web') {
    size =width;
    cHeight = height;
  }
  else {
    size = Dimensions.get('screen').width
    cHeight = Dimensions.get('screen').height
  }

  // console.log('Dimensions drawer', size, cHeight);

  const drawerSize = size * sizeRatio;

  // console.log('drawerSize', drawerSize);

  // const drawerSize = '';

  const drawerAnim = useRef(new Animated.Value(-1*drawerSize)).current;


  const openDrawer = () => {
    // console.log('Opening drawer animation');
    Animated.timing(drawerAnim, {
      toValue: 100,
      duration: animationTime,
      useNativeDriver: true,
    }).start();

  };

  const closeDrawer = () => {
    // console.log('Closing drawer animation');
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: animationTime,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (opened) {
      openDrawer();
    }
    else {
      closeDrawer();
    }

  }, [opened]);

  const styles = StyleSheet.create({
    back: {
      width: size,
      height: cHeight,
      backgroundColor: backgroundDimmed
        ? (backgroundColor ?? 'rgba(0,0,0,0.7)')
        : 'transparent',
      // opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: LayersConfig.drawer,
    },
    container: {
      backgroundColor: theme.background,
      position: 'absolute',
      top: 0,
      left: position === 'left' ? 0 : 'auto',
      right: position === 'right' ? 0 : 'auto',
      bottom: 0,
      width: size * sizeRatio,
      height: cHeight,
      zIndex: LayersConfig.drawer + 1,
      // paddingTop: StatusBar.currentHeight?StatusBar.currentHeight+LayoutConfig.space,
      display: 'flex',
      flexDirection: 'column',
    },
    topImage: {
      marginBottom: LayoutConfig.space,
      height: headerImageSize ?? cHeight * 0.2,
      width: '100%',
      backgroundColor: 'red',
      // flex: 1,
    },
    items: {
      marginTop: headerImage
        ? 0
        : (StatusBar.currentHeight ?? LayoutConfig.space),
      flex: 1,
      // backgroundColor: 'red',
      width: '100%',
      alignItems: 'flex-start',
      gap: LayoutConfig.space / 2,
    },
  });

  return (
    <>
      {opened && (<TouchableOpacity activeOpacity={ThemeConfig.defaultDimValue} onPress={toggleDrawer} style={styles.back}></TouchableOpacity>)}
      <Animated.View style={[styles.container,
        {
          transform: [
            {
              translateX: drawerAnim.interpolate({
                inputRange: [ 0, 100],
                outputRange: position === 'left'
                  ? [ -1*drawerSize, 0]
                  : [ drawerSize, 0],
              }),
            },
          ],
        }
      ]}>
        {headerImage && (

            <Image
              source={headerImage}
              style={[styles.topImage ]}
              resizeMode="cover"
            />


        )}

        {items.length > 0 && <View style={styles.items}>{items}</View>}
      </Animated.View>
    </>
  );
}
