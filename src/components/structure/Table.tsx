import { View, StyleSheet } from "react-native";
import LayoutConfig from '../../config/LayoutConfig';
import {useTheme} from '../../hooks/useTheme';

const styles = StyleSheet.create({
  table: {
    display: "flex",
    // flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    // flex: 1,
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
 * @param style The additional styles to be added to the table. Default is null
 * @param children The child component of the table. This is required
 * @param border The border of the table. Default is false
 * @param borderType The border type of the table. Default is solid. Options are: solid, dotted, dashed
 * @param borderColor The border color of the table. Default is the text color of the current theme
 *
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
 *
 */
export function Row(props: any){
  return (
    <View style={[styles.row,props.style]}>
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
 *
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
      borderStyle: borderType ?? 'solid',
      // height:'auto'
      alignSelf: 'stretch'
    }
  });
  return (
    <View style={[styles.column, intStyles.s, style]}>
      {children ?? null}
    </View>
  );
}
