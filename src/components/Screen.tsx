import { ZenThemeProvider } from '../provider/ZenThemeProvider';
import ZenLight from '../theme/ZenLight';
import type { ThemeModel } from '../models/ThemeModel';
import { Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

type ScreenProps={
  children?: any,
  theme?: ThemeModel
}

export default function Screen(
  {children, theme}:ScreenProps
){

  const ZenTheme = useTheme();

  return(

      <ZenThemeProvider theme={theme ?? ZenLight}>
        <Text>Test</Text>
        <Text>{ ZenTheme.text }</Text>
        {children}
      </ZenThemeProvider>

  );
}
