import {
  Layout,
  Screen,
  ZenButton, ZenDivider,
  ZenPlay,
  ZenSpaceBlock,
} from 'react-zen-ui';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function PlayScreen() {
  const [columns, setColumns] = useState<number>(3);
  const [iconName, setIconName] = useState<'play'|'send'>('play');
  const [bordered, setBordered] = useState<boolean>(true);

  const changeDistribution = () => {
    const newColumns = columns === 3 ? 4 : columns === 4 ? 2 : 3;
    setColumns(newColumns);
  };

  const changeIcon = () => {
    const newIcon = iconName === 'play' ? 'send' : 'play';
    setIconName(newIcon);
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
    },
    play: {
      width: 100 / columns - 1 + '%',
    },
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenButton
            onPress={changeDistribution}
            title={'Change Number of Columns (' + columns + ')'}
            fill={true}
          />
          <ZenDivider type={'primary'} />
          <ZenButton
            onPress={changeIcon}
            title={'Change Icon (' + iconName + ')'}
            fill={true}
          />
          <ZenDivider type={'primary'} />
          <ZenButton
            onPress={()=> setBordered(!bordered)}
            title={'Change Bordered'}
            fill={true}
          />

          <ZenSpaceBlock />

          <View style={styles.container}>
            <ZenPlay
              icon={iconName}
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              leftText={'1M views'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'140K views'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'30K views'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'1.2M views'}
              rightIcon={'money-square'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'12 views'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'40K views'}
              bordered={bordered}
            />
            <ZenPlay
              style={styles.play}
              imageSource={{
                uri: 'https://picsum.photos/300?' + Math.random().toString(),
              }}
              icon={iconName}
              leftText={'1M views'}
              rightIcon={'money-square'}
              bordered={bordered}
            />


            <ZenSpaceBlock />
          </View>
        </Layout>
      </Screen>
    </>
  );
}
