import { StyleSheet, View } from 'react-native';
import { Screen, ZenDark, ZenThemeProvider, Layout } from 'zen-ui';

import InputExample from './components/InputExample';
import ButtonExample from './components/ButtonExample';
import SearchExample from './components/SearchExample';
import TablesExample from './components/TablesExample';
import IconsExample from './components/IconsExample';
import IntroExample from './components/IntroExample';

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

  return (
    <ZenThemeProvider theme={ZenDark}>
      <Screen>
        <Layout scrollable={true}>
          <View style={styles.container}>

            <IntroExample />
            <InputExample />
            <ButtonExample />
            <SearchExample />
            <TablesExample />
            <IconsExample />

          </View>
        </Layout>
      </Screen>
    </ZenThemeProvider>
  );
}
