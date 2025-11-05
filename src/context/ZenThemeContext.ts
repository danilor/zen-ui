import { createContext } from 'react';
import ZenLight from '../theme/ZenLight';
import type { ThemeModel } from '../models/ThemeModel';
import type { ToastModel } from '../models/ToastModel';


/**
 * Context for the theme. Should store the actual theme and a function to toggle it.
 */

export const ZenThemeContext = createContext({
  ZenTheme: ZenLight,
  ZenDrawer: false,
  toggleTheme: (theme: ThemeModel) => { console.log(theme); },
  toggleDrawer: () => {  },
  showToast: (message: string, config: ToastModel) => { console.log(message, config);  },
  toast: {message: '' as string, config: {} as ToastModel},
});
