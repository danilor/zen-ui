import { StyleSheet, View } from 'react-native';
import { Screen, ZenDark, ZenThemeProvider, Layout, ZenLight } from 'zen-ui';

import InputExample from './components/InputExample';
import ButtonExample from './components/ButtonExample';
import SearchExample from './components/SearchExample';
import TablesExample from './components/TablesExample';
import IconsExample from './components/IconsExample';
import IntroExample from './components/IntroExample';
import LoadingExample from './components/LoadingExample';
import useThemeStorage from '../storage/Theme.storage';

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default function App() {
  // console.log('App Rendered',ZenDark);

  // console.log(iconsChunk);

  const theme = useThemeStorage((state: any) => state.theme);

  // console.log('Current theme:', theme);

  const usingTheme = (theme === 'dark') ? ZenDark : ZenLight;

  // console.log('Using theme:', usingTheme);

  return (
    <ZenThemeProvider theme={usingTheme}>
      <Screen>
        <Layout scrollable={true}>
          <View style={styles.container}>

            <IntroExample />


            <InputExample />
            <ButtonExample />
            <SearchExample />
            <TablesExample />
            <IconsExample />
            <LoadingExample />

          </View>
        </Layout>
      </Screen>
    </ZenThemeProvider>
  );
}
