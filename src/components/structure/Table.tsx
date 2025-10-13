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

type TableProps = {
  children: any
  style?: any,
  border?:boolean,
  borderType?: 'solid' | 'dotted' | 'dashed',
  borderColor?: string
}

/**
 * A simple table component that will help you to create a grid layout
 * @param style
 * @param children
 * @param border
 * @param borderType
 * @param borderColor
 * @constructor
 */
export function Table(

  {
    children,
    style = null,
    border= false,
    borderType = 'solid',
    borderColor,
  }: TableProps
){

  const theme = useTheme();

  const intStyles = StyleSheet.create({
    s:{
      borderStyle: borderType,
      borderWidth: (border) ? 1 : 0,
      borderColor: borderColor ?? theme.text,


    }
  });
  return (
    <View style={[styles.table, intStyles.s, style]}>
      {children ?? null}
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

type ColumnProps = {
  children: any
  style?: any,
  border?:boolean,
  borderType?: 'solid' | 'dotted' | 'dashed',
  borderColor?: string,
  span?: number
}

/**
 * A simple column component that will help you to create a grid layout
 * @param props
 * @constructor
 */
export function Column(
  {
    children,
    style = null,
    border= false,
    borderType = 'solid',
    borderColor,
    span=1
  }:ColumnProps
){

  const ZenTheme = useTheme();
  const intStyles = StyleSheet.create({
    s:{
      flex: span ?? 1,
      // backgroundColor: 'red'
      borderWidth: border ? 1 : 0,
      borderColor: borderColor ?? ZenTheme.text,
      borderStyle: borderType ?? 'solid'
    }
  });
  return (
    <View style={[styles.column, intStyles.s, style]}>
      {children ?? null}
    </View>
  );
}
