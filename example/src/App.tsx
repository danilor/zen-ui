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
import { createNativeStackNavigator, type NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ZenDark, ZenHeader, ZenLight, ZenThemeProvider } from 'zen-ui';
import useThemeStorage from '../storage/Theme.storage';
import IntroScreen from './components/screens/Intro.screen';
import ButtonsScreen from './components/screens/Buttons.screen';
import InputScreen from './components/screens/Input.screen';
import IconsScreen from './components/screens/Icons.screen';
import LoadingScreen from './components/screens/Loading.screen';
import TablesScreen from './components/screens/Tables.screen';
import SearchScreen from './components/screens/Search.screen';
import HeaderScreen from './components/screens/Header.screen';
import ThemeScreen from './components/screens/Theme.screen';
import TextScreen from './components/screens/Text.screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: true,
        header: (props: NativeStackHeaderProps) => (<ZenHeader rightIcon={'menu'} onRightIconPress={()=>{return null;}} {...props}/>),
      }} >
        <Stack.Screen
          name="Home"
          component={IntroScreen}
          options={{
            title: 'ZenUI',
          }}
        />
        <Stack.Screen
          name="Theme"
          component={ThemeScreen}
          options={{
            title: 'Theme',
          }}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{
            title: 'Text',
          }}
        />
        <Stack.Screen
          name="Buttons"
          component={ButtonsScreen}
          options={{
            title: 'Buttons',
          }}
        />
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{
            title: 'Input Text',
          }}
        />
        <Stack.Screen
          name="Icons"
          component={IconsScreen}
          options={{
            title: 'Icons',
          }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            title: 'Loading Icons',
          }}
        />
        <Stack.Screen
          name="Tables"
          component={TablesScreen}
          options={{
            title: 'Tables',
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search Example',
          }}
        />
        <Stack.Screen
          name="Header"
          component={HeaderScreen}
          options={{
            title: 'App Header',
          }}
        />
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
