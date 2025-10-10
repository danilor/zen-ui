import { type Context, createContext } from 'react';
import ZenLight from '../theme/ZenLight';
import type { ThemeModel } from 'zen-ui';

/**
 * Context for the theme. Should store the actual theme and a function to toggle it.
 */

export const ZenThemeContext: Context<{ ZenTheme: ThemeModel; toggleTheme: (theme: ThemeModel) => void }> = createContext({
  ZenTheme: ZenLight,
  toggleTheme: (theme: ThemeModel) => { console.log(theme); },
});
