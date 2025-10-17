import type { ThemeModel } from './../models/ThemeModel';
import {useState } from 'react';
import { ZenDrawerContext } from '../context/ZenDrawerContext';

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
export const ZenDrawerProvider = ({
  children,
}: ZenThemeProviderProps) => {


  const [opened, setOpened] = useState(false);

  /*const toggleTheme = useCallback((newTheme: ThemeModel) => {
    setCurrentTheme(() => newTheme);
  }, []);*/

  const contextValue = {
    open: opened,
    toggle: () => { setOpened((prevState) => !prevState); },
  };

  return (
    <ZenDrawerContext.Provider value={contextValue}>
      {children}
    </ZenDrawerContext.Provider>
  );
};

export default ZenDrawerProvider;
