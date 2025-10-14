import { Layout, Screen } from 'zen-ui';

import IconsExample from '../examples/IconsExample';

export default function IconsScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <IconsExample />

        </Layout>
      </Screen>
    </>
  );
}
