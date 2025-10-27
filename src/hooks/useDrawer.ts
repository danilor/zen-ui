import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext'; // Import the context

/**
 * Hook to get the current state of the drawer (open or closed).
 */
/**
 * @docunator
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @title useDrawer
 * @description A custom hook to access the current state of the drawer (open or closed) from the ZenThemeContext. Its call must be made inside the context of a ZenThemeProvider.
 * @returns {boolean} The current state of the drawer (true for open, false for closed)
 * @category Hooks
 * @example {tsx}
import { useDrawer } from 'react-zen-ui';

export default function DrawerStateComponent(){
    const isDrawerOpen = useDrawer();
    return (
        <div>
            The drawer is currently {isDrawerOpen ? 'open' : 'closed'}.
        </div>
    );
}
  {/tsx}
 @see ZenThemeProvider
 */
export const useDrawer = () => {
  const {ZenDrawer} = useContext(ZenThemeContext);
  if (ZenDrawer === undefined) {
    throw new Error('useDrawer must be used within a ZenThemeProvider');
  }
  return ZenDrawer;
};

/**
 * Hook to toggle the drawer state (open or closed).
 */
/**
 * @docunator
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @title useToggleDrawer
 * @description A custom hook to toggle the drawer state (open or closed) from the ZenThemeContext. Its call must be made inside the context of a ZenThemeProvider.
 * @returns {Function} A function to toggle the drawer state
 * @category Hooks
 * @example {tsx}
import { useToggleDrawer } from 'react-zen-ui';
export default function ToggleDrawerComponent(){
    const toggleDrawer = useToggleDrawer();
    return (
        <button onClick={toggleDrawer}>
            Toggle Drawer
        </button>
    );
 }
 */
export const useToggleDrawer= () => {
  const {toggleDrawer} = useContext(ZenThemeContext);
  if (toggleDrawer === undefined) {
    throw new Error('useToggleDrawer must be used within a ZenThemeProvider');
  }
  return toggleDrawer;
};
