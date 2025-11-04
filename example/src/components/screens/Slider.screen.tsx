import {
  Layout,
  Screen,
  ZenImageSlider,
  type ZenImageSliderItem,
  ZenSpaceBlock,
  ZenText,
} from 'react-zen-ui';
export default function SliderScreen() {
  const imageBase = 'https://picsum.photos/600?';
  const images: ZenImageSliderItem[] = [
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'Image with Text',
    },
    { source: { uri: imageBase + Math.random().toString() } },
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'Another Image with Text',
    },
    { source: { uri: imageBase + Math.random().toString() } },
    {
      source: { uri: imageBase + Math.random().toString() },
      onPress: () => {},
      title: 'This image supports onPress action',
    },
  ];
  const images2: ZenImageSliderItem[] = [
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'Warning Style',
    },
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'This slider has more than 10 images',
    },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
  ];
  const images3: ZenImageSliderItem[] = [
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'Bigger pagination and bordered',
    },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
  ];
  const images4: ZenImageSliderItem[] = [
    {
      source: { uri: imageBase + Math.random().toString() },
      title: 'Info Style. This is a longer title to see how it looks like',
    },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
    { source: { uri: imageBase + Math.random().toString() } },
  ];
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenText align={'justify'}>
            This is a customizable image slider with different styles and options. You can
            have images with titles, onPress actions, and various themes. This slider widget was made to be simple to use and
            highly customizable; also, it doesn't require any additional dependencies,
            meaning that its performance will be optimal across all supported
            platforms, and the library will remain lightweight.
          </ZenText>
          <ZenSpaceBlock />
          <ZenImageSlider images={images} />
          <ZenSpaceBlock />
          <ZenImageSlider images={images2} type={'warning'} />
          <ZenSpaceBlock />
          <ZenImageSlider
            images={images3}
            type={'success'}
            bordered={true}
            paginationRelationToImage={20}
          />
          <ZenSpaceBlock />
          <ZenImageSlider images={images4} type={'info'} />
        </Layout>
      </Screen>
    </>
  );
}
