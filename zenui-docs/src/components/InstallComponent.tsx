import CodeExample from './common/CodeExample.tsx';

export default function InstallComponent() {

  return (
    <section id="intro" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>Installation</h2>
        </header>
        <section>
          <p className={'justify'}>
            Zen UI is intended to be simple to install and use. It should work
            with most React Native frameworks and setups.
          </p>
          <p className={'justify'}>
            To start using Zen UI, you can install it via npm or yarn:
          </p>
          <CodeExample type={'bash'}>npm install react-zen-ui</CodeExample>
          <p className={'justify'}>Or with yarn:</p>
          <CodeExample type={'bash'}>yarn add react-zen-ui</CodeExample>
          <p className={'justify'}>
            To start using ZEN UI components in your React Native project, first
            you need to enclose your app with the ZenThemeProvider component.
            This component provides the necessary context for theming and
            styling. Additionally to this, you need to pass the theme object to
            the ZenThemeProvider. You can use the default theme provided by ZEN
            UI or create your own custom theme.
          </p>
          <CodeExample>
            {"import { ZenDark, ZenThemeProvider } from 'react-zen-ui';\n" +
              '\n' +
              'export default function App() {\n' +
              '  return (\n' +
              '    <ZenThemeProvider theme={ZenDark}>\n' +
              '      {/* Your app code here */}\n' +
              '    </ZenThemeProvider>\n' +
              '  );\n' +
              '}'}
          </CodeExample>
          <p className={'justify'}>
            After wrapping your app with the ZenThemeProvider, you can start
            using ZEN UI components. Additionally, you can customize the theme
            by modifying the theme object or creating your own theme from
            scratch. ZenUI provides 2 built-in themes: ZenLight and ZenDark,
            which you can use as a base for your custom themes. You can also
            implement an storage solution to persist the user's theme preference
            across app sessions, such as
            <a href={'https://github.com/pmndrs/zustand'} target={'_blank'}>
              Zustand
            </a>{' '}
            or other state management libraries.
          </p>
          <CodeExample>
            {'export default function App() {\n' +
              '  const theme = useThemeStorage((state: any) => state.theme);\n' +
              "  const usingTheme = theme === 'dark' ? ZenDark : ZenLight;\n" +
              '  return (\n' +
              '    <ZenThemeProvider theme={usingTheme}>\n' +
              '      <NavigationContainer>\n' +
              '        <RootStack />\n' +
              '      </NavigationContainer>\n' +
              '    </ZenThemeProvider>\n' +
              '  );\n' +
              '}'}
          </CodeExample>
        </section>
      </div>
    </section>
  );
}
