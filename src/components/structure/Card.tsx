import {StyleSheet, View} from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';
import ThemeConfig from '../../config/Theme.config';
import type { ThemeType } from '../../literals/Type.literal';
import type { ReactElement } from 'react';
import ZenText from '../themed/ZenText';
import  ZenDivider  from './../structure/ZenDivider';


type CardHeaderProps = {
  title?: string;
  type?: ThemeType | undefined;
  leftAccessory?: ReactElement | ReactElement[] | undefined;
  rightAccessory?: ReactElement | ReactElement[] | undefined;
}

/**
 * Card Header
 * @param title
 * @param type
 * @param leftAccessory
 * @param rightAccessory
 * @constructor
 */
export function CardHeader(
  {
    title,
    type = undefined,
    leftAccessory,
    rightAccessory
  }: CardHeaderProps
): ReactElement {

  const styles = StyleSheet.create({
    header:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      // marginBottom: LayoutConfig.space / 2,
      gap: LayoutConfig.space
    },
    right:{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: LayoutConfig.space
    }
  });

  return (
    <>
      <View style={styles.header}>
        {leftAccessory}
        <ZenText type={'h4'}>
          {title}
        </ZenText>
        {rightAccessory && (
          <View style={styles.right}>
            {rightAccessory}
          </View>
        )}

      </View>
      { type && ( <ZenDivider type={type} /> ) }
    </>
  );
}



/*******************************************************************************************************************************/

type CardFooterProps = {
  type?: ThemeType;
  children?: any;
}

export function CardFooter(
  { type = 'primary', children }: CardFooterProps
){

  const theme = useTheme();

  if(theme[type] === undefined){
    throw new Error(`Theme type "${type}" is not defined in the current theme.`);
  }

  const styles = StyleSheet.create({
    footer:{}
  });

  return (
    <View style={styles.footer}>
      <ZenDivider type={type} />
      {children}
    </View>
  );
}

/*******************************************************************************************************************************/

/**
 * Card Props
 */
type CardProps = {
  children?: any;
  type?: ThemeType | undefined;
  title?: string;
  headerLeftAccessory?: ReactElement | ReactElement[] | undefined;
  headerRightAccessory?: ReactElement | ReactElement[] | undefined;
  backColor?: string | undefined;
  header?: any;
  footer?: any;
}

/**
 * Card Component
 * A simple card component to display content in a card-like container.
 * @param children
 * @param type
 * @param title
 * @param headerLeftAccessory
 * @param headerRightAccessory
 * @param backColor
 * @param header We can overwrite the header by passing a custom component here.
 * @param footer
 * @constructor
 */
export default function Card(
  {
    children,
    type = undefined,
    title,
    headerLeftAccessory = undefined,
    headerRightAccessory = undefined,
    backColor = undefined,
    header,
    footer,
  }: CardProps
) {

  const theme = useTheme();

  const cardBackgroundColor = ColorUtil.shade(theme.background,ThemeConfig.defaultCardBackgroundFactor);
  if(type !== undefined && theme[type] === undefined){
    throw new Error(`Theme type "${type}" is not defined in the current theme.`);
  }


  const styles = StyleSheet.create({
    card:{
      flex: 1,
      backgroundColor: (backColor ?? cardBackgroundColor),
      borderRadius: LayoutConfig.border,
      padding: LayoutConfig.space,
      marginTop: LayoutConfig.space,
      marginBottom: LayoutConfig.space,
      borderWidth: (type !== undefined) ? 1 : 0,
      borderColor: (type !== undefined) ? theme[type] : 'transparent',
    },

  });

  return (
    <View style={styles.card}>
      {
        (title !== undefined && header === undefined) && (
          <CardHeader title={title} type={type} leftAccessory={headerLeftAccessory} rightAccessory={headerRightAccessory} />
        )
      }
      { header }
      <View>
        {children}
      </View>
      {footer}
    </View>
  );
}
