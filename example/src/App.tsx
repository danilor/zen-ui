import { StyleSheet, TextInput, View } from 'react-native';
import { Screen, ZenDark, ZenIcon } from 'zen-ui';
import ZenText from '../../src/components/themed/ZenText';
import { ZenThemeProvider } from '../../src/provider/ZenThemeProvider';

export default function App() {

  return (
    <ZenThemeProvider theme={ZenDark}>
      <Screen>
        <View style={styles.container}>
          <ZenText>Hello!</ZenText>
          <ZenIcon key={'testIcon'} name={'telegram-circle'} />
          <TextInput > test</TextInput>
        </View>
      </Screen>
    </ZenThemeProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
