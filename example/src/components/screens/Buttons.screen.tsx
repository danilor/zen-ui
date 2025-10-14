import { Layout, Screen } from 'zen-ui';
import ButtonExample from '../examples/ButtonExample';

export default function ButtonsScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ButtonExample />

        </Layout>
      </Screen>
    </>
  );
}
