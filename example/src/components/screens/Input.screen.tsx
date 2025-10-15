import { Layout, Screen } from 'react-zen-ui';

import InputExample from '../examples/InputExample';

export default function InputScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <InputExample />

        </Layout>
      </Screen>
    </>
  );
}
