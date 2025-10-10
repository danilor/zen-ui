import { StyleSheet, View } from 'react-native';
import { Screen, ZenDark, ZenIcon, ZenLight } from 'zen-ui';
import ZenText from '../../src/components/themed/ZenText';
import { ZenThemeProvider } from '../../src/provider/ZenThemeProvider';

export default function App() {

  console.log('App Rendered',ZenDark);

  return (
    <ZenThemeProvider theme={ZenDark}>
      <Screen>
        <View style={styles.container}>
          <ZenText>Hello!</ZenText>
          <ZenIcon key={'testIcon'} name={'hexagon-dice'} />
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
