import * as React from "react";

import { StyleSheet, View, Text, Button } from "react-native";
import { Layout, Screen } from 'zen-ui';

export default function App() {

  return (
    <Screen>
      <View style={styles.container}>
        {/*<Button onPress={() => setResult((i) => ++i)} title={'Multiply'}>Multiply</Button>*/}
        <Text>Result: Test</Text>
      </View>
    </Screen>


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
