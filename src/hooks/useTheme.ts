import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext';
import type { ThemeModel } from './../models/ThemeModel'; // Import the context

/**
 * This hook should provide an easy way to access the current theme.
 * Using the Context API
 * @reference https://react.dev/learn/passing-data-deeply-with-context
 */
export const useTheme: ()=> ThemeModel = () => {
  const {ZenTheme} = useContext(ZenThemeContext);
  if (ZenTheme === undefined) {
    throw new Error('useTheme must be used within a ZenThemeProvider');
  }
  return ZenTheme;
};
