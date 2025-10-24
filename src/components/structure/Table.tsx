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

/**
 * @docunator
 * @title TableProps
 * @description Props for the Table component.
 * @category Structure Components Props
 */
type TableProps = {
  children: any
  style?: any,
  border?:boolean,
  borderType?: 'solid' | 'dotted' | 'dashed',
  borderColor?: string
}

/**
 * @docunator
 * @title Table
 * @description A simple table component that will help you to create a grid layout
 * @category Structure Components
 * @param {StyleSheet} style The additional styles to be added to the table. Default is null
 * @param {Element} children The child component of the table. This is required
 * @param {boolean} border The border of the table. Default is false
 * @param {string} borderType The border type of the table. Default is solid. Options are: solid, dotted, dashed
 * @param {string} borderColor The border color of the table. Default is the text color of the current theme
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
 * @docunator
 * @title Row
 * @description A simple row component that will help you to create a grid layout
 * @category Structure Components
 * @param {any} props The props of the row component
 *
 */
export function Row(props: any){
  return (
    <View style={[styles.row,props.style]}>
      {props.children ?? null}
    </View>
  );
}

/**
 * @docunator
 * @title ColumnProps
 * @description Props for the Column component.
 * @category Structure Components Props
 * @param {Element} children The child component of the column. This is required
 * @param {StyleSheet} style The additional styles to be added to the column. Default is null
 * @param {boolean} border The border of the column. Default is false
 * @param {string} borderType The border type of the column. Default is solid. Options are: solid, dotted, dashed
 * @param {string} borderColor The border color of the column. Default is the text color of the current theme
 * @param {number} span The number of columns to span. Default is 1
 */
type ColumnProps = {
  children: any
  style?: any,
  border?:boolean,
  borderType?: 'solid' | 'dotted' | 'dashed',
  borderColor?: string,
  span?: number
}

/**
 * @docunator
 * @title Column
 * @description A simple column component that will help you to create a grid layout
 * @param {any} props The props of the column component
 * @category Structure Components Props
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
