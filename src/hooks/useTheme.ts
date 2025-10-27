import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext';
import type { ThemeModel } from './../models/ThemeModel'; // Import the context

/**
 * This hook should provide an easy way to access the current theme.
 * Using the Context API
 * @see https://react.dev/learn/passing-data-deeply-with-context
 */

/**
 * @docunator
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @title useTheme
 * @description A custom hook to access the current theme from the ZenThemeContext. It will contain all the theme properties defined in the ThemeModel. Its call must be made inside the context of a ZenThemeProvider.
 * @returns {ThemeModel} The current theme object
 * @category Hooks
 * @example {tsx}
import { useTheme } from 'react-zen-ui';

export default function ThemedComponent(){
    const theme = useTheme();
    return (
        <div style={{backgroundColor: theme.backgroundColor, color: theme.textColor}}>
            This component is themed!
        </div>
    );
}
  {/tsx}
 @see ZenThemeProvider
 */

export const useTheme: ()=> ThemeModel = () => {
  const {ZenTheme} = useContext(ZenThemeContext);
  if (ZenTheme === undefined) {
    throw new Error('useTheme must be used within a ZenThemeProvider');
  }
  return ZenTheme;
};

export const useChangeTheme= () => {
  const {toggleTheme} = useContext(ZenThemeContext);
  if (toggleTheme === undefined) {
    throw new Error('changeTheme must be used within a ZenThemeProvider');
  }
  return toggleTheme;
};
