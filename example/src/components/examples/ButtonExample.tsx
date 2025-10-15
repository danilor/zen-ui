import { ZenButton, ZenLoading, ZenText } from 'react-zen-ui';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});


export default function ButtonExample(){
  return (
   <>
     <ZenText type={'h4'} paragraph={true} align={'left'}>
       Buttons
     </ZenText>

     <ZenText type={'p'} paragraph={true} align={'justify'}>
       Buttons are used to trigger actions. They can be primary or
       secondary (type). They will automatically adapt to the current theme
       and the text color will be selected accordingly depending on the
       brightness of the button color. This can be overwritten by passing a
       textColor prop. This is not extending the default Button component
       from React Native, so you cannot use any default button props here.
     </ZenText>
     <View style={styles.buttonsContainer}>
       <ZenButton
         type={'primary'}
         fill={false}
         title={'Primary'}
         leftIcon={'yoga'}
       />
       <ZenButton
         type={'secondary'}
         fill={false}
         rightIcon={'bonfire'}
         title={'Secondary'}

       />
     </View>
     <View style={styles.buttonsContainer}>

       <ZenButton
         type={'success'}
         fill={false}
         leftIcon={'activity'}
         title={'Success'}

       />
       <ZenButton
       type={'info'}
       fill={false}
       rightIcon={'color-wheel'}
       title={'Info'}

     />
     </View>
     <View style={styles.buttonsContainer}>

       <ZenButton
         type={'warning'}
         fill={false}
         rightIcon={'download-square'}
         title={'Warning'}

       />
       <ZenButton
         type={'danger'}
         fill={false}
         leftIcon={'trello'}
         title={'Danger'}

       />
     </View>
     <View style={styles.buttonsContainer}>

       <ZenButton
         type={'info'}
         fill={false}
         title={'No Icon'}
       />
       <ZenButton
         type={'secondary'}
         fill={false}
         title={'No Icon'}

       />
     </View>

     <View style={styles.buttonsContainer}>

       <ZenButton
         type={'primary'}
         fill={false}
         title={'Disabled'}
          disabled={true}
       />
       <ZenButton
         type={'secondary'}
         fill={false}
         title={'Disabled'}
          disabled={true}
       />
     </View>
     <View style={styles.buttonsContainer}>
       <ZenButton
         type={'secondary'}
         fill={false}
         rightIcon={'download-square'}
         title={'Custom color'}
         textColor={'#E91E63'}

       />
       <ZenButton
         key={Math.random().toString()}
         type={'success'}
         fill={false}
         leftAccessory={<ZenLoading />}
         title={'Custom Accessory'}
         // textColor={'#4CAF50'}

       />
     </View>
   </>
  );
}
