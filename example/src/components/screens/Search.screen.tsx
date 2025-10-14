import { Layout, Screen } from 'zen-ui';
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
