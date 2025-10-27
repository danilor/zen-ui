import { View, StyleSheet } from 'react-native';
import LayoutConfig from '../../config/LayoutConfig';
import ZenIconButton from '../themed/ZenIconButton';
import LayersConfig from '../../config/Layers.config';


/**
 * @docunator
 * @title ZenFloatingIconsType
 * @description Props for the ZenFloatingIcons component
 * @category Navigation Components Props
 */
type ZenFloatingIconsType = {
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'center';
  buttons?: {
    icon: string;
    type: 'primary' | 'secondary' | 'warning' | 'danger' | 'info';
    onPress?: () => void;
  }[];
};

/**
 * @docunator
 * @title ZenFloatingIcons
 * @description A set of floating icon buttons that can be positioned at the bottom of the screen
 * @category Navigation Components
 * @author Danilo Ramírez Mattey
 * @version 1.0.0

 * @see Screen
 * @see Layout
 * @example {tsx}
import { ZenDark, ZenThemeProvider, ZenFloatingIcons } from 'react-zen-ui';

export default function App() {

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
        showBackButton={props.navigation.canGoBack()}
        title={props.options.title as string}
        goBack={()=>{ props.navigation.goBack(); }}
        {...props}
      />
    );

    return (
         <ZenThemeProvider theme={ZenDark}>
            <ZenFloatingIcons buttons={menuButtons} size={'large'} />
            <Stack.Navigator
              screenOptions={{
                animation: 'default',
                headerShown: true,
                header: headerComponent,
             }}
            >
              // OTHER STACK SCREEN ELEMENTS AND COMPONENTS HERE
           </Stack.Navigator>

         </ZenThemeProvider>
     );
   }
    {/tsx}
 * @link https://reactnavigation.org/
 * @see ZenHeader
 * @param {number} size - The size of the buttons (small, medium, large)
 * @param {string} position - The position of the buttons (left, right, center)
 * @param {Object} buttons - An array of button objects with icon, type and onPress function

 */
export default function ZenFloatingIcons({
  size = 'medium',
  position = 'center',
  buttons = [],
}: ZenFloatingIconsType) {
  // console.log('Buttons', buttons, 'Size', size, 'Position', position);

  // const theme = useTheme();

  let height = 50;
  if (size === 'small') {
    height = 40;
  } else if (size === 'large') {
    height = 60;
  }

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'red',
      position: 'absolute',
      bottom: 20,
      right: 0,
      left: 0,
      height: height,
      width: '100%',
      zIndex: LayersConfig.floatingIcons,
      justifyContent:
        position === 'left'
          ? 'flex-start'
          : position === 'right'
            ? 'flex-end'
            : 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: LayoutConfig.space,
      paddingRight: LayoutConfig.space,
      gap: LayoutConfig.space,
    },
  });
  return (
    <View style={styles.container}>
      {buttons.map((button, index: number) => (
        <ZenIconButton
          key={'floating_icon_button_' + index}
          icon={button.icon}
          type={button.type}
          onPress={button.onPress}
          size={size}
        />
      ))}
    </View>
  );
}
