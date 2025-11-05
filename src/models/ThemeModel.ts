/**
 * @docunator
 * @title ThemeModel
 * @description Model representing a theme with various color properties.
 * @category Models
 * @param {string} text - Color for text elements.
 * @param {string} background - Color for background elements.
 * @param {string} primary - Primary color used in the theme.
 * @param {string} secondary - Secondary color used in the theme.
 * @param {string} [key: string] - Additional color properties can be added as needed.
 */
export type ThemeModel = {
  text: string
  background: string
  primary: string
  secondary: string
  [key: string]: string
}
