import {StyleSheet, View} from 'react-native';
import { useTheme } from './../../hooks/useTheme';
import ColorUtil from '../../util/Color.util';
import LayoutConfig from '../../config/LayoutConfig';
import ThemeConfig from '../../config/Theme.config';
import type { ThemeType } from '../../literals/Type.literal';
import type { ReactElement } from 'react';
import ZenText from '../themed/ZenText';
import  ZenDivider  from './../structure/ZenDivider';


/**
 * @docunator
 * @title Card Header Props
 * @description Props for the CardHeader component.
 * @category Structure Components Props
 */
type CardHeaderProps = {
  title?: string;
  type?: ThemeType | undefined;
  leftAccessory?: ReactElement | ReactElement[] | undefined;
  rightAccessory?: ReactElement | ReactElement[] | undefined;
}

/**
 * @docunator
 * @title Card Header
 * @description A simple header component for the Card component.
 * @category Structure Components
 * @param {string} title - The title of the card header.
 * @param {string} type - The theme type of the card header.
 * @param {Element} leftAccessory - The left accessory component of the card header.
 * @param {Element} rightAccessory - The right accessory component of the card header.
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

/**
 * @docunator
 * @title Card Footer Props
 * @description Props for the CardFooter component.
 * @category Structure Components Props
 */
type CardFooterProps = {
  type?: ThemeType;
  children?: any;
}

/**
 * @docunator
 * @title Card Footer
 * @description A simple footer component for the Card component.
 * @category Structure Components
 * @param {string} type - The theme type of the card footer.
 * @param {Element} children - The children components of the card footer.
 * @constructor
 */
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
 * @docunator
 * @title Card Props
 * @description Props for the Card component.
 * @category Structure Components Props
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
 * @docunator
 * @title Card
 * @description A simple card component to display content in a card-like container.
 * @category Structure Components
 * @param {Element} children - The content of the card.
 * @param {string} type - The theme type of the card.
 * @param {string} title - The title of the card.
 * @param {Element} headerLeftAccessory - The left accessory component of the card header.
 * @param {Element} headerRightAccessory - The right accessory component of the card header.
 * @param {string} backColor - We can overwrite the background color by passing a custom color here.
 * @param {Element} header We can overwrite the header by passing a custom component here.
 * @param {Element} footer
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
