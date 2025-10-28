import ZenInput from './ZenInput';
import ZenText from './ZenText';
import type { ThemeType } from '../../literals/Type.literal';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import ThemeConfig from '../../config/Theme.config';
import { useTheme } from './../../hooks/useTheme';
import LayersConfig from '../../config/Layers.config';
import LayoutConfig from '../../config/LayoutConfig';
import ColorUtil from '../../util/Color.util';


type ZenSelectProps = {
  items: string[];
  label?: string;
  placeholder?: string;
  dir?: 'ltr' | 'rtl';
  leftIcon?: string;
  rightIcon?: string;
  leftAccessory?: any;
  rightAccessory?: any;
  disabled?: boolean;
  type?: ThemeType,
  defaultValue?: string;
  onChange?: (selectedItem: string) => void;
}

/**
 * @docunator
 * @title ZenSelect
 * @description A select component with a label. The label is optional. Based on ZenInput.
 * @category Themed Components
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @param {string[]} items The list of items to select from. This is required
 * @param {string} label The label for the select component
 * @param {string} placeholder The placeholder for the select component
 * @param {string} dir The direction of the text. Can be 'ltr' or 'rtl'. Default is 'ltr'
 * @param {string} leftIcon The left icon name
 * @param {Element} leftAccessory The left accessory element
 * @param {boolean} disabled Whether the select is disabled
 * @param {string} type The theme type for the select. Default is 'primary'
 * @param {string} defaultValue The default selected value
 * @param {Function} onChange Callback function when the selected item changes
 * @see ZenInput
 * @example {tsx}
 import {
   Table,
   Row,
   Column,
   ZenSelect
 } from 'react-zen-ui';}
 export default function App() {

 return (
   <Table>
     <Row>
         <Column span={2}>
            <ZenSelect items={['Option 1', 'Option 2', 'Option 3']} label={'Select one option (primary)'} type={'primary'} />
         </Column>
     </Row>
     <Row>
         <Column>
            <ZenSelect items={['Success 1', 'Success 2', 'Success 3']} label={'Success'} type={'success'} />
         </Column>
         <Column>
            <ZenSelect items={['Danger 1', 'Danger 2', 'Danger 3']} label={'Danger'} type={'danger'} />
         </Column>
     </Row>
   </Table>
   );
 }

 */
export default function ZenSelect(
  {
    items,
    label = 'Select',
    placeholder = 'Select',
    dir = 'ltr',
    leftIcon,
    leftAccessory,
    disabled = false,
    type = 'primary',
    defaultValue = '',
    onChange = (s: string)=>{return s;},

  }: ZenSelectProps
){

  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue);
  const [randomId] = useState(Math.random().toString(36).substring(7));

  const theme = useTheme();

  if(!theme[type]){
    throw new Error('ZenSelect: Invalid type provided. Available types are primary, secondary, success, warning, danger, info.');
  }

  const changeOpened = () => {
    setOpened(!opened);
  }

  const changeSelectedItem = (s: string) => {
    setSelectedItem(s);
    setOpened(false);
    if(onChange){
      onChange(s);
    }
  };

  const styles = StyleSheet.create({
    container:{
      position: 'relative',
    },
    overlay:{
      backgroundColor: 'red'
    },
    modal:{
      position: 'absolute',
      // backgroundColor: 'red',
      // bottom: 0,
      top: '100%',
      zIndex: LayersConfig.select,
      width: '100%',
      borderRadius: LayoutConfig.border,
      padding: LayoutConfig.space,
      display: 'flex',
      gap: LayoutConfig.space,
      backgroundColor: ColorUtil.shade(
        theme.background,
        ThemeConfig.defaultShareRatio.input
      ),
      borderWidth: 1,
      borderColor: theme[type] ?? theme.primary,
    }
  });


  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={disabled} activeOpacity={ThemeConfig.defaultDimValue} onPress={changeOpened}>
        <ZenInput
          label={label}
          placeholder={placeholder}
          dir={dir}
          leftIcon={leftIcon}
          rightIcon={ (opened ? 'arrow-up-circle' : 'arrow-down-circle') }
          leftAccessory={leftAccessory}
          disabled={disabled}
          type={type}
          readOnly={true}
          value={selectedItem}
        />
      </TouchableOpacity>

      { opened && (
        <View style={styles.modal}>

          {items.map( (item: string, index: number)=>(
            <TouchableOpacity onPress={()=>{changeSelectedItem(item)}} key={`select_item_${index}_${randomId}`} activeOpacity={ThemeConfig.defaultDimValue}>
              <ZenText type={'h5'} >{item}</ZenText>
            </TouchableOpacity>
          ))}

        </View>
      ) }

    </View>
  );
}
