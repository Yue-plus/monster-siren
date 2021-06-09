import less from './nav.less';

export default function Nav() {
  return (
    <ul className={less.ul}>
      <li>ABOUT</li>
      <li>MUSIC</li>
      <li>INFO</li>
      {/*<li>LOGIN</li>*/}
    </ul>
  );
}
