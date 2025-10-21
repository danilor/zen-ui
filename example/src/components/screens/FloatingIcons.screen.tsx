
import { Layout, Screen, ZenCode, ZenText } from 'react-zen-ui';


export default function FloatingIconsScreen() {


  const codeExample = `export default function App() {

  const menuButtons: any[] = [
    {
      icon: 'home',
      type: 'primary',
      onPress: () => { /* Do Something */ }
    },
    {
      icon: 'settings',
      type: 'secondary',
      onPress: () => { /* Do Something */ }
    },
    {
      icon: 'apple',
      type: 'success',
      onPress: () => { /* Do Something */ }
    }
  ];

  return (
  <ZenThemeProvider theme={ZenDark}>
    <ZenFloatingIcons
      buttons={menuButtons}
      size={'large'}
    />
    {/*...rest of your app components...*/}
  </ZenThemeProvider>
);
}
`;

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText fill={true} paragraph={true}>
            The floating icons are a way to add navigation features
            to any application. They can be used to navigate between different
            screens, open menus, or perform actions. Floating icons are typically
            represented as circular buttons that hover above the main content of
            the screen.
          </ZenText>
          <ZenText fill={true} paragraph={true}>
            In this example application, you can see some navigation icons sitting
            at the bottom of the screen. These icons allow you to navigate between
            different sections of the app. You can customize the appearance and
            behavior of these icons to suit your application's needs.
          </ZenText>
          <ZenText fill={true} paragraph={true}>
            To use them, just add the ZenFloatingIcons component to your screen and
            inside the ZenThemeProvider component. You can then define the buttons
            and their actions as needed.
          </ZenText>

          <ZenCode content={codeExample} />




        </Layout>
      </Screen>
    </>
  );
}
