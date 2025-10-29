import {
  Column,
  Layout,
  Row,
  Screen,
  Table,
  ZenCheck,
  ZenDivider,
  ZenInput,
  ZenText,
  ZenSelect
} from 'react-zen-ui';

import { StyleSheet } from 'react-native';

export default function FormScreen() {
  const styles = StyleSheet.create({
    column: { justifyContent: 'center', alignItems: 'center' },
  });

  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText fill={true} paragraph={true}>
            All apps needs forms to collect user data. ZenUI provides a set of
            form components that are easy to use and customize.
          </ZenText>
          <ZenDivider type={'primary'} />

          <ZenText fill={true} type={'h4'} paragraph={true}>
            Input
          </ZenText>
          <ZenInput label={'Generic Input'} placeholder={'Type here'} />
          <ZenInput label={'Disabled input'} disabled={true} placeholder={'Try to type here'} />
          <ZenInput label={'Secondary Input'} type={'secondary'} placeholder={'Type here'} />
          <ZenInput label={'Success Input'} type={'success'} placeholder={'Type here'} />
          <ZenInput label={'Warning Input'} type={'warning'} placeholder={'Type here'} />
          <ZenInput label={'Danger Input'} type={'danger'} placeholder={'Type here'} />
          <ZenInput label={'Info Input'} type={'info'} placeholder={'Type here'} />

          <ZenDivider type={'primary'} />
          <ZenText fill={true} type={'h4'} paragraph={true}>
            Select
          </ZenText>

          <Table>
            <Row>
              <Column span={2}>
                <ZenSelect items={['Option 1', 'Option 2', 'Option 3']} label={'Select one option (primary)'} type={'primary'} />
              </Column>
            </Row>
            <Row>
              <Column>
                <ZenSelect items={['Success 1', 'Success 2', 'Success 3']} label={'Success'} type={'success'} />
              </Column>
              <Column>
                <ZenSelect items={['Danger 1', 'Danger 2', 'Danger 3']} label={'Danger'} type={'danger'} />
              </Column>
            </Row>
          </Table>

          <ZenDivider type={'primary'} />



          <ZenText fill={true} type={'h4'} paragraph={true}>
            Checkbox
          </ZenText>
          <ZenText fill={true} type={'p'} paragraph={true}>
            The checkbox supports left or right positioning of the element and
            label.
          </ZenText>
          <ZenCheck type={'primary'} label={'My custom checkbox (Optional)'} />
          <ZenCheck
            type={'primary'}
            label={'My custom checkbox (Optional)'}
            position={'right'}
          />
          <ZenText fill={true} type={'p'} paragraph={true}>
            The background can be enabled to have a different style.
          </ZenText>
          <ZenCheck
            type={'primary'}
            useBackground={true}
            label={'Background checkbox'}
          />

          <ZenText fill={true} type={'p'} paragraph={true}>
            It also supports checkbox without labels and in different theme
            types, and also disabled state for all of them.
          </ZenText>

          <Table>
            <Row>
              <Column style={styles.column}>
                <ZenCheck type={'primary'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'secondary'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'success'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'danger'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'warning'} />
              </Column>
            </Row>
            <Row>
              <Column style={styles.column}>
                <ZenCheck type={'primary'} useBackground={true} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'secondary'} useBackground={true} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'success'} useBackground={true} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'danger'} useBackground={true} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck type={'warning'} useBackground={true} />
              </Column>
            </Row>
            <Row>
              <Column style={styles.column}>
                <ZenCheck disabled={true} type={'primary'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck disabled={true} type={'secondary'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck disabled={true} type={'success'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck disabled={true} type={'danger'} />
              </Column>
              <Column style={styles.column}>
                <ZenCheck disabled={true} type={'warning'} />
              </Column>
            </Row>
          </Table>

          <ZenDivider type={'primary'} />


        </Layout>
      </Screen>
    </>
  );
}
