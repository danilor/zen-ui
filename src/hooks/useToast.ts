import { useContext } from 'react';
import { ZenThemeContext } from '../context/ZenThemeContext';
import type { ToastModel } from '../models/ToastModel';

/**
 * This hook should provide an easy way to access the current theme.
 * Using the Context API
 * @see https://react.dev/learn/passing-data-deeply-with-context
 */

/**
 * @docunator
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @title useToast
 * @description A hook to show toast notifications within components. Must be used within a ZenThemeProvider. The first parameter is the message and it is required, the second parameter is the configuration object of type ToastModel and it is optional.
 * @returns {Function} The current function to show toast notifications.
 * @category Hooks
 * @see ZenThemeProvider
 * @see ToastModel
 */

export const useToast: ()=> Function = () => {
  const {showToast} = useContext(ZenThemeContext);
  if (showToast === undefined) {
    throw new Error('showToast must be used within a ZenThemeProvider');
  }
  return showToast;
};

export const useToastData: ()=> {message:string, config: ToastModel} = () => {
  const {toast} = useContext(ZenThemeContext);
  if (toast === undefined) {
    throw new Error('toast must be used within a ZenThemeProvider');
  }
  return toast;
};
