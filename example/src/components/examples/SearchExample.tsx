import { ZenSearch, ZenText } from 'zen-ui';

export default function SearchExample(){
  return (
    <>
      <ZenText type={'h4'} paragraph={true} align={'left'}>
        Search
      </ZenText>

      <ZenText type={'p'} paragraph={true} align={'justify'}>
        Search element built on top of the ZenInput component. It provides additional functionality like
        debouncing and a clear button.
      </ZenText>

      <ZenSearch />
    </>
  );
}
