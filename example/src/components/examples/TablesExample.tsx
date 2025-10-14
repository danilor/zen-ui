import { Column, Row, Table, ZenText } from 'zen-ui';

export default function TablesExample(){
  return (
    <>
      <ZenText type={'h4'} paragraph={true} align={'left'}>
        Tables
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        Simple table components to create grid layouts. It consists of a Table component
        that wraps Row components, which in turn wrap Column components. You can enable borders
        and customize their appearance.
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'left'}>
        Bordered table:
      </ZenText>

      <Table>
        <Row>
          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,1</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,2</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,3</ZenText>
          </Column>
        </Row>
        <Row>
          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,1</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,2</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,3</ZenText>
          </Column>
        </Row>
        <Row>
          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,1</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,2</ZenText>
          </Column>

          <Column border={true}>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,3</ZenText>
          </Column>

        </Row>
      </Table>

      <ZenText type={'p'} paragraph={true} align={'left'}>
        Clean table:
      </ZenText>

      <Table border={false}>
        <Row>
          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,1</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,2</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>1,3</ZenText>
          </Column>
        </Row>
        <Row>
          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,1</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,2</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>2,3</ZenText>
          </Column>
        </Row>
        <Row>
          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,1</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,2</ZenText>
          </Column>

          <Column>
            <ZenText type={'p'} paragraph={false} align={'center'}>3,3</ZenText>
          </Column>

        </Row>
      </Table>
    </>
  );
}
