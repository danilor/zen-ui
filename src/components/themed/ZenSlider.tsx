import {View } from 'react-native';
import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from './../../hooks/useTheme';


type ZenSliderProps = {
  type?: ThemeType,
  start?: number,
  end?: number,
  step?: number,
  initialValue?: number,
  onValueChange?: (value: number) => void,
  thickness?: number,
  thumbSize?: number,
}

/**
 *
 * @title ZenSlider
 * @description A themed slider component for selecting a value within a specified range. [EXPERIMENTAL]
 * @param {string} type The theme type for the slider (e.g., 'primary', 'secondary', etc.)
 * @param {number} start The starting value of the slider
 * @param {number} end The ending value of the slider
 * @param {number} step The increment step for the slider value
 * @param {number} initialValue The initial value of the slider
 * @param {Function} onValueChange Callback function that is called when the slider value changes
 * @param {number} thickness The thickness of the slider track
 * @param {number} thumbSize The size of the slider thumb
 * @author Danilo Ramírez Mattey
 * @category Themed Components
 * @version 1.0.0
 *
 */
export default function ZenSlider(
  {
    type = 'primary',
    start = 0,
    end = 100,
  }: ZenSliderProps
){

  const theme = useTheme();

  if( theme[type] === undefined ){
    throw new Error(`Theme type "${type}" is not defined in the current theme.`);
  }

  if(start < 0 || end <= start){
    throw new Error(`Invalid start (${start}) and end (${end}) values for ZenSlider.`);
  }

  return (
    <View >
      <View>

      </View>
    </View>
  );
}
