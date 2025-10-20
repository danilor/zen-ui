import {
  Column,
  Layout,
  Row,
  Screen,
  Table,
  ZenIconButton,
  ZenText,
} from 'react-zen-ui';
import { StyleSheet } from 'react-native';

export default function IconButtonsScreen() {
  const styles = StyleSheet.create({
    column: { justifyContent: 'center', alignItems: 'center' },
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText type={'p'} paragraph={true} align={'justify'}>
            Buttons can be also used with icons only. These are called Icon
            Buttons. They can be used in toolbars or action bars to represent
            actions with icons only. They can be primary, secondary, warning,
            info or danger types.
          </ZenText>

          <Table>
            <Row>
              <Column style={styles.column}>
                <ZenIconButton icon={'home'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'bell'} type={'secondary'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'dns'} type={'danger'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'eye'} type={'info'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'google-circle'} type={'warning'} />
              </Column>
            </Row>
            <Row>
              <Column style={styles.column}>
                <ZenIconButton icon={'group'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'gym'} type={'secondary'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'ip-address-tag'} type={'danger'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'closet'} type={'info'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton icon={'key'} type={'warning'} />
              </Column>
            </Row>
            <Row>
              <Column style={styles.column}>
                <ZenIconButton disabled={true} icon={'attachment'} />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton
                  disabled={true}
                  icon={'bathroom'}
                  type={'secondary'}
                />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton
                  disabled={true}
                  icon={'box-iso'}
                  type={'danger'}
                />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton
                  disabled={true}
                  icon={'chat-bubble-question'}
                  type={'info'}
                />
              </Column>
              <Column style={styles.column}>
                <ZenIconButton
                  disabled={true}
                  icon={'bishop'}
                  type={'warning'}
                />
              </Column>
            </Row>
          </Table>
        </Layout>
      </Screen>
    </>
  );
}
