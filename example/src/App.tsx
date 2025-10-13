import { StyleSheet, View } from 'react-native';
import {
  Screen,
  ZenDark,
  ZenIcon,
  ZenText,
  ZenInput,
  ZenThemeProvider,
  ZenButton,
  Layout
} from 'zen-ui';
import { useState } from 'react';

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default function App() {
  // console.log('App Rendered',ZenDark);

  const [textValue, setTextValue] = useState('Welcome to ZenUI');

  const [leftAccessory, setLeftAccessory] = useState<boolean>(true);
  const [rightAccessory, setRightAccessory] = useState<boolean>(true);

  return (
    <ZenThemeProvider theme={ZenDark}>
      <Screen>
        <Layout scrollable={true}>
          <View style={styles.container}>
            <ZenText type={'h1'} paragraph={true} align={'left'}>
              ZenUI
            </ZenText>
            <ZenText type={'p'} paragraph={true} align={'left'}>
              ZenUI was made having simplicity in mind. No extra libraries, no
              extra requirements; just a plug and play library for your projects
              with enough flexibility to suit your needs.
            </ZenText>

            <ZenText type={'h2'} paragraph={true} align={'left'}>
              Components
            </ZenText>

            <ZenText type={'h4'} paragraph={true} align={'left'}>
              Input
            </ZenText>

            <ZenText type={'p'} paragraph={true} align={'left'}>
              The Input component is a styled TextInput that will adapt to the
              current theme. It supports left and right icons, as well as left and
              right accessories.
            </ZenText>

            <ZenInput
              leftIcon={leftAccessory ? 'user-circle' : undefined}
              rightIcon={rightAccessory ? 'check-circle' : undefined}
              label={'Type here'}
              onChangeText={(t: string) => setTextValue(t)}
              value={textValue}
              autoComplete={'off'}
              autoCapitalize={'none'}
            />

            <ZenText type={'h4'} paragraph={true} align={'left'}>
              Buttons
            </ZenText>

            <ZenText type={'p'} paragraph={true} align={'left'}>
              Buttons are used to trigger actions. They can be primary or
              secondary (type). They will automatically adapt to the current theme
              and the text color will be selected accordingly depending on the
              brightness of the button color. This can be overwritten by passing a
              textColor prop. This is not extending the default Button component
              from React Native, so you cannot use any default button props here.
            </ZenText>
            <View style={styles.buttonsContainer}>
              <ZenButton
                type={'primary'}
                fill={false}
                title={'Toggle Left'}
                leftIcon={'arrow-left-circle'}
                pressAction={() => setLeftAccessory(!leftAccessory)}
              />
              <ZenButton
                type={'primary'}
                fill={false}
                rightIcon={'arrow-right-circle'}
                title={'Toggle Right'}
                pressAction={() => setRightAccessory(!rightAccessory)}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <ZenButton
                type={'secondary'}
                fill={false}
                rightIcon={'bonfire'}
                title={'Secondary'}

              />
              <ZenButton
                type={'success'}
                fill={false}
                leftIcon={'activity'}
                title={'Success'}

              />
            </View>
            <View style={styles.buttonsContainer}>
              <ZenButton
                type={'info'}
                fill={false}
                rightIcon={'color-wheel'}
                title={'Info'}

              />
              <ZenButton
                type={'warning'}
                fill={false}
                leftIcon={'download-square'}
                title={'Warning'}

              />
            </View>
            <View style={styles.buttonsContainer}>
              <ZenButton
                type={'secondary'}
                fill={false}
                rightIcon={'download-square'}
                title={'Custom color'}
                textColor={'#E91E63'}

              />
              <ZenButton
                type={'secondary'}
                fill={false}
                leftIcon={'cash'}
                title={'Another color'}
                textColor={'#4CAF50'}

              />
            </View>

            <ZenIcon key={'testIcon'} name={'hexagon-dice'} />
          </View>
        </Layout>
      </Screen>
    </ZenThemeProvider>
  );
}
