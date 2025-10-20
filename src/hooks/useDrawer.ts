import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext'; // Import the context

/**
 * Hook to get the current state of the drawer (open or closed).
 */
export const useDrawer = () => {
  const {ZenDrawer} = useContext(ZenThemeContext);
  if (ZenDrawer === undefined) {
    throw new Error('useDrawer must be used within a ZenThemeProvider');
  }
  return ZenDrawer;
};

export const useToggleDrawer= () => {
  const {toggleDrawer} = useContext(ZenThemeContext);
  if (toggleDrawer === undefined) {
    throw new Error('useToggleDrawer must be used within a ZenThemeProvider');
  }
  return toggleDrawer;
};
