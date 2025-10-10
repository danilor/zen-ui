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
  }
};
export default ColorUtil;
