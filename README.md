<div align="center">
  <h1>Zen UI</h1>
  <p>A simple React Native UI Library</p>
  <a href="https://danilor.github.io/zenui-docs" target="_blank">Documentation</a> | <a href="https://danilor.github.io/arkhive_hub" target="_blank"><strong>Arkhive</strong> hub</a>
</div>

![ZEN UI Logo, made with AI](readme/banner.png)

A React Native component library with a focus on simplicity and ease of use. ZEN UI was built upon
the idea of providing a set of essential components that can be easily integrated into any React Native application
and customized to fit the specific needs of the project; but keeping the number of external dependencies to a minimum.

Inspired by libraries like [React Native Paper](https://callstack.github.io/react-native-paper/)
and [UI KItten](https://akveo.github.io/react-native-ui-kitten), ZEN UI
doesn't aim to be a comprehensive solution for all UI needs, but rather a starting point for developers looking for a
simple and effective way to build their applications.

[![React Native](https://img.shields.io/badge/react--native-0.71.0+-blue.svg)](https://reactnative.dev/)
[![Node Version](https://img.shields.io/badge/Node_Version-24.10.0-blue.svg)](https://reactnative.dev/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Language](https://img.shields.io/badge/language-typescript-brightgreen.svg)](https://standardjs.com)

[![npm version](https://badge.fury.io/js/react-zen-ui.svg)](https://badge.fury.io/js/react-zen-ui)
[![Downloads](https://img.shields.io/npm/dm/react-zen-ui.svg)](https://www.npmjs.com/package/react-zen-ui)
[![License](https://img.shields.io/npm/l/react-zen-ui.svg)](https://opensource.org/license/mit)

## Key Features

- **Lightweight**: Minimal dependencies to keep your app size small.
- **Customizable**: Easily theme and style components to match your app's design.
- **Essential Components**: A curated set of components that cover common UI needs.
- **TypeScript Support**: Built with TypeScript for better developer experience and type safety.
- **No Native Dependencies**: Pure JavaScript implementation, no need for linking native modules.
- **No Expo Dependencies**: Can be used in both Expo and non-Expo React Native projects without any issues.

## Manual Installation

To install ZEN UI, simply use npm or yarn:

```sh
npm install react-zen-ui
```

## Usage

To start using ZEN UI components in your React Native project, first you need to enclose your app with the
`ZenThemeProvider` component. This component provides the necessary context for theming and styling. Additionally to
this, you need to pass the theme object to the `ZenThemeProvider`. You can use the default theme provided by ZEN UI or
create your own
custom theme.

```tsx
import { ZenDark, ZenThemeProvider } from 'react-zen-ui';

export default function App() {
  return (
    <ZenThemeProvider theme={ZenDark}>
      {/* Your app code here */}
    </ZenThemeProvider>
  );
}
```

After wrapping your app with the `ZenThemeProvider`, you can start using ZEN UI components. For example, to use a
button:

```tsx
import { ZenButton } from 'react-zen-ui';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <ZenButton onPress={() => alert('Button pressed!')}>Press me</ZenButton>
    </View>
  );
}
```

## Theming

ZEN UI comes with two pre-defined themes: `ZenLight` and `ZenDark`. You can use these themes directly or customize them
to fit your application's design.


```tsx
import { ZenDark, ZenThemeProvider } from 'react-zen-ui';

export default function App() {

  const customTheme = {
    ...ZenDark,
    primary: '#ff6347', // Custom primary color
    secondary: '#4caf50', // Custom secondary color
    text: '#ffffff', // Custom text color
    background: '#1e1e1e', // Custom background color
    // other colors could be success, warning, info, danger and all its variants from 1 to 50
    // for example success-dark-1, success-dark-2, success-light-1, success-light-2, etc.
    // The greater the number, the darker or lighter the color will be.
  };

  return (
    <ZenThemeProvider theme={customTheme}>
      {/* Your app code here */}
    </ZenThemeProvider>
  );
}
```

And with this, you can access the useTheme() method that will return the current theme object for
all components within the `ZenThemeProvider`.

```tsx
import { useTheme } from 'react-zen-ui';
import { View, Text } from 'react-native';
import { ZenButton } from 'react-zen-ui';

export default function ThemedComponent() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ color: theme.text, marginBottom: 10 }}>
        This is a themed component!
      </Text>
      <ZenButton onPress={() => alert('Themed Button pressed!')}>
        Themed Button
      </ZenButton>
    </View>
  );
}
```

## Documentation

You can read more about this library, check examples, and get more information on our [Documentation](https://danilor.github.io/zenui-docs) site.

## License

ZEN UI is open source software licensed under the [MIT license](LICENSE).
