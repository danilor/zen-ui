import { Layout, Screen, ZenSpaceBlock, ZenSpotlight } from 'react-zen-ui';
import {View} from 'react-native';

export default function SpotlightScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenSpotlight footerText={'This image was taken from Picsum'} imageSource={{uri:'https://picsum.photos/300?random'}} bordered={true} borderRounded={true} />

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <ZenSpotlight style={{width: '48%'}}  type={'success'} imageSource={{uri:'https://picsum.photos/300?random2'}} bordered={true} borderRounded={true} />
            <ZenSpotlight style={{width: '48%'}}  type={'info'} imageSource={{uri:'https://picsum.photos/300?random2'}} bordered={true} borderRounded={true} />
          </View>

          <ZenSpotlight footerText={'This image was taken from Picsum'} type={'warning'} imageSource={{uri:'https://picsum.photos/300?random2'}} bordered={true} borderRounded={true} />

        </Layout>
      </Screen>
    </>
  );
}

