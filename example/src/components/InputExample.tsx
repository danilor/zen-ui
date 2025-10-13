import { ZenButton, ZenInput, ZenText } from 'zen-ui';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
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

export default function InputExample(){

  const [leftAccessory, setLeftAccessory] = useState<boolean>(true);
  const [rightAccessory, setRightAccessory] = useState<boolean>(true);
  const [textValue, setTextValue] = useState('Welcome to ZenUI');
  const [textareaValue, setTextareaValue] = useState('This is a multiline textarea. You can write as much as you want here. It will adapt to the content and the theme.');

  return (
    <>
      <ZenText type={'h4'} paragraph={true} align={'left'}>
        Input
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        The Input component is a styled TextInput that will adapt to the
        current theme. It supports left and right icons, as well as left and
        right accessories.
      </ZenText>

      <ZenInput
        leftIcon={leftAccessory ? 'user-circle' : undefined}
        rightIcon={rightAccessory ? 'check-circle' : undefined}
        label={'Single Input'}
        onChangeText={(t: string) => setTextValue(t)}
        value={textValue}
        autoComplete={'off'}
        autoCapitalize={'none'}
        multiline={false}
      />

      <ZenInput
        leftIcon={leftAccessory ? 'user-circle' : undefined}
        rightIcon={rightAccessory ? 'check-circle' : undefined}
        label={'Multiline Textarea'}
        onChangeText={(t: string) => setTextareaValue(t)}
        value={textareaValue}
        autoComplete={'off'}
        autoCapitalize={'none'}
        multiline={true}
      />
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
    </>

);
}
