import { Column, ZenLoading, ZenText, Table, Row } from 'react-zen-ui';


export default function LoadingExample(){
  return (
    <>
      <ZenText type={'h4'} paragraph={true} align={'left'}>
        Loading
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        Basic loading indicators to show that something is happening in the
        background. You can use them in buttons, or as standalone indicators.
        They will adapt to the current theme. This loading feature is using the
        native Animated API from React Native, avoiding any external dependency.
        You can set the size to small, medium or large. Also, you can change the duration of the loading animation.
        This is a different component from the ActivityIndicator from React Native, as it uses an animated icon.
      </ZenText>

      <Table>
        <Row>
          <Column>
            <ZenLoading size={'large'} />
          </Column>
          <Column>
            <ZenLoading size={'small'} />
          </Column>
          <Column>
            <ZenLoading size={'large'} duration={1000} />
          </Column>
          <Column>
            <ZenLoading size={'small'} duration={1000} />
          </Column>
        </Row>
        <Row>
          <Column>
            <ZenLoading size={'large'} color={'green'} />
          </Column>
          <Column>
            <ZenLoading size={'small'} color={'red'} />
          </Column>
          <Column>
            <ZenLoading size={'large'} duration={1000} color={'purple'} />
          </Column>
          <Column>
            <ZenLoading size={'small'} duration={1000} color={'blue'} />
          </Column>
        </Row>
      </Table>

    </>
  );
}
