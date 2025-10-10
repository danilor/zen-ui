import type { ThemeModel } from '../models/ThemeModel';
import ThemeConfig from '../config/Theme.config';


const ZenLight: ThemeModel = {
  text: ThemeConfig.colors.defaultDark,
  background: ThemeConfig.colors.defaultLight,
  primary: '#DCB026',
  secondary: '#D98502',

  ...ThemeConfig.defaultColors
}
export default ZenLight;
