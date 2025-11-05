import {
  Layout,
  Screen,
  useToast,
  ZenButton,
  ZenDivider,
  ZenText,
} from 'react-zen-ui';

export default function ToastScreen() {
  const toast = useToast();
  return (
    <>
      <Screen useTopSafeArea={false}>
        <Layout scrollable={true}>
          <ZenText type={'h2'} paragraph={true} align={'left'}>
            Toast Notifications
          </ZenText>
          <ZenButton type={'primary'} fill={true} title={'Display Primary Toast'} pressAction={()=>{ toast('Example Toast',{type:'primary'}); }} />
          <ZenDivider type={'primary'} />
          <ZenButton type={'warning'} fill={true} title={'Display Warning Toast'} pressAction={()=>{ toast('Example Toast',{type:'warning'}); }} />
          <ZenDivider type={'primary'} />
          <ZenButton type={'success'} fill={true} title={'Display Success Toast'} pressAction={()=>{ toast('Example Toast',{type:'success'}); }} />
          <ZenDivider type={'primary'} />
          <ZenButton type={'danger'} fill={true} title={'Display Danger Toast'} pressAction={()=>{ toast('Example Toast in danger theme colors',{type:'danger'}); }} />
          <ZenDivider type={'primary'} />
          <ZenButton type={'success'} fill={true} title={'One Second Toast'} pressAction={()=>{ toast('1 second to close',{type:'success',duration:1000}); }} />

        </Layout>
      </Screen>
    </>
  );
}
