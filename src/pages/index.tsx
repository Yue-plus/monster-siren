import less from './index.less';
import Header from '@/component/_layout/header/header';
import LoadingView from '@/component/loadingView/loadingView';
import SlideLogo from '@/component/slideLogo/slideLogo';

export default function IndexPage() {
  return (
    <div id={less.layout} className={less.layout} style={{ display: 'block' }}>
      <Header />
      <LoadingView />
      <SlideLogo />
      <div className={`${less.slogan} ${less.show}`}>
        a world familiarly unknown
      </div>
    </div>
  );
}
