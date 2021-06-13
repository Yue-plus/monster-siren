import less from './index.less';
import Header from '@/components/_layout/header/header';
import LoadingView from '@/components/loadingView/loadingView';
import SlideLogo from '@/components/slideLogo/slideLogo';
import Scroll from '@/components/scroll/scroll';

export default function IndexPage() {
  return (
    <div id={less.layout} className={less.layout} style={{ display: 'block' }}>
      <Header />
      <LoadingView />
      <SlideLogo />
      <div className={`${less.slogan} ${less.show}`}>
        a world familiarly unknown
      </div>
      <Scroll />
    </div>
  );
}
