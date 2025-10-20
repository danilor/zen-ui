import { ScrollView, StyleSheet, View } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
import ZenSpaceBlock from './../structure/ZenSpaceBlock';

type LayoutProps = {
  children: any;
  bottomBar?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  style?: any;
  airBottom?: boolean;
};

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
