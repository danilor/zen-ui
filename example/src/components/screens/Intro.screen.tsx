import IntroExample from '../examples/IntroExample';
import { Layout, Screen, ZenButton } from 'react-zen-ui';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';


export default function IntroScreen() {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    buttons: {
      // display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 15,
      marginBottom: 15,
      marginTop: 0,
    },
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <IntroExample />



          <View style={styles.buttons}>
            <ZenButton
              type={'primary'}
              title={'App Header'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Header' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Drawer'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Drawer' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Buttons'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Buttons' as never);
              }}
            />
          </View>

          <View style={styles.buttons}>
            <ZenButton
              type={'primary'}
              title={'Icon Buttons'}
              fill={true}
              pressAction={() => {
                navigation.navigate('IconButtons' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Text'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Text' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Icons'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Icons' as never);
              }}
            />
          </View>

          <View style={styles.buttons}>
            <ZenButton
              type={'primary'}
              title={'Search'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Search' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Input'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Input' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Loading'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Loading' as never);
              }}
            />
          </View>

          <View style={styles.buttons}>
            <ZenButton
              type={'primary'}
              title={'Tables'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Tables' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Form'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Form' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Divider'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Divider' as never);
              }}
            />
          </View>
          <View style={styles.buttons}>
            <ZenButton
              type={'primary'}
              title={'Floating Icons'}
              fill={true}
              pressAction={() => {
                navigation.navigate('FloatingIcons' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Cards'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Cards' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'List Items'}
              fill={true}
              pressAction={() => {
                navigation.navigate('List' as never);
              }}
            />
          </View>
          <View style={styles.buttons}>

            <ZenButton
              type={'primary'}
              title={'Spotlight'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Spotlight' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Profile'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Profile' as never);
              }}
            />
            <ZenButton
              type={'primary'}
              title={'Play'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Play' as never);
              }}
            />

          </View>
          <View style={styles.buttons}>

            <ZenButton
              type={'primary'}
              title={'Slider'}
              fill={true}
              pressAction={() => {
                navigation.navigate('Slider' as never);
              }}
            />

          </View>
        </Layout>
      </Screen>
    </>
  );
}
