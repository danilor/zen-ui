import {
  Card, CardFooter,
  Layout,
  Screen,
  ZenButton,
  ZenIcon,
  ZenText,
} from 'react-zen-ui';
import { useState } from 'react';
import { Image, View } from 'react-native';



export default function CardsScreen() {

  const [themed, setThemed] = useState<'primary'|'secondary'|'success'|'danger'|'warning'|'info'>('primary');

  const changeThemed = () => {
    if(themed === 'primary'){
      setThemed('secondary');
    } else if(themed === 'secondary'){
      setThemed('success');
    } else if(themed === 'success'){
      setThemed('danger');
    } else if(themed === 'danger'){
      setThemed('warning');
    } else if(themed === 'warning'){
      setThemed('info');
    } else {
      setThemed('primary');
    }
  }

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <Card type={'primary'} title={'What is a Card?'} headerLeftAccessory={<ZenIcon name={'archive'} />}>
            <ZenText align={'justify'}>
              Cards are used to group related information together in a visually
              distinct container. They often include padding, borders, and
              shadows to separate them from the surrounding content. Cards can
              contain various types of content, such as text, images, buttons,
              and other UI elements, making them versatile components for
              organizing information in a user interface. It also supports accessories to the left and right of the title
              as well as different configurations based on the defined theme types.
            </ZenText>
          </Card>

          <Card type={themed} title={'Dynamic Card'}
                headerRightAccessory={<ZenButton onPress={changeThemed} type={'primary'} title={'Switch'} fill={false}  />}
                footer={
                <CardFooter type={themed}>
                  <View style={{justifyContent:'flex-end', alignItems:'center', flexDirection:'row', gap: 10}}>
                    <ZenButton type={themed} title={'I am here!'} fill={false} />
                    <ZenButton type={themed} title={'Click me!'} fill={false} />
                  </View>
                </CardFooter>}
          >
            <ZenText align={'justify'}>
              You can pass dynamic components as accessories to the Card header, such as buttons or icons,
              allowing for interactive elements that enhance user engagement and functionality. Current theme type is "{themed}".
              Also, you can pass a Element/Component as footer parameter (we recommend using the CardFooter component for that) to add custom footer elements to the Card.
            </ZenText>
          </Card>

          <Card  title={'Card without a type'}>
          <ZenText align={'justify'}>
            If you don't specify a type for the Card component, it will use the default
            styling defined in the theme. This allows for a neutral appearance that can
            blend seamlessly with various design contexts. It will also omit the colored
            divider that is typically associated with specific types.
          </ZenText>
        </Card>

          <Card type={'primary'}>
            <ZenText align={'justify'}>
              Cards can also be titleless, focusing solely on the content within. This is useful
              when the context is clear, and a title is unnecessary.
            </ZenText>
          </Card>

          <Card  title={'Custom Background'} backColor={'lightblue'}>
            <ZenText align={'justify'}>
              You can also overwrite the background color of the card by passing a custom color
              to the "backColor" prop. This allows for greater flexibility in design and can help
              the card stand out or blend in as needed.
            </ZenText>
          </Card>


          <Card header={<View style={{justifyContent:'center', alignItems:'center'}}><Image source={require('./../../../assets/logo.png')} style={{flex: 1, flexDirection:'row', aspectRatio: 1}} /></View>}>
            <ZenText align={'justify'}>
              You can completely overwrite the header of the Card by passing a custom component
              to the "header" prop. This allows for maximum customization and the ability to
              include any elements or styles you desire in the header section.
            </ZenText>
          </Card>


        </Layout>
      </Screen>
    </>
  );
}
