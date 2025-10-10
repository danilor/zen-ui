import type { ThemeModel } from '../models/ThemeModel';
import ThemeConfig from '../config/Theme.config';

const ZenDark: ThemeModel= {
  text: ThemeConfig.colors.defaultLight,
  background: ThemeConfig.colors.defaultDark,
  primary: '#1E87DC',
  secondary: '#D98502',
  ...ThemeConfig.defaultColors
}

export default ZenDark;
