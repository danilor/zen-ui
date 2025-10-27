import { ScrollView, StyleSheet, View } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
import ZenSpaceBlock from './../structure/ZenSpaceBlock';

/**
 * @docunator
 * @title LayoutProps
 * @description Props for the Layout component.
 * @category Structure Components Props
 */
type LayoutProps = {
  children: any;
  bottomBar?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  style?: any;
  airBottom?: boolean;
};

/**
 * @docunator
 * @title Layout
 * @description A layout component that provides consistent padding and optional scrolling behavior.
 * @category Structure Components
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @param {Element} children - The children components to be rendered within the layout.
 * @param {boolean} centered - Whether to center the children components.
 * @param {boolean} scrollable - Whether the layout should be scrollable.
 * @param {StyleSheet} style - Additional styles to apply to the layout.
 * @param {boolean} airBottom - Whether to add extra space at the bottom of the layout.
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
 * @see Screen
 */
export default function Layout({
  children,
  centered = false,
  scrollable = true,
  style = null,
  airBottom = true,
}: LayoutProps) {
  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
      paddingBottom: LayoutConfig.space,
      marginBottom: LayoutConfig.space,
    },
    full: {
      flex: 1,
    },

    fullCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  if (scrollable) {
    return (
      <View style={[styles.layout, style]}>
        <ScrollView
          fadingEdgeLength={LayoutConfig.edgeLimitForScroll}
          style={styles.full}
        >
          {children}
          {airBottom && (
            <ZenSpaceBlock factor={5} />
          )}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={[styles.layout, style]}>
        <View style={[styles.full, centered ? styles.fullCentered : null]}>
          {children}
          {airBottom && (
            <ZenSpaceBlock factor={5} />
          )}
        </View>
      </View>
    );
  }
}
