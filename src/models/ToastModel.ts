import type { ThemeType } from '../literals/Type.literal';

/**
 * @docunator
 * @title ToastModel
 * @description Model for configuring toast notifications.
 * @category Models
 * @see useToast
 * @see ZenToast
 * @param {string} speed - Speed of the toast animation. Options are 'fast', 'normal', 'slow'. Default is 'normal'.
 * @param {number} duration - Duration the toast is visible in milliseconds. Default is 3000.
 * @param {string} position - Position of the toast on the screen. Options are 'top' or 'bottom'. Default is 'bottom'.
 * @param {number} margin - Margin from the edge of the screen in pixels. Default is 20.
 * @param {number} transparency - Transparency level of the toast background. Value between 0 (fully transparent) and 1 (fully opaque). Default is 0.8.
 * @param {string} type - Theme type for the toast. Options are theme types defined in ThemeType or 'default'. Default is 'default'.
 */
type ToastModel = {
  speed?: 'fast' | 'normal' | 'slow';
  duration?: number;
  position?: 'top' | 'bottom';
  margin?: number;
  transparency?: number;
  type?: ThemeType | 'default';
}
export type { ToastModel };
