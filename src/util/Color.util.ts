const ColorUtil = {
  /**
   * Convert a number to a two-digit hexadecimal string
   * @param c
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
   * Create a hex color string from RGB values
   * @param r
   * @param g
   * @param b
   */
  color: (r: any, g: any, b: any)=> {
    return "#" + ColorUtil.hex2(r) + ColorUtil.hex2(g) + ColorUtil.hex2(b);
  },

  /**
   * Shade a color by a given lightness factor
   * @param col
   * @param light
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
