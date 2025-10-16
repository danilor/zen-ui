import  ZenText  from './../themed/ZenText';
import {View, StyleSheet} from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
type ZenDrawerTitle={
  title?: string;
}

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
