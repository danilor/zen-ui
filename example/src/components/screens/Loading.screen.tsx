import { Layout, Screen } from 'react-zen-ui';
import LoadingExample from '../examples/LoadingExample';


export default function LoadingScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <LoadingExample />

        </Layout>
      </Screen>
    </>
  );
}
