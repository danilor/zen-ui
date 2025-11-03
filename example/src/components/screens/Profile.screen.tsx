import {
  Layout,
  Screen,
  ZenButton,
  ZenIcon,
  ZenIconButton,
  ZenSpaceBlock,
} from 'react-zen-ui';
import { ZenProfile } from 'react-zen-ui';
import { StyleSheet, View } from 'react-native';

export default function ProfileScreen() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenProfile
            bannerImageSource={{
              uri: 'https://picsum.photos/1000?' + Math.random().toString(36),
            }}
            avatarImageSource={{
              uri: 'https://picsum.photos/id/237/500/500',
            }}
            title={'Lucky Dog'.toUpperCase()}
            subTitleElement={
              <View style={styles.container}>
                <ZenIcon name={'star'} color={'yellow'} />
                <ZenIcon name={'star'} color={'yellow'} />
                <ZenIcon name={'star'} color={'yellow'} />
                <ZenIcon name={'star'} color={'yellow'} />
                <ZenIcon name={'star'} />
              </View>
            }
            description={
              'A friendly dog who loves to play and cuddle with everyone he meets. He is always up for an adventure and enjoys exploring new places.'
            }
            footer={
              <View style={styles.container}>
                <ZenIconButton icon={'facebook'} onPress={() => null} />
              </View>
            }
          />
          <ZenSpaceBlock />
          <ZenProfile
            type={'success'}
            bannerImageSource={{
              uri: 'https://picsum.photos/1000?' + Math.random().toString(36),
            }}
            avatarImageSource={{
              uri: 'https://images.unsplash.com/photo-1741732311355-808c468deb4e',
            }}
            title={'John Doe'.toUpperCase()}
            subTitleElement={
              <View style={styles.container}>
                <ZenIcon name={'boxing-glove'} color={'yellow'} />
                <ZenIcon name={'boxing-glove'} color={'yellow'} />
                <ZenIcon name={'boxing-glove'} color={'yellow'} />
                <ZenIcon name={'boxing-glove'} />
                <ZenIcon name={'boxing-glove'} />
              </View>
            }
            description={
              'An avid boxer and fitness enthusiast, John has won numerous championships and is known for his dedication and discipline in the sport.'
            }
            footer={
              <View style={styles.container}>
                <ZenIconButton
                  type={'success'}
                  icon={'profile-circle'}
                  onPress={() => null}
                />
                <ZenIconButton
                  type={'success'}
                  icon={'facebook'}
                  onPress={() => null}
                />
                <ZenIconButton
                  type={'success'}
                  icon={'twitter'}
                  onPress={() => null}
                />
              </View>
            }
          />
          <ZenSpaceBlock />
          <ZenProfile
            type={'warning'}
            bannerImageSource={{
              uri: 'https://picsum.photos/1000?' + Math.random().toString(36),
            }}
            avatarImageSource={{
              uri: 'https://images.unsplash.com/photo-1761405378790-684eceaad81c',
            }}
            title={'Melissa Valkren'.toUpperCase()}
            description={
              'A talented artist and painter, Melissa has exhibited her work in galleries around the world and is known for her vibrant use of color and unique style.'
            }
            footer={
              <View style={styles.container}>
                <ZenButton
                  type={'warning'}
                  title={'Check me out'}
                  fill={false}
                  leftIcon={'camera'}
                />
              </View>
            }
          />
          <ZenSpaceBlock />
        </Layout>
      </Screen>
    </>
  );
}
