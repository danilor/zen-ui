import { Layout, Screen } from 'zen-ui';
import TablesExample from '../examples/TablesExample';

export default function TablesScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <TablesExample />

        </Layout>
      </Screen>
    </>
  );
}
