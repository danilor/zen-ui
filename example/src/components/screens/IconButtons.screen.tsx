import { Column, Layout, Row, Screen, Table, ZenIconButton, ZenText } from 'react-zen-ui';


export default function IconButtonsScreen() {
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
         <ZenText type={'p'} paragraph={true} align={'justify'}>
           Buttons can be also used with icons only. These are called Icon
           Buttons. They can be used in toolbars or action bars to represent
           actions with icons only. They can be primary, secondary, warning, info or danger types.

         </ZenText>

          <Table>
            <Row>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'home'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'bell'} type={'secondary'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'dns'} type={'danger'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'eye'} type={'info'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'google-circle'} type={'warning'} />
              </Column>
            </Row>
            <Row>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'group'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'gym'} type={'secondary'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'ip-address-tag'} type={'danger'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'eye'} type={'info'} />
              </Column>
              <Column style={{justifyContent: 'center', alignItems: 'center'}}>
                <ZenIconButton icon={'key'} type={'warning'} />
              </Column>
            </Row>
          </Table>

        </Layout>
      </Screen>
    </>
  );
}
