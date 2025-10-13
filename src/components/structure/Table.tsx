import { View, StyleSheet } from "react-native";
import LayoutConfig from '../../config/LayoutConfig';
import {useTheme} from '../../hooks/useTheme';

const styles = StyleSheet.create({
  table: {
    display: "flex",
    flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: LayoutConfig.space,
    justifyContent:'space-around'
  },
  column: {
    flex: 1,
    padding: LayoutConfig.space,
  }
});

/**
 * A simple table component that will help you to create a grid layout
 * @param props
 * @constructor
 */
export function Table(props: any){

  const intStyles = StyleSheet.create({
    s:{

    }
  });
  return (
    <View style={[styles.table, intStyles.s, props.style]}>
      {props.children ?? null}
    </View>
  );
}

/**
 * A simple row component that will help you to create a grid layout
 * @param props
 * @constructor
 */
export function Row(props: any){
  const intStyles = StyleSheet.create({
    s:{

    }
  });
  return (
    <View style={[styles.row, intStyles.s, props.style]}>
      {props.children ?? null}
    </View>
  );
}

/**
 * A simple column component that will help you to create a grid layout
 * @param props
 * @constructor
 */
export function Column(props: any){

  const ZenTheme = useTheme();
  const intStyles = StyleSheet.create({
    s:{
      flex: props.span ?? 1,
      // backgroundColor: 'red'
      borderWidth: props.border ?? 0,
      borderColor: ZenTheme.primary,
    }
  });
  return (
    <View style={[styles.column, intStyles.s, props.style]}>
      {props.children ?? null}
    </View>
  );
}
