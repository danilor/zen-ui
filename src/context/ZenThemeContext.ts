import { createContext } from 'react';
import ZenLight from '../theme/ZenLight';
import type { ThemeModel } from '../models/ThemeModel';


/**
 * Context for the theme. Should store the actual theme and a function to toggle it.
 */

export const ZenThemeContext = createContext({
  ZenTheme: ZenLight,
  ZenDrawer: false,
// @ts-ignore
  toggleTheme: (theme: ThemeModel) => {  },
  toggleDrawer: () => {  },
});
