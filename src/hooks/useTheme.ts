import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext'; // Import the context

export const useTheme = () => {
  const {ZenTheme} = useContext(ZenThemeContext);

  if (ZenTheme === undefined) {
    throw new Error('useTheme must be used within a ZenThemeProvider');
  }

  return ZenTheme;
};
