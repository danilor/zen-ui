import type { ThemeModel } from './../models/ThemeModel';
import { ZenThemeContext } from '../context/ZenThemeContext';
import ZenLight from '../theme/ZenLight';
import {useState } from 'react';

type ZenThemeProviderProps = {
  children: any;
  theme?: ThemeModel;
};

/**
 * The provider for the current theme. Should wrap the entire app. It will be inside the screen component.
 * @param children
 * @param theme
 */
export const ZenThemeProvider = ({
  children,
  theme,
}: ZenThemeProviderProps) => {


  const [currentTheme, setCurrentTheme] = useState(theme ?? ZenLight);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /*const toggleTheme = useCallback((newTheme: ThemeModel) => {
    setCurrentTheme(() => newTheme);
  }, []);*/

  const themeContextValue = {
    ZenTheme: currentTheme,
    toggleTheme: (newTheme: ThemeModel) => { setCurrentTheme(newTheme) },
    ZenDrawer: drawerOpen,
    toggleDrawer: ( ) => { setDrawerOpen(!drawerOpen) },
  };

  return (
    <ZenThemeContext.Provider value={themeContextValue}>
      {children}
    </ZenThemeContext.Provider>
  );
};

export default ZenThemeProvider;
