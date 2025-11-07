import { Card, Layout, Screen, ZenButton, ZenIcon, ZenSpaceBlock, ZenText } from 'react-zen-ui';
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
          <ZenText type={'h1'} paragraph={true} align={'center'}>
            Zen UI
          </ZenText>
          <ZenText type={'p'} paragraph={true} align={'left'}>
            ZenUI was made having simplicity in mind. No extra libraries, no
            extra requirements; just a plug and play library for your projects
            with enough flexibility to suit your needs.
          </ZenText>

          <Card title={'Theme components'} type={'success'} headerRightAccessory={<ZenIcon name={'design-nib'} />}>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Buttons'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Buttons' as never);
                }}
              />
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
            </View>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Icons'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Icons' as never);
                }}
              />
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
            </View>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Divider'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Divider' as never);
                }}
              />
              <ZenButton
                type={'primary'}
                title={'Chips'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Chips' as never);
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
            </View>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Loading'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Loading' as never);
                }}
              />
            </View>

          </Card>

          <Card title={'Layout and Structure'} type={'success'} headerRightAccessory={<ZenIcon name={'layout-left'} />}>
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
                title={'Tables'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Tables' as never);
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
            </View>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Cards'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Cards' as never);
                }}
              />
            </View>
          </Card>

          <Card title={'Widgets'} type={'success'} headerRightAccessory={<ZenIcon name={'flare'} />}>
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
            </View>
            <View style={styles.buttons}>

              <ZenButton
                type={'primary'}
                title={'Play'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Play' as never);
                }}
              />
              <ZenButton
                type={'primary'}
                title={'Slider'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Slider' as never);
                }}
              />
            </View>
          </Card>

          <Card title={'Other'} type={'success'} headerRightAccessory={<ZenIcon name={'learning'} />}>
            <View style={styles.buttons}>
              <ZenButton
                type={'primary'}
                title={'Toast'}
                fill={true}
                pressAction={() => {
                  navigation.navigate('Toast' as never);
                }}
              />
            </View>
          </Card>


          <ZenSpaceBlock factor={2} />
        </Layout>
      </Screen>
    </>
  );
}
