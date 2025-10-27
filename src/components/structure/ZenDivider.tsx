import { View, StyleSheet } from 'react-native';
import { type ThemeType } from '../../literals/Type.literal';
import { useTheme } from '../../hooks/useTheme';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenDividerProps
 * @description Props for the ZenDivider component.
 * @category Structure Components Props
 */
type ZenDividerType = {
  type: ThemeType;
  opacity?: number;
  thickness?: number;
  marginFactor?: number;
};

/**
 * @docunator
 * @title ZenDivider
 * @description Component to create a customizable divider line.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @param {string} type The theme type for the divider color. Supports primary, secondary, success, danger, warning, info.
 * @param {number} opacity The opacity of the divider line. Default is 0.3.
 * @param {number} thickness The thickness of the divider line in pixels. Default is 2.
 * @param {number} marginFactor Factor to multiply the standard layout space for top and bottom margins. Default is 0.5.
 * @category Structure Components
 * @example {tsx}
 import {  Layout, Screen, ZenText, ZenDivider } from 'react-zen-ui';

 export default function DividerScreen() {
     return (
     <>
         <Screen useTopSafeArea={false}>
             <Layout scrollable={true}>
                 <ZenText type={'p'} paragraph={true} align={'justify'}>
                   Sometimes you just need a divider for your content. Here are some
                   examples of how to use the ZenDivider component in different styles
                   and types.
                 </ZenText>
                 <ZenDivider type={'primary'} />
                 <ZenText type={'h6'} paragraph={true} align={'justify'}>
                   Another text divided from the one above
                 </ZenText>
                 <ZenDivider type={'secondary'} />
                 <ZenText type={'h5'} paragraph={true} align={'justify'}>
                    Another text
                 </ZenText>
                 <ZenDivider type={'danger'} />
                 <ZenText type={'h4'} paragraph={true} align={'justify'}>
                    Another text
                 </ZenText>
                 <ZenDivider type={'warning'} />
                 <ZenText type={'h3'} paragraph={true} align={'justify'}>
                    Another text
                 </ZenText>
                 <ZenDivider type={'info'} />
                 <ZenText type={'h2'} paragraph={true} align={'justify'}>
                    Another text
                 </ZenText>
             </Layout>
         </Screen>
     </>
     );
 }
 {/tsx}

 */
export default function ZenDivider({ type, opacity= 0.3, thickness = 2, marginFactor = 0.5 }: ZenDividerType) {
  const theme = useTheme();
  if (theme[type] === undefined) {
    throw new Error(
      `Theme type "${type}" is not defined in the current theme.`
    );
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme[type],
      height: thickness,
      opacity: opacity,
      marginTop: LayoutConfig.space * marginFactor,
      marginBottom: LayoutConfig.space * marginFactor,
    },
    divider: {},
  });
  return <View style={styles.container} />;
}
