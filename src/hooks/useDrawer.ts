import { useContext } from 'react';
import { ZenDrawerContext } from '../context/ZenDrawerContext'; // Import the context

/**
 * Hook to get the current state of the drawer (open or closed).
 */
export const useDrawer = () => {
  const {open} = useContext(ZenDrawerContext);
  if (open === undefined) {
    throw new Error('useDrawer must be used within a ZenDrawerProvider');
  }
  return open;
};

export const useToggleDrawer= () => {
  const {toggle} = useContext(ZenDrawerContext);
  if (toggle === undefined) {
    throw new Error('useToggleDrawer must be used within a ZenDrawerProvider');
  }
  return toggle;
};
