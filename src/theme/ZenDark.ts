import type { ThemeModel } from '../models/ThemeModel';
import ThemeConfig from '../config/Theme.config';

const ZenDark: ThemeModel= {
  text: ThemeConfig.colors.defaultDark,
  background: ThemeConfig.colors.defaultLight,
  primary: '#1E87DC',
  secondary: '#D98502',
  ...ThemeConfig.defaultColors
}

export default ZenDark;
