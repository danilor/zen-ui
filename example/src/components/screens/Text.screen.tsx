
import { Layout, Screen, ZenInput, ZenText } from 'react-zen-ui';
import { useState } from 'react';


export default function TextScreen() {
  const [textValue, setTextValue] = useState('Welcome to ZenUI');

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText fill={true} paragraph={true}>
            Text elements are used to display written content in your
            application. They can be styled in various ways to enhance
            readability and visual appeal, such as adjusting font size, weight,
            color, and alignment. Text elements are essential for conveying
            information, instructions, and messages to users.
          </ZenText>

          <ZenInput
            label={'Example Input not being affected by Text styles'}
            onChangeText={(t: string) => setTextValue(t)}
            value={textValue}
            autoComplete={'off'}
            placeholder={'The text does not affect the input style'}
            autoCapitalize={'none'}
            secureTextEntry={false}
            multiline={false}
          />

          <ZenText fill={true} paragraph={true} align={'left'}>
            They can be left aligned
          </ZenText>
          <ZenText fill={true} paragraph={true} align={'center'}>
            They can be center aligned
          </ZenText>
          <ZenText fill={true} paragraph={true} align={'right'}>
            They can be right aligned
          </ZenText>
          <ZenText fill={true} paragraph={true} align={'justify'}>
            They can be justified, meaning that the text will be aligned to
            both the left and right margins, creating a clean and polished look.
            Justified text is often used in newspapers, magazines, and books to
            give a more formal appearance to the content. However, it's
            important to use justified text judiciously, as it can sometimes
            create uneven spacing between words and make the text harder to
            read.
          </ZenText>
          <ZenText fill={true} paragraph={true} align={'justify'}>
            Example of types of ZenText (default is 'p'):
          </ZenText>

          <ZenText type={'h1'} fill={true} paragraph={true} align={'left'}>
            h1
          </ZenText>
          <ZenText type={'h2'} fill={true} paragraph={true} align={'left'}>
            h2
          </ZenText>
          <ZenText type={'h3'} fill={true} paragraph={true} align={'left'}>
            h3
          </ZenText>
          <ZenText type={'h4'} fill={true} paragraph={true} align={'left'}>
            h4
          </ZenText>
          <ZenText type={'h5'} fill={true} paragraph={true} align={'left'}>
            h5
          </ZenText>
          <ZenText type={'h6'} fill={true} paragraph={true} align={'left'}>
            h6
          </ZenText>
          <ZenText type={'p'} fill={true} paragraph={true} align={'left'}>
            p
          </ZenText>
          <ZenText type={'s1'} fill={true} paragraph={true} align={'left'}>
            s1
          </ZenText>
          <ZenText type={'s2'} fill={true} paragraph={true} align={'left'}>
            s2
          </ZenText>
          <ZenText type={'label'} fill={true} paragraph={true} align={'left'}>
            label
          </ZenText>

        </Layout>
      </Screen>
    </>
  );
}
