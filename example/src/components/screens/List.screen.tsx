import {
  Layout,
  Screen,
  ZenIcon,
  ZenListItem,
  ZenSpaceBlock,
  ZenText,
} from 'react-zen-ui';
import { useState } from 'react';

export default function ListScreen() {
  const [currentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate] = useState(new Date().toLocaleDateString());

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenText type={'h5'}>Different Items for listing purposes</ZenText>

          <ZenListItem title={'Item 1'} />
          <ZenListItem
            title={'Item 2 with description'}
            description={'Description'}
            rightText={currentTime}
          />

          <ZenListItem
            title={'Item 3 with image'}
            description={'Image will be at the left'}
            imageSource={{ uri: 'https://picsum.photos/100' }}
          />

          <ZenListItem
            title={'Item 4 '}
            description={'I am touchable'}
            onPress={() => {}}
          />

          <ZenListItem
            title={'Item 5 with image'}
            description={'Image will be at the left'}
            imageSource={{ uri: 'https://picsum.photos/100?somethingelse' }}
            rightText={currentTime}
            rightAccessory={[
              <ZenText key={1} type={'s1'}>1</ZenText>,
              <ZenIcon name={'mail'} key={2} size={14} />,
              <ZenIcon name={'home'} key={3} size={14} />,
              <ZenIcon name={'star'} key={4} size={14} />
            ]}
          />

          <ZenListItem
            title={'Item 6'}
            description={'There will be rain over the land'}
            imageSource={{ uri: 'https://picsum.photos/100?rain' }}
            rightText={currentTime}
          />
          <ZenListItem
            title={'Item 7'}
            description={'No time like the present. Bordered item'}
            bordered={true}
            rightText={'1 new message'}
          />


          <ZenListItem title={'Item 8'} imageSource={{ uri: 'https://picsum.photos/100?other' }}  rightAccessory={[
            <ZenIcon name={'link'} key={5} size={14} />,
            <ZenIcon name={'apple'} key={6} size={14} />
          ]} />

          <ZenListItem
            title={'Item 9'}
            description={'Feeling rainy today'}
            imageSource={{ uri: 'https://picsum.photos/100?rainy' }}
            rightText={currentTime}
          />
          <ZenListItem
            title={'Item 10'}
            description={'Touch me'}
            imageSource={{ uri: 'https://picsum.photos/100?touchs' }}
            rightText={currentDate}
            onPress={() => {}}
          />
          <ZenListItem
            title={'Item 11'}
            description={'Could be important'}
            rightText={'199 new messages'}
            rightAccessory={[
              <ZenIcon name={'mail'} key={7} color={'red'} size={14} />
            ]}
          />

          <ZenListItem title={'Item 12'} />
          <ZenListItem
            title={'Item 13 with description'}
            description={'Description'}
            rightText={currentTime}
          />
          <ZenListItem
            title={'Item 13'}
            type={'warning'}
            description={'Warning Bordered item'}
            bordered={true}
            rightText={'1 new message'}
          />
          <ZenListItem
            title={'Item 14'}
            type={'success'}
            description={'Success Squared Bordered item'}
            bordered={true}
            squared={true}
            rightText={'1 new notifications'}
          />

        </Layout>
      </Screen>
    </>
  );
}
