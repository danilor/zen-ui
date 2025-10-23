import {
  Layout,
  Screen,
  ZenButton,
  ZenCode,
  ZenText,
} from 'react-zen-ui';
import {Linking} from 'react-native';


export default function HeaderScreen() {

  const code = `const headerComponent = (props: NativeStackHeaderProps) => (
    <ZenHeader
      automaticDrawerIcon={'menu'}
      showBackButton={props.navigation.canGoBack()}
      title={props.options.title as string}
      goBack={()=>{ props.navigation.goBack(); }}
      // rightIcon={'menu'}
      // onRightIconPress={() => {
      //   return null;
      // }}
      {...props}
    />
  );`;

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText paragraph={true} fill={true}>
            Header elements are used to create a consistent and visually
            appealing header section for your application. They typically
            include components such as titles, subtitles, navigation buttons,
            and other interactive elements that enhance the user experience.
          </ZenText>

          <ZenText paragraph={true} fill={true}>
            At the top of this example app you can see a header element in use. This was made to be used
            with the React Navigation official library, but you can use it as a standalone component
            if you want or try to integrate it with other navigation libraries.
          </ZenText>

          <ZenText paragraph={true} fill={true}>
            You can configure the header to show a back button, a title, a right icon with an action,
            and even a custom right accessory component. The header will also adapt to the current theme
            automatically. Additionally, it can be configured to show a drawer icon that will open a drawer
            when pressed. This way, the integrated drawer (also included in this library) can be used
            alongside the header.
          </ZenText>

          <ZenCode content={code} />

          <ZenButton fill={true} title={'Visit React Navigation'} pressAction={()=>{
            Linking.openURL('https://reactnavigation.org/docs');
          }}/>
        </Layout>
      </Screen>
    </>
  );
}
