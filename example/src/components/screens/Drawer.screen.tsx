import { Layout, Screen, ZenButton, ZenCode, ZenText } from 'react-zen-ui';
import { Linking } from 'react-native';

export default function DrawerScreen() {
  const codeExample = `import {
  ZenDark,
  ZenThemeProvider,
} from 'react-zen-ui';
  export default function App() {
  return (
    <ZenThemeProvider theme={ZenDark}>
      <ZenDrawer />
       {/* Your app components go here */}
    </ZenThemeProvider>
  );
}`;
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText paragraph={true} fill={true}>
            ZenUI provides a customizable Drawer component that can be easily
            integrated into your React Native applications. The Drawer can be
            configured to open from either the left or right side of the screen,
            and it supports various customization options such as background
            color, header image, and item layout. The Drawer component is
            designed to work seamlessly with the ZenUI Header component,
            allowing for a cohesive navigation experience.
          </ZenText>

          <ZenText paragraph={true} fill={true}>
            And, as other components in ZenUI, the Drawer is built with
            simplicity and ease of use in mind, meaning that we are not using
            any external React Native library to make it work, keeping it simple
            and lightweight. Using the base React Native Animated API, we
            provide smooth animations and transitions for opening and closing
            the Drawer, ensuring a polished user experience.
          </ZenText>

          <ZenText paragraph={true} fill={true}>
            To make the drawer work, you just need to wrap your app with the
            "ZenThemeProvider" component and add the "ZenDrawer" component as a child of
            it.
          </ZenText>

          <ZenCode content={codeExample} />

          <ZenText paragraph={true} fill={true}>
            From that point, you can use the "useToggleDrawer" hook to open or
            close the drawer from any component in your app, or the "useDrawer"
            hook to get the current state of the drawer (opened or closed).
          </ZenText>

          <ZenButton
            fill={true}
            title={'Visit React Navigation'}
            pressAction={() => {
              Linking.openURL('https://reactnavigation.org/docs');
            }}
          />
        </Layout>
      </Screen>
    </>
  );
}
