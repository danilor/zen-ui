/**
 * @docunator
 * @title Intro
 * @description ZenUI is a React component library that provides a set of customizable and themeable UI components to help developers build modern mobile applications with ease. It offers a variety of components such as buttons, inputs, icons, and layouts, all designed to be responsive and visually appealing. With ZenUI, developers can quickly create beautiful and functional user interfaces while maintaining consistency across their applications.
 * @author Danilo Ramírez Mattey
 * @category Documentation
 *
 */

/**
 * Components
 */
import { Table, Row, Column } from './components/structure/Table';
import Layout from './components/structure/Layout';
import Screen from './components/structure/Screen';
import ZenButton from './components/themed/ZenButton';
import ZenHeader from './components/navigation/ZenHeader';
import ZenIcon from './components/themed/ZenIcon';
import ZenInput from './components/themed/ZenInput';
import ZenLoading from './components/themed/ZenLoading';
import ZenSearch from './components/themed/ZenSearch';
import ZenText from './components/themed/ZenText';
import ZenSelect from './components/themed/ZenSelect';
import ZenThemeProvider from './provider/ZenThemeProvider';
import ZenSlider from './components/themed/ZenSlider';
import ZenListItem from './components/themed/ZenListItem';
import icons from './assets/icons.json';
import { useChangeTheme, useTheme } from './hooks/useTheme';
import ZenDrawer from './components/drawer/ZenDrawer';
import ZenDrawerItem from './components/drawer/ZenDrawerItem';
import ZenDrawerTitle from './components/drawer/ZenDrawerTitle';
import ZenCode from './components/themed/ZenCode';
import { useDrawer, useToggleDrawer } from './hooks/useDrawer';
import ZenFloatingIcons from './components/navigation/ZenFloatingIcons';
import ZenIconButton from './components/themed/ZenIconButton';
import ZenDivider from './components/structure/ZenDivider';
import ZenCheck from './components/themed/ZenCheck';
import ZenSpaceBlock from './components/structure/ZenSpaceBlock';
import Card, {CardHeader, CardFooter} from './components/structure/Card';
import ZenSpotlight from './components/widgets/ZenSpotlight';
import ZenProfile from './components/widgets/ZenProfile';
import ZenPlay from './components/widgets/ZenPlay';
/**
 * Theme
 */
import ZenLight from './theme/ZenLight';
import ZenDark from './theme/ZenDark';

/**
 * Types
 */
import type { ThemeModel } from './models/ThemeModel';

export {
  /**
   * Components
   */
  Screen,
  Layout,
  Table,
  Column,
  Row,
  ZenSpaceBlock,
  Card,
  CardHeader,
  CardFooter,

  /**
   * Theme
   */
  ZenLight,
  ZenDark,
  useTheme,
  useChangeTheme,
  ZenThemeProvider,

  /**
   * Theme components
   */
  ZenIcon,
  ZenText,
  ZenInput,
  ZenLoading,
  ZenButton,
  ZenIconButton,
  ZenSearch,
  ZenCode,
  ZenDivider,
  ZenCheck,
  ZenSelect,
  ZenSlider,
  ZenListItem,

  /**
   * Navigation
   */
  ZenHeader,
  ZenFloatingIcons,

  /**
   * Drawer
   */
  ZenDrawer,
  ZenDrawerItem,
  ZenDrawerTitle,
  useDrawer,
  useToggleDrawer,

  /**
   * Types
   */
  type ThemeModel,

  /**
   * Widgets
   */
  ZenSpotlight,
  ZenProfile,
  ZenPlay,

  /**
   * Other
   */
  icons,
};
