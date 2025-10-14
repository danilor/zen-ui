import IntroExample from '../examples/IntroExample';
import { Layout, Screen, ZenButton, ZenText } from 'zen-ui';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

export default function TextScreen() {
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

        </Layout>
      </Screen>
    </>
  );
}
