import  ZenText  from './../themed/ZenText';
import {View, StyleSheet} from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenDrawerTitle
 * @description A title component for the ZenDrawer
 * @category Drawer Components Props
 */
type ZenDrawerTitle={
  title?: string;
}

/**
 * @docunator
 * @title ZenDrawerTitle
 * @description A title component for the ZenDrawer
 * @category Drawer Components
 * @param {string} title - The title text to display
 * @author Danilo Ramírez Mattey
 */
export default function ZenDrawerTitle(
  {title = 'Test'}:ZenDrawerTitle
){

  const styles = StyleSheet.create({
    container:{
      padding: LayoutConfig.space,
    }
  });

  return (
    <View style={styles.container}>
      <ZenText type={'label'}>{title}</ZenText>
    </View>
  );
}
