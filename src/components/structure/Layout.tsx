import {ScrollView, StyleSheet, View} from "react-native";
import LayoutConfig from '../../config/LayoutConfig';

type LayoutProps = {
  children: any
  bottomBar?: boolean,
  centered?: boolean
  scrollable?: boolean
  style?: any
}

export default function Layout({
                                 children,
                                 centered = false,
                                 scrollable = true,
                                 style = null
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
      // height: '100%',
    },

    fullCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  if (scrollable) {
    return (
      <View style={[styles.layout, style]}>

          <ScrollView fadingEdgeLength={LayoutConfig.edgeLimitForScroll} style={styles.full}>
            {children}
          </ScrollView>

      </View>
    );
  } else {
    return (
      <View style={[styles.layout, style]}>
        <View style={[styles.full, (centered ? styles.fullCentered : null)]}>
          {children}
        </View>
      </View>


    );
  }
}
