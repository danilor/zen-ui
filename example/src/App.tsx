// import { StyleSheet, View } from 'react-native';
// import { Screen, ZenDark, ZenThemeProvider, Layout, ZenLight } from 'zen-ui';
// import InputExample from './components/examples/InputExample';
// import ButtonExample from './components/examples/ButtonExample';
// import SearchExample from './components/examples/SearchExample';
// import TablesExample from './components/examples/TablesExample';
// import IconsExample from './components/examples/IconsExample';
// import IntroExample from './components/examples/IntroExample';
// import LoadingExample from './components/examples/LoadingExample';
// import useThemeStorage from '../storage/Theme.storage';
//
// const styles = StyleSheet.create({
//   buttonsContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     gap: 10,
//   },
//   container: {
//     flex: 1,
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });
//
// export default function App() {
//   const theme = useThemeStorage((state: any) => state.theme);
//
//
//   const usingTheme = (theme === 'dark') ? ZenDark : ZenLight;
//
//
//   return (
//     <ZenThemeProvider theme={usingTheme}>
//       <Screen>
//         <Layout scrollable={true}>
//           <View style={styles.container}>
//
//             <IntroExample />
//
//
//             <InputExample />
//             <ButtonExample />
//             <SearchExample />
//             <TablesExample />
//             <IconsExample />
//             <LoadingExample />
//
//           </View>
//         </Layout>
//       </Screen>
//     </ZenThemeProvider>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ZenDark, ZenLight, ZenThemeProvider } from 'zen-ui';
import useThemeStorage from '../storage/Theme.storage';
import IntroScreen from './components/screens/Intro.screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Home" component={IntroScreen} />
      </Stack.Navigator>

  );
}

export default function App() {
  const theme = useThemeStorage((state: any) => state.theme);
  const usingTheme = (theme === 'dark') ? ZenDark : ZenLight;
  return (
     <ZenThemeProvider theme={usingTheme}>
       <NavigationContainer>
       <RootStack/>
       </NavigationContainer>
     </ZenThemeProvider>
   );
}
