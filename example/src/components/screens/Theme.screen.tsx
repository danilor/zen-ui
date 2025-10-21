import {
  Column,
  Layout, Row,
  Screen,
  Table,
  useChangeTheme,
  useTheme,
  ZenButton,
  ZenDark, ZenIcon,
  ZenLight,
  ZenText,
  ZenCode
} from 'react-zen-ui';
import useThemeStorage from '../../../storage/Theme.storage';
import { View } from 'react-native';

export default function ThemeScreen() {
  const setTheme = useThemeStorage((state: any) => state.setTheme);
  const changeTheme = useChangeTheme();
  const theme = useTheme();


  const content = `import {
  ZenDark,
  ZenLight,
  ZenThemeProvider
} from 'react-zen-ui';

export default function App() {
  const usingTheme =
    theme === 'dark'
    ? ZenDark
    : ZenLight;

  return (
    <ZenThemeProvider theme={usingTheme}>
      {/* Your App Components go here */}
    </ZenThemeProvider>
  );
}`;

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText paragraph={true} fill={true} align={'justify'}>
            Theming is a powerful feature that allows you to customize the
            appearance of your application to match your brand or personal
            preferences. With theming, you can easily switch between different
            visual styles, such as light and dark modes, to enhance the user
            experience and improve accessibility.
          </ZenText>

          <ZenText paragraph={true} fill={true} align={'justify'}>
            ZenUI was built upon a theming system, meaning that all components
            will adapt to the current theme. ZenUI comes with two themes by
            default: Light and Dark. However, you can easily create your own
            themes by following the structure of the existing themes. You can
            also customize the existing themes to suit your needs.
          </ZenText>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            <ZenButton
              title={'Set Light'}
              fill={false}
              pressAction={() => {
                setTheme('light');
                changeTheme(ZenLight);
              }}
            />
            <ZenButton
              type={'secondary'}
              title={'Set Dark'}
              fill={false}
              pressAction={() => {
                setTheme('dark');
                changeTheme(ZenDark);
              }}
            />
          </View>

          <ZenText fill={true} paragraph={true} align={'justify'}>
            To enable the theme, we need to wrap our application with the
            &lt;ZenThemeProvider&gt; component and pass the desired theme as a
            prop.
          </ZenText>

          <ZenCode content={content} />

          <ZenText fill={true} paragraph={true} align={'justify'}>
            Below, are the current theme values. You can try changing the
            theme to see this information change as well.
          </ZenText>

          <View>
            <Table>
              {
                Object.keys(theme).map((key: string) => {
                  return (
                    <Row key={key}>
                      <Column>
                        <ZenText>
                          {key}
                        </ZenText>
                      </Column>
                      <Column style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 5 }}>
                        <ZenText align={'right'}>{String(theme[key as keyof typeof theme])}</ZenText>
                        <ZenIcon name={'select-face-3d'} color={theme[key as keyof typeof theme]}></ZenIcon>
                      </Column>
                    </Row>
                  );
                })
              }


            </Table>


          </View>

          <ZenText type={'h4'} fill={true} paragraph={true} align={'justify'}>
            Tips:</ZenText>
          <ZenText fill={true} paragraph={true} align={'justify'}>
            1) Don't use a pure black or pure white color in your themes, as they can be harsh on the eyes. Instead, use slightly off-white or off-black colors for a more comfortable viewing experience.
          </ZenText>
          <ZenText fill={true} paragraph={true} align={'justify'}>
            2) Test your themes in different lighting conditions to ensure readability and usability.
          </ZenText>
        </Layout>
      </Screen>
    </>
  );
}
