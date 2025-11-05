import type { ThemeModel } from './../models/ThemeModel';
import { ZenThemeContext } from '../context/ZenThemeContext';
import ZenLight from '../theme/ZenLight';
import {useState } from 'react';
import ZenToast from '../components/toast/ZenToast';
import type { ToastModel } from '../models/ToastModel';

type ZenThemeProviderProps = {
  children: any;
  theme?: ThemeModel;
  toast?: boolean;
};

/**
 * The provider for the current theme. Should wrap the entire app. It will be inside the screen component.
 * @param children
 * @param theme
 * @param {boolean} toast - whether to show the toast component. Defaults to true
 */
export const ZenThemeProvider = ({
  children,
  theme,
  toast = true,
}: ZenThemeProviderProps) => {


  const [currentTheme, setCurrentTheme] = useState(theme ?? ZenLight);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastConfig, setToastConfig] = useState<ToastModel>({});

  /*const toggleTheme = useCallback((newTheme: ThemeModel) => {
    setCurrentTheme(() => newTheme);
  }, []);*/

  const themeContextValue = {
    ZenTheme: currentTheme,
    toggleTheme: (newTheme: ThemeModel) => { setCurrentTheme(newTheme) },
    ZenDrawer: drawerOpen,
    toggleDrawer: ( ) => { setDrawerOpen(!drawerOpen) },
    showToast: (message: string, config: any) => { setToastConfig(config); setToastMessage(message);  },
    toast: {message: toastMessage, config: toastConfig},
  };

  return (
    <ZenThemeContext.Provider value={themeContextValue}>
      {toast && <ZenToast />}
      {children}
    </ZenThemeContext.Provider>
  );
};

export default ZenThemeProvider;
