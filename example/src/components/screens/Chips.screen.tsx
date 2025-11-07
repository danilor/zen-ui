import { Layout, Screen, ZenChip, ZenSpaceBlock } from 'react-zen-ui';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ChipsScreen() {
  const [ghosted, setGhosted] = useState<boolean>(false);

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <View style={styles.chipsContainer}>
            <ZenChip type={'primary'} text={'Primary'} />
            <ZenChip type={'warning'} text={'Warning'} />
            <ZenChip type={'success'} text={'Success'} />
            <ZenChip type={'info'} text={'Info'} />
            <ZenChip type={'danger'} text={'Danger'} />
          </View>
          <View style={styles.chipsContainer}>
            <ZenChip ghost={true} type={'primary'} text={'Primary'} />
            <ZenChip ghost={true} type={'warning'} text={'Warning'} />
            <ZenChip ghost={true} type={'success'} text={'Success'} />
            <ZenChip ghost={true} type={'info'} text={'Info'} />
            <ZenChip ghost={true} type={'danger'} text={'Danger'} />
          </View>

          <View style={styles.chipsContainer}>
            <ZenChip
              ghost={ghosted}
              type={'primary'}
              text={'Press'}
              onPress={() => {
                setGhosted(!ghosted);
              }}
            />
            <ZenChip
              ghost={ghosted}
              type={'warning'}
              text={'Press'}
              onPress={() => {
                setGhosted(!ghosted);
              }}
            />
            <ZenChip
              ghost={ghosted}
              type={'success'}
              text={'Press'}
              onPress={() => {
                setGhosted(!ghosted);
              }}
            />
            <ZenChip
              ghost={ghosted}
              type={'info'}
              text={'Press'}
              onPress={() => {
                setGhosted(!ghosted);
              }}
            />
            <ZenChip
              ghost={ghosted}
              type={'danger'}
              text={'Press'}
              onPress={() => {
                setGhosted(!ghosted);
              }}
            />
          </View>
          <View style={styles.chipsContainer}>
            <ZenChip type={'primary'} text={'Home'} leftIcon={'home'} />
            <ZenChip type={'warning'} text={'Airplane'} leftIcon={'airplane'} />
            <ZenChip type={'success'} text={'Database'} leftIcon={'database'} />
            <ZenChip type={'info'} text={'Thumbs'} leftIcon={'thumbs-up'} />

          </View>
          <View style={styles.chipsContainer}>
            <ZenChip type={'primary'} text={'Home'} rightIcon={'home'} />
            <ZenChip type={'warning'} text={'Airplane'} rightIcon={'airplane'} />
            <ZenChip type={'success'} text={'Database'} rightIcon={'database'} />
            <ZenChip type={'info'} text={'Thumbs'} rightIcon={'thumbs-up'} />

          </View>
          <View style={styles.chipsContainer}>
            <ZenChip ghost={true} type={'primary'} text={'Home'} leftIcon={'home'} />
            <ZenChip ghost={true} type={'warning'} text={'Airplane'} leftIcon={'airplane'} />
            <ZenChip ghost={true} type={'success'} text={'Database'} leftIcon={'database'} />
            <ZenChip ghost={true} type={'info'} text={'Thumbs'} leftIcon={'thumbs-up'} />

          </View>

          <View style={styles.chipsContainer}>
            <ZenChip ghost={false} type={'success'} text={'Send a message'} leftIcon={'telegram'} onPress={()=>{}} />
            <ZenChip ghost={true} type={'danger'} text={'Delete'} leftIcon={'trash'} onPress={()=>{}} />
            <ZenChip ghost={false} type={'warning'} text={'Fix'} rightIcon={'wrench'} onPress={()=>{}} />


          </View>

          <View style={styles.chipsContainer}>
            <ZenChip ghost={false} type={'success'} text={'User Favorite'} leftIcon={'star'} />
            <ZenChip ghost={false} type={'success'} text={'Trending'} leftIcon={'cart'} />
            <ZenChip ghost={false} type={'success'} text={'Card Available'} leftIcon={'card-shield'} />
          </View>
          <View style={styles.chipsContainer}>
            <ZenChip ghost={false} type={'danger'} text={'Late'} rightIcon={'clock'} />
            <ZenChip ghost={false} type={'warning'} text={'Requires attention'} rightIcon={'warning-triangle'} />
            <ZenChip ghost={false} type={'info'} text={'On Time'} leftIcon={'clock'} />

          </View>
        </Layout>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  chipsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
