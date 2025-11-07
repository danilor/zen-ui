import ColorUtil from '../util/Color.util';

/**
 * Define the step between each shade and tint
 */
const step: number = 0.1;

/** Define how many shades and tints we want to generate
 * For example, with 5 ranges, we will generate 5 shades and 5 tints for each color
 */
const ranges: number = 5;

/**
 * Define the versions of the colors we want to generate
 */
const versions = [
  {
    name: 'dark',
    factor: -step,
  },
  {
    name: 'light',
    factor: +step,
  }
];

/**
 * Complete the defaultColors object with shades and tints of the given color
 * @param name
 * @param color
 */
function completeColors(name: string, color: string){
  // @ts-ignore
  ThemeConfig.defaultColors[name] = color;
  for(const version of versions){
    for (let i = 0; i < ranges; i++){
      const n = `${name}_${version.name}_${i+1}`;
      // @ts-ignore
      ThemeConfig.defaultColors[n] = ColorUtil.shade(color, version.factor * (i+1));
    }
  }
}

/**
 * Theme Configuration
 */
const ThemeConfig = {
  colors: {
    defaultLight: '#F2F2F2',
    defaultDark: '#363636',
    defaultSuccess:'#2AAA3D',
    defaultInfo:'#0780F9',
    defaultWarning:'#FF9E0C',
    defaultDanger: '#FF2634',
  },
  defaultColors:{},
  text: {
    h1:{
      size: 45,
      weight: 'normal',
    },
    h2:{
      size: 35,
      weight: 'normal',
    },
    h3:{
      size: 30,
      weight: 'normal',
    },
    h4:{
      size: 26,
      weight: 'normal',
    },
    h5:{
      size: 20,
      weight: 'normal',
    },
    h6:{
      size: 18,
      weight: 'normal',
    },
    p:{
      size: 16,
      weight: 'normal',
    },
    s1:{
      size: 12,
      weight: 'normal',
    },
    s2:{
      size: 10,
      weight: 'normal',
    },
    label:{
      size: 16,
      weight: 'bold',
    },
  },
  defaultShareRatio:{
    input: -0.05
  },
  defaultDimValue: 0.5,
  defaultCardBackgroundFactor: -0.08,
};

completeColors('success', ThemeConfig.colors.defaultSuccess);
completeColors('info', ThemeConfig.colors.defaultInfo);
completeColors('warning', ThemeConfig.colors.defaultWarning);
completeColors('danger', ThemeConfig.colors.defaultDanger);


export default ThemeConfig;
