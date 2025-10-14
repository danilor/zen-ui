import ButtonExample from '../examples/ButtonExample';
import IntroExample from '../examples/IntroExample';
import { Layout, Screen } from 'zen-ui';

export default function IntroScreen() {
  return (
    <>
      <Screen>
        <Layout scrollable={true}>
          <IntroExample />
          <ButtonExample />
        </Layout>
      </Screen>
    </>
  );
}
