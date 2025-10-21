import { Column, icons, Row, Table, ZenIcon, ZenText } from 'react-zen-ui';
import { View } from 'react-native';

export default function IconsExample(){

  let iconsChunk = [];
  const chunkSize: number = 2;
  for (let i = 0; i < icons.regular.sort(() => Math.random() - 0.5).length; i += chunkSize) {
    const chunk = icons.regular.slice(i, i + chunkSize);
    iconsChunk.push(chunk);
    // do whatever
  }

  iconsChunk = iconsChunk.splice(0,10);



  return (
    <>
      <ZenText type={'h4'} paragraph={true} align={'left'}>
        Icons
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        The icons are always an important aspect of any design. ZenUI comes with
        a set of pre-defined icons that you can use in your project. These icons
        are native for the project, meaning that they don't come from any external
        library or source, keeping the dependency tree clean and light. All icons are tinted PNG,
        which means that they will adapt to the current theme automatically and there is no
        need for external libraries (such as react-native-vector-icons) that may bloat your project.
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        Here is an small random sample of the available icons to avoid overloading the example app.
      </ZenText>

      <Table>
        {
          iconsChunk.map((iconRow, rowIndex) => {

            return (
              <Row key={'icon_row_' + rowIndex.toString()}>
                {
                  iconRow.map((iconName, colIndex) => (
                    <Column  key={'icon_column_' + rowIndex.toString() + '_' + colIndex.toString()}>
                      <View style={{display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
                        <ZenIcon name={iconName.name} />
                        <ZenText align={'center'}>{iconName.name}</ZenText>
                      </View>
                    </Column>
                  ))
                }
              </Row>
            );
          })
        }
      </Table>
    </>
  );
}
