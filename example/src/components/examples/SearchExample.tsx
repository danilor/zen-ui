import { ZenDivider, ZenSearch, ZenText } from 'react-zen-ui';

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

      <ZenDivider type={'primary'} />

      <ZenSearch />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'secondary'} />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'danger'} />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'info'} />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'warning'} />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'success'} />

      <ZenDivider type={'primary'} />
      <ZenSearch type={'primary'} placeholder={'Disabled search'} disabled={true} />
    </>
  );
}
