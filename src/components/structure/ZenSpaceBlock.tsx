import {StyleSheet,View} from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';

type ZenSpaceBlockProps = {
  factor?: number;
}

export default function ZenSpaceBlock(
  { factor = 2 }: ZenSpaceBlockProps
){

  const styles = StyleSheet.create({
    container: {
      height: LayoutConfig.space * factor}
    }
  );

  return (
    <View style={styles.container} />
  );


}
