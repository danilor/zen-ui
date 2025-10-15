import { Layout, Screen, ZenButton, ZenText } from 'react-zen-ui';
import {Linking} from 'react-native';

export default function HeaderScreen() {

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

          <ZenButton fill={true} title={'Visit React Navigation'} pressAction={()=>{
            Linking.openURL('https://reactnavigation.org/docs');
          }}/>
        </Layout>
      </Screen>
    </>
  );
}
