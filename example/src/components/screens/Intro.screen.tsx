import IntroExample from '../examples/IntroExample';
import { Layout, Screen, ZenButton, ZenDivider } from 'react-zen-ui';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';


export default function IntroScreen() {

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    buttons: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 15, marginBottom: 15, marginTop: 0}
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <IntroExample />
          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'App Header'} fill={false} pressAction={ ()=> { navigation.navigate('Header' as never) }} />
            <ZenButton type={'primary'} title={'Drawer'} fill={false} pressAction={ ()=> { navigation.navigate('Drawer' as never) }} />
          </View>
          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'Buttons'} fill={false} pressAction={ ()=> { navigation.navigate('Buttons' as never) }} />
            <ZenButton type={'primary'} title={'Icon Buttons'} fill={false} pressAction={ ()=> { navigation.navigate('IconButtons' as never) }} />
          </View>
          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'Text'} fill={false} pressAction={ ()=> { navigation.navigate('Text' as never) }} />
            <ZenButton type={'primary'} title={'Icons'} fill={false} pressAction={ ()=> { navigation.navigate('Icons' as never) }} />
          </View>

          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'Search'} fill={false} pressAction={ ()=> { navigation.navigate('Search' as never) }} />
            <ZenButton type={'primary'} title={'Input'} fill={false} pressAction={ ()=> { navigation.navigate('Input' as never) }} />
          </View>
          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'Loading'} fill={false} pressAction={ ()=> { navigation.navigate('Loading' as never) }} />
            <ZenButton type={'primary'} title={'Tables'} fill={false} pressAction={ ()=> { navigation.navigate('Tables' as never) }} />
          </View>
          <View style={styles.buttons}>
            <ZenButton type={'primary'} title={'Form'} fill={false} pressAction={ ()=> { navigation.navigate('Form' as never) }} />
            <ZenButton type={'primary'} title={'Divider'} fill={false} pressAction={ ()=> { navigation.navigate('Divider' as never) }} />
          </View>

          <ZenDivider type={'primary'} />
          <ZenDivider type={'secondary'} />
          <ZenDivider type={'warning'} />
          <ZenDivider type={'info'} />
          <ZenDivider type={'danger'} />
        </Layout>
      </Screen>
    </>
  );
}
