import {  Layout, Screen, ZenText, ZenDivider } from 'react-zen-ui';


export default function DividerScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
         <ZenText type={'p'} paragraph={true} align={'justify'}>
           Sometimes you just need a divider for your content. Here are some
           examples of how to use the ZenDivider component in different styles
           and types.

         </ZenText>

          <ZenDivider type={'primary'} />

          <ZenText type={'h6'} paragraph={true} align={'justify'}>
            Another text divided from the one above
          </ZenText>
          <ZenDivider type={'secondary'} />
          <ZenText type={'h5'} paragraph={true} align={'justify'}>
            Another text
          </ZenText>
          <ZenDivider type={'danger'} />
          <ZenText type={'h4'} paragraph={true} align={'justify'}>
            Another text
          </ZenText>
          <ZenDivider type={'warning'} />
          <ZenText type={'h3'} paragraph={true} align={'justify'}>
            Another text
          </ZenText>
          <ZenDivider type={'info'} />
          <ZenText type={'h2'} paragraph={true} align={'justify'}>
            Another text
          </ZenText>
        </Layout>
      </Screen>
    </>
  );
}
