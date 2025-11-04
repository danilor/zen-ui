import { useState, useRef, useId } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ZenText from './../themed/ZenText';
import { useTheme } from './../../hooks/useTheme';
import type { ThemeType } from '../../literals/Type.literal';
import ColorUtil from '../../util/Color.util';
import ThemeConfig from '../../config/Theme.config';
import LayoutConfig from '../../config/LayoutConfig';

/**
 * @docunator
 * @title ZenImageSliderItem
 * @description Props for each item in ZenImageSlider component.
 * @author Danilo Ramírez Mattey
 * @category Widget Components Props
 * @version 1.0.0
 */
export type ZenImageSliderItem = {
  source: any;
  onPress?: () => void;
  title?: string;
};

type ZenImageSliderItemRenderProps = {
  image: ZenImageSliderItem;
  styles: any;
};

function ZenImageSliderItemRender({
  image,
  styles,
}: ZenImageSliderItemRenderProps) {
  return (
    <View style={styles.imageContainer}>
      {image.title && (
        <View style={styles.textContainer}>
          <ZenText type={'p'} style={styles.imageTitle}>
            {image.title}
          </ZenText>
        </View>
      )}
      <Image source={image.source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

/**
 * @docunator
 * @title ZenImageSliderProps
 * @description Props for ZenImageSlider component.
 * @author Danilo Ramírez Mattey
 * @category Widget Components Props
 * @version 1.0.0
 */
type ZenImageSliderProps = {
  type?: ThemeType;
  images: ZenImageSliderItem[];
  ratio?: number;
  pagination?: boolean;
  paginationRelationToImage?: number;
  bordered?: boolean;
};

/**
 * @docunator
 * @title ZenImageSlider
 * @description A simple image slider component with pagination.
 * @author Danilo Ramírez Mattey
 * @category Widget Components
 * @version 1.0.0
 * @param {ZenImageSliderItem[]} images - Array of images to display. Each image can have a source, optional onPress action, and optional title. Format: { source: any; onPress?: () => void; title?: string; }
 * @param {string} type - Theme type
 * @param {number} ratio - Aspect ratio (width / height)
 * @param {boolean} pagination - Show pagination dots
 * @param {number} paginationRelationToImage - Size of pagination dots in relation to image width
 * @param {boolean} bordered - Show border around the slider
 * @example {tsx}

import {
  Layout,
  Screen,
  ZenImageSlider,
  type ZenImageSliderItem,
  ZenSpaceBlock,
} from 'react-zen-ui';

export default function SliderScreen() {
  const imageBase = 'https://picsum.photos/600?';
  const images: ZenImageSliderItem[] = [
    {source:{uri:imageBase + Math.random().toString()}, title: 'Image with Text'},
    {source:{uri:imageBase + Math.random().toString()}},
    {source:{uri:imageBase + Math.random().toString()} , title: 'Another Image with Text'},
    {source:{uri:imageBase + Math.random().toString()}},
    {source:{uri:imageBase + Math.random().toString()}, onPress: ()=>{}, title:'This image supports onPress action'},
  ];
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenSpaceBlock />
          <ZenImageSlider images={images} />
        </Layout>
      </Screen>
    </>
  );
}


 {/tsx}
 */
export default function ZenImageSlider({
  images,
  type = 'primary',
  ratio = 16 / 9,
  pagination = true,
  paginationRelationToImage = 35,
  bordered = false,
}: ZenImageSliderProps) {
  const theme = useTheme();

  if (!theme[type]) {
    throw new Error('ZenImageSlider: theme type "' + type + '" not found.');
  }

  const rId = useId();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollViewRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  /**
   * Handles the scroll event to update the active index.
   * @param event
   */
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / containerWidth);
    setActiveIndex(newIndex);
  };

  /**
   * Handles layout changes to get container width.
   * @param event
   */
  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  /**
   * Styles
   * A lot of them depend on containerWidth, so they need to be inside the component.
   */
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // maxWidth: '40%'
      borderWidth: bordered ? 1 : 0,
      borderColor: bordered ? theme[type] : 'transparent',
      borderRadius: bordered ? LayoutConfig.border : 0,
      overflow: 'hidden',
    },
    imageContainer: {
      width: containerWidth - (bordered ? 2 : 0),
      height: 'auto',
    },
    image: {
      width: containerWidth - (bordered ? 2 : 0),
      aspectRatio: ratio,
    },
    textContainer: {
      width: containerWidth,
      position: 'absolute',
      zIndex: 2,
      top: LayoutConfig.space / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      flex: 1,
      // left: 10,
      color: theme.text,
      backgroundColor: ColorUtil.hexToRgb(
        theme[type],
        ThemeConfig.defaultDimValue
      ),
      // left: '50%',
      // marginHorizontal: 'auto',
      paddingHorizontal: LayoutConfig.space / 2,
      paddingVertical: LayoutConfig.space / 4,
      borderRadius: LayoutConfig.border / 2,
    },
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: LayoutConfig.space,
      alignSelf: 'center',
    },
    dot: {
      width: containerWidth / paginationRelationToImage,
      height: containerWidth / paginationRelationToImage,
      borderRadius: 999,
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: theme[type],
    },
    inactiveDot: {
      backgroundColor: ColorUtil.hexToRgb(
        theme.text,
        ThemeConfig.defaultDimValue
      ),
    },
  });

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={60}
      >
        {images.map((image, index) => (
          <View key={rId.toString() + '_sliderItem_' + index}>
            {image.onPress ? (
              <TouchableOpacity
                activeOpacity={ThemeConfig.defaultDimValue}
                onPress={image.onPress}
              >
                <ZenImageSliderItemRender image={image} styles={styles} />
              </TouchableOpacity>
            ) : (
              <ZenImageSliderItemRender image={image} styles={styles} />
            )}
          </View>
        ))}
      </ScrollView>
      {pagination && (
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}
