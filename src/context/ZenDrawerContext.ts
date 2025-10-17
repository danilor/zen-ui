import { createContext } from 'react';

/**
 * Context for the theme. Should store the actual theme and a function to toggle it.
 */

export const ZenDrawerContext = createContext({
  open: false,
  // @ts-ignore
  toggle: () => {  },
});
