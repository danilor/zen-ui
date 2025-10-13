import type { ThemeModel } from 'zen-ui';
import { ZenThemeContext } from '../context/ZenThemeContext';
import ZenLight from '../theme/ZenLight';
import { useCallback, useState } from 'react';

type ZenThemeProviderProps = {
  children: any;
  theme?: ThemeModel;
};

/**
 * The provider for the current theme. Should wrap the entire app. It will be inside the screen component.
 * @param children
 * @param theme
 * @constructor
 */
export const ZenThemeProvider = ({
  children,
  theme,
}: ZenThemeProviderProps) => {


  const [currentTheme, setCurrentTheme] = useState(theme ?? ZenLight);

  const toggleTheme = useCallback((newTheme: ThemeModel) => {
    setCurrentTheme(() => newTheme);
  }, []);

  const themeContextValue = {
    ZenTheme: currentTheme,
    toggleTheme,
  };

  return (
    <ZenThemeContext.Provider value={themeContextValue}>
      {children}
    </ZenThemeContext.Provider>
  );
};

export default ZenThemeProvider;
