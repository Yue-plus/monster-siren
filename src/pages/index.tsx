import less from './index.less';
import Header from '@/components/_layout/header/header';
import LoadingView from '@/components/loadingView/loadingView';
import SlideLogo from '@/components/_layout/slideLogo/slideLogo';
import Scroll from '@/components/_layout/scroll/scroll';

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
