import { Layout, Screen, ZenSpaceBlock, ZenSpotlight } from 'react-zen-ui';
import {View} from 'react-native';

export default function SpotlightScreen() {



  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenSpotlight footerText={'This image was taken from Picsum'} imageSource={{uri:'https://picsum.photos/300?random' + Math.random().toString()}} bordered={true} borderRounded={true} />

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <ZenSpotlight title={'Small image'} titleType={'s1'} titleBackground={true} style={{width: '48%'}} iconName={'arrow-archery'}  type={'success'} imageSource={{uri:'https://picsum.photos/300?random' + Math.random().toString()}} bordered={true} borderRounded={true} />
            <ZenSpotlight style={{width: '48%'}} iconName={'send-diagonal'}  type={'info'} imageSource={{uri:'https://picsum.photos/300?random' + Math.random().toString()}} bordered={true} borderRounded={true} />
          </View>

          <ZenSpotlight title={'Look at this image!'} iconName={'arrow-up-tag'} footerText={'This image was taken from Picsum'} type={'warning'} imageSource={{uri:'https://picsum.photos/300?random' +  Math.random().toString()}} bordered={true} borderRounded={true} />

          <ZenSpotlight title={'Title with background'} titleBackground={true} iconName={'arrow-up-tag'} footerText={'This image was taken from Picsum'} type={'success'} imageSource={{uri:'https://picsum.photos/300?random' + Math.random().toString()}} bordered={true} borderRounded={true} />

        </Layout>
      </Screen>
    </>
  );
}

