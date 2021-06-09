import less from './header.less';
import Nav from '@/component/_layout/header/nav/nav';
import Player from '@/component/_layout/header/player/player';

export default function Header() {
  return (
    <header className={less.header}>
      <a href="/">Logo</a>
      <Player />
      <Nav />
    </header>
  );
}
