import { Column, Row, Table, ZenButton, ZenText } from 'zen-ui';
import useThemeStorage from '../../storage/Theme.storage';

export default function IntroExample() {

  const setTheme = useThemeStorage((state: any) => state.setTheme);

  return <>
    <ZenText type={'h1'} paragraph={true} align={'left'}>
      ZenUI
    </ZenText>
    <ZenText type={'p'} paragraph={true} align={'left'}>
      ZenUI was made having simplicity in mind. No extra libraries, no
      extra requirements; just a plug and play library for your projects
      with enough flexibility to suit your needs.
    </ZenText>

    <ZenText type={'h2'} paragraph={true} align={'left'}>
      Theme
    </ZenText>

    <ZenText type={'p'} paragraph={true} align={'justify'}>
      ZenUI was built upon a theming system, meaning that all components
      will adapt to the current theme. ZenUI comes with two themes by
      default: Light and Dark. However, you can easily create your own
      themes by following the structure of the existing themes. You can
      also customize the existing themes to suit your needs.
    </ZenText>

    <Table>
     <Row>
      <Column>
        <ZenButton title={'Set Light'} fill={true} pressAction={ ()=> setTheme('light') } />
      </Column>
       <Column>
         <ZenButton title={'Set Dark'} fill={true} pressAction={ ()=> setTheme('dark') } />
       </Column>
     </Row>
    </Table>

    <ZenText type={'h2'} paragraph={true} align={'left'}>
      Components
    </ZenText>

    <ZenText type={'p'} paragraph={true} align={'justify'}>
      All components were made on top of React Native components, meaning
      that you can use them as you would normally do with React Native.
      However, not all props from the original components are supported.
      This is to ensure that the components will always look good and work
      well with the current theme. If you need a prop that is not
      supported, please open an issue or a pull request and we will
      consider adding it.
    </ZenText>
  </>;
}
