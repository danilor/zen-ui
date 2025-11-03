import type { ThemeType } from '../../literals/Type.literal';
import { useTheme } from './../../hooks/useTheme';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import ZenIcon from './../themed/ZenIcon';
import ThemeConfig from '../../config/Theme.config';
import ZenText from '../themed/ZenText';
import LayoutConfig from '../../config/LayoutConfig';
import ColorUtil from '../../util/Color.util';

type ZenPlayProps = {
  type?: ThemeType;
  imageSource: any;
  style?: any;
  onPress?: () => void;
  icon?: string;
  leftText?: string;
  rightIcon?: string;
  bordered?: boolean;
};

/**
 * @docunator
 * @title ZenPlay
 * @description A play button component overlayed on an image, with optional left text and right icon.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @category Widget Components
 * @param {string} type - The theme type for the component (e.g., 'primary', 'secondary').
 * @param {ImageSource} imageSource - The source of the image to display.
 * @param {StyleSheet} style - Additional styles for the component container.
 * @param {Function} onPress - Function to execute when the play button is pressed.
 * @param {string} icon - The name of the icon to display on the play button.
 * @param {string} leftText - Optional text to display at the bottom left of the image.
 * @param {string }rightIcon - Optional icon name to display at the bottom right of the image.
 * @param {boolean} bordered - Whether to display a border around the component. Default is false.
 * @example {tsx}

  import {
  Layout,
  Screen,
  ZenPlay,
  } from 'react-zen-ui';
  import { StyleSheet } from 'react-native';

  export default function PlayScreen() {
      const styles = StyleSheet.create({
        play: {
          width: 200,
          height: 200,
        },
      });

      const handlePlayPress = () => {
        console.log('Play button pressed!');
      };

      return (
        <>
          <Screen useTopSafeArea={false}>
            <Layout centerContent={true}>
              <ZenPlay
                style={styles.play}
                imageSource={{
                  uri: 'https://example.com/image.jpg',
                }}
                onPress={handlePlayPress}
                icon={'play'}
                leftText={'Sample Text'}
                rightIcon={'info'}
              />
            </Layout>
          </Screen>
        </>
      );
  }

 {/tsx}
 */
export default function ZenPlay({
  type = 'primary',
  imageSource,
  style = {},
  onPress = () => null,
  icon = 'play',
  leftText,
  rightIcon,
  bordered = false,
}: ZenPlayProps) {
  const theme = useTheme();
  if (!theme[type]) {
    throw new Error('Invalid theme type provided to ZenPlay component.');
  }

  const [containerWidth, setContainerWidth] = useState<number>(0);
  // const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleLayout = (event: any) => {
    const {
      width,
      // height
    } = event.nativeEvent.layout;
    setContainerWidth(width);
    // setContainerHeight(height);
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderWidth: (bordered ? 1 : 0),
      borderColor: theme[type],
      borderStyle: 'solid',
      borderRadius: (bordered ? LayoutConfig.border : 0),
      overflow: 'hidden',

    },
    image: {
      // minWidth: 10,
      // minHeight: 10,
      aspectRatio: 1,
      position: 'relative',
      width: containerWidth,
      // height: containerWidth
    },
    buttonContainer: {
      width: '100%',
      aspectRatio: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    button: {
      backgroundColor: theme.background,
      opacity: ThemeConfig.defaultDimValue,
      borderRadius: 999,
    },
    leftText: {
      position: 'absolute',
      left: LayoutConfig.space / 4,
      bottom: LayoutConfig.space / 4,
      backgroundColor: ColorUtil.hexToRgb(
        theme.background,
        ThemeConfig.defaultDimValue
      ),
    },
    rightIcon:{
      position: 'absolute',
      right: LayoutConfig.space / 4,
      bottom: LayoutConfig.space / 4,
      backgroundColor: ColorUtil.hexToRgb(
        theme.background,
        ThemeConfig.defaultDimValue
      ),
    }
  });

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLayout={handleLayout}
        style={[styles.container, style]}
      >
        <Image style={styles.image} source={imageSource} />
        <View style={styles.buttonContainer}>
          <ZenIcon name={icon} style={styles.button} />
        </View>

        {leftText && (
          <ZenText type={'s1'} style={styles.leftText}>
            {leftText}
          </ZenText>
        )}
        {rightIcon && (
          <View style={styles.rightIcon}>
            <ZenIcon size={containerWidth * 0.15} name={rightIcon} />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}
