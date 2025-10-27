
import {View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useEffect, useState } from 'react';

/**
 * @docunator
 * @title ScreenProps
 * @description Props for the Screen component.
 * @category Structure Components Props
 */
type ScreenProps = {
  children?: any;
  useTopSafeArea?: boolean;
  extraBottomPadding?: number;

};

/**
 * @docunator
 * @title Screen
 * @description The screen component should be used as the main container for every screen in the app. The idea behind it is to use it only once in the app, right after the application provider tag. It should take care of the status bar height, the bottom bar height (if there is one) and the keyboard height. This way, we can have a full screen experience even when the keyboard is open.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @see ZenThemeProvider
 * @param {Element} children The main content of the screen. It could be anything, including React elements.
 * @param {boolean} useTopSafeArea If true, the screen will use the top safe area. This is useful when you have a full screen and not planing to use react navigator or other similar libraries that already take care of the top safe area. Default is false.
 * @param {number} extraBottomPadding If you need to add extra padding to the bottom of the screen, you can use this prop. Default is 0.
 * @category Structure Components
 * @example {tsx}

    import { Screen, Layout, ZenText } from 'react-zen-ui';

    export default function ExampleComponent(){
      return (
        <Screen useTopSafeArea={false}>
            <Layout scrollable={true}>
               <ZenText align={'justify'}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
               </ZenText>
            </Layout>
        </Screen>
     );
   }

   {/tsx}
 * @see Layout
 */
export default function Screen({ children, useTopSafeArea = false, extraBottomPadding = 0 }: ScreenProps) {

  const ZenTheme = useTheme();

  const [windowHeight, setWindowHeight] = useState<number>(Dimensions.get('screen').height);

  /**
   * We want to know what is the size of the keyboard to adjust our screen
   */
  const keyboardHeight: number = useKeyboard();


  /**
   * This will listen when the window dimensions change
   * and update the windowHeight state accordingly.
   */
  const listenToDimensions = () => {
    Dimensions.addEventListener('change', () => {
      setWindowHeight(Dimensions.get('screen').height);
    });
  }

  /**
   * Load once for every screen added.
   * But the screen should be only added once in the app
   */
  useEffect(() => {
    listenToDimensions();
  }, []);

  /**
   * To calculate the height of the screen we need to subtract
   * the status bar height from the total height of the window
   * and the bottom bar height if there is one.
   * Also, the keyboard height if the keyboard is open.
   */
  const maxSize = windowHeight - (StatusBar.currentHeight ?? 0) - (keyboardHeight??0);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: ZenTheme.background,
      height: maxSize,
      maxHeight: maxSize,
      // padding: LayoutConfig.space,
      marginTop: (useTopSafeArea ? (StatusBar.currentHeight ?? 0) : 0),
      paddingBottom: extraBottomPadding
    },
  });

  return (
      <View style={styles.screen}>
        {children}
      </View>
  );
}
