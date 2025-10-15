import { ZenButton, ZenText } from 'react-zen-ui';
import { useNavigation } from '@react-navigation/native';


export default function IntroExample() {


  const navigation = useNavigation();

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

    <ZenButton type={'success'} fill={true} title={'Go to Theme'} pressAction={()=>{ navigation.navigate('Theme' as never)}} />





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
