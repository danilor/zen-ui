import { Layout, Screen } from 'react-zen-ui';
import SearchExample from '../examples/SearchExample';

export default function SearchScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <SearchExample />

        </Layout>
      </Screen>
    </>
  );
}
