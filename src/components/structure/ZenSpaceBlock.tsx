import {StyleSheet,View} from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenSpaceBlockProps
 * @description Props for the ZenSpaceBlock component.
 * @category Structure Components Props
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 */
type ZenSpaceBlockProps = {
  factor?: number;
}

/**
 * @docunator
 * @title ZenSpaceBlock
 * @description A simple component that adds vertical space based on a factor of the standard layout space.
 * @category Structure Components
 * @param {number} factor - The factor to multiply the standard layout space. Default is 2.
 * @category Structure Components
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @see ZenDivider
 */
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
