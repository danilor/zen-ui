import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {
  ZenDark,
  ZenDrawer,
  ZenDrawerItem,
  ZenHeader,
  ZenLight,
  ZenThemeProvider,
  ZenDrawerTitle,
  ZenFloatingIcons,
} from 'react-zen-ui';
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
import DrawerScreen from './components/screens/Drawer.screen';
import IconButtonsScreen from './components/screens/IconButtons.screen';
import DividerScreen from './components/screens/Divider.screen';
import FormScreen from './components/screens/Form.screen';
import FloatingIconsScreen from './components/screens/FloatingIcons.screen';
import CardsScreen from './components/screens/Cards.screen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const navigation = useNavigation();

  const image = require('../assets/logo.png');

  const DrawerItems = [
    <ZenDrawerTitle title={'Main Menu'} key={'title'} />,
    <ZenDrawerItem
      label={'Home'}
      key={'home'}
      leftIcon={'home'}
      onPress={() => navigation.navigate('Home' as never)}
    />,
    <ZenDrawerItem
      label={'Theme'}
      key={'theme'}
      leftIcon={'settings'}
      onPress={() => navigation.navigate('Theme' as never)}
    />,
    <ZenDrawerItem
      label={'Drawer'}
      key={'drawer'}
      leftIcon={'settings'}
      onPress={() => navigation.navigate('Drawer' as never)}
    />,
    <ZenDrawerTitle title={'Example elements'} key={'example_elements'} />,
    <ZenDrawerItem
      label={'Example Car'}
      key={'example'}
      leftIcon={'car'}
      rightIcon={'truck'}
    />,
    <ZenDrawerItem
      label={'Dimensional'}
      key={'dimensional'}
      leftIcon={'clock'}
    />,
  ];

  const menuButtons: any[] = [
    {
      icon: 'home',
      type: 'primary',
      onPress: () => navigation.navigate('Home' as never),
    },
    {
      icon: 'settings',
      type: 'secondary',
      onPress: () => navigation.navigate('Theme' as never),
    },
    {
      icon: 'apple',
      type: 'success',
      onPress: () => navigation.navigate('FloatingIcons' as never),
    },
  ];

  const headerComponent = (props: NativeStackHeaderProps) => (
    <ZenHeader
      automaticDrawerIcon={'menu'}
      // rightIcon={'menu'}
      // onRightIconPress={() => {
      //   return null;
      // }}
      {...props}
    />
  );


  return (
    <>
      <ZenFloatingIcons buttons={menuButtons} size={'large'} />

      <ZenDrawer
        headerImage={image}
        headerImageSize={275}
        items={DrawerItems}
      />
      <Stack.Navigator
        screenOptions={{
          animation: 'default',
          headerShown: true,
          header: headerComponent,
        }}
      >

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
          name="Drawer"
          component={DrawerScreen}
          options={{
            title: 'Drawer',
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
          name="IconButtons"
          component={IconButtonsScreen}
          options={{
            title: 'Icon Buttons',
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
        <Stack.Screen
          name="Divider"
          component={DividerScreen}
          options={{
            title: 'Divider',
          }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{
            title: 'Form Components',
          }}
        />
        <Stack.Screen
          name="FloatingIcons"
          component={FloatingIconsScreen}
          options={{
            title: 'Floating Icons',
          }}
        />
        <Stack.Screen
          name="Cards"
          component={CardsScreen}
          options={{
            title: 'Cards',
          }}
        />
      </Stack.Navigator>

    </>
  );
}

export default function App() {
  const theme = useThemeStorage((state: any) => state.theme);
  const usingTheme = theme === 'dark' ? ZenDark : ZenLight;
  return (
    <ZenThemeProvider theme={usingTheme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ZenThemeProvider>
  );
}
