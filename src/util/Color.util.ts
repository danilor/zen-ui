const ColorUtil = {
  /**
   * @docunator
   * @title hex2
   * @category Color Utilities
   * @description Convert a number to a two-digit hexadecimal string
   * @param {number} c - The number to convert
   * @returns {string} The two-digit hexadecimal string
   */
  hex2: (c: number) => {
    c = Math.round(c);
    if (c < 0) c = 0;
    if (c > 255) c = 255;
    let s = c.toString(16);
    if (s.length < 2) s = "0" + s;
    return s;
  },

  /**
   *
   * @docunator
   * @title color
   * @category Color Utilities
   * @description Create a hex color string from RGB values
   * @param {number} r The red factor (0-255)
   * @param {number} g The green factor (0-255)
   * @param {number} b The blue factor (0-255)
   * @returns {string} The hex color string
   */
  color: (r: any, g: any, b: any)=> {
    return "#" + ColorUtil.hex2(r) + ColorUtil.hex2(g) + ColorUtil.hex2(b);
  },

  /**
   * @docunator
   * @title shade
   * @category Color Utilities
   * @description Shade a hex color by a given light factor
   * @param {string} col The hex color to shade
   * @param {number} light The light factor (-1 to 1). Negative values darken the color, positive values lighten it.
   * @returns {string} The shaded hex color
   */
  shade: (col: string, light: number)=> {
    let r = parseInt(col.substr(1, 2), 16);
    let g = parseInt(col.substr(3, 2), 16);
    let b = parseInt(col.substr(5, 2), 16);

    if (light < 0) {
      r = (1 + light) * r;
      g = (1 + light) * g;
      b = (1 + light) * b;
    } else {
      r = (1 - light) * r + light * 255;
      g = (1 - light) * g + light * 255;
      b = (1 - light) * b + light * 255;
    }
    return ColorUtil.color(r, g, b);
  },

  /**
   * @docunator
   * @title getContrastTextColor
   * @category Color Utilities
   * @description Given a hex color, determine whether black or white text would provide better contrast.
   * @param {string} hexColor
   * @returns {string} '#000000' for black text or '#ffffff' for white text
   */
  getContrastTextColor: (hexColor: string) => {
    // Remove the '#' if present
    const cleanHex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

    // Parse the R, G, B values
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    // Calculate the perceived brightness (luminance) using a common formula
    // These weights are based on how the human eye perceives different colors
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // A common threshold for determining light/dark is 128 (out of 255)
    // If the brightness is above this threshold, the color is considered light,
    // and black text is recommended. Otherwise, white text is recommended.
    return brightness > 128 ? '#000000' : '#ffffff';
  }
};
export default ColorUtil;
