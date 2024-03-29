import less from './header.less';
import PlayWidget from '@/components/_layout/header/playWidget/playWidget';

import { NavLink } from 'umi';

export default function Header() {
  return (
    <header className={less.header}>
      <div className={`${less.action} ${less.show}`}>
        <NavLink to="/" className={less.home}>
          <svg
            className={`${less.metallicLogo} ${less.logo}`}
            viewBox="0,0,201,99"
          >
            <defs>
              <path
                id="metallic-logo"
                d="M182.547,98.605 L142.846,0.317 L200.789,0.317 L200.789,98.605 L182.547,98.605 ZM146.533,98.605 L120.649,33.424 L114.281,49.461 L133.796,98.605 L107.305,98.605 L101.036,82.818 L94.766,98.605 L68.275,98.605 L87.790,49.461 L81.421,33.424 L55.538,98.605 L29.047,98.605 L68.077,0.317 L68.275,0.317 L94.568,0.317 L94.766,0.317 L101.036,16.104 L107.305,0.317 L107.503,0.317 L133.796,0.317 L133.994,0.317 L173.024,98.605 L146.533,98.605 ZM0.000,98.605 L0.000,0.317 L57.943,0.317 L18.242,98.605 L0.000,98.605 Z"
              />
              <clipPath id="clip-metallic-logo">
                <use href="#metallic-logo" />
              </clipPath>
              <linearGradient id="gradient-metallic-logo">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="42%" stopColor="white" stopOpacity="0.4" />
                <stop offset="48%" stopColor="white" stopOpacity="0.8" />
                <stop offset="52%" stopColor="white" stopOpacity="0.8" />
                <stop offset="58%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <use href="#metallic-logo" />
            <g clipPath="url(#clip-metallic-logo)">
              <rect
                width="201"
                height="99"
                fill="url(#gradient-metallic-logo)"
              />
            </g>
          </svg>
        </NavLink>
        <PlayWidget />
      </div>
      <nav className={`${less.nav} ${less.show}`}>
        <NavLink
          to="/about"
          activeClassName={less.isCurrent}
          className={`link ${less.navItem}`}
        >
          关于
        </NavLink>
        <NavLink
          to="/music"
          activeClassName={less.isCurrent}
          className={`link ${less.navItem}`}
        >
          音乐
        </NavLink>
        <NavLink
          to="/info"
          activeClassName={less.isCurrent}
          className={`link ${less.navItem}`}
        >
          动向
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName={less.isCurrent}
          className={`link ${less.navItem}`}
        >
          联系我们
        </NavLink>
        <a className={`link ${less.navItem}`}>登录</a>
        {/*<div className={`${less.navItem} ${less.userGroup}`}>*/}
        {/*  <div className={less.container}>*/}
        {/*    <div className={less.actionGroup}>*/}
        {/*      <span className={less.userAction} data-cursor="pointer">登录</span>*/}
        {/*    </div>*/}
        {/*    <div className={less.actionGroup}>*/}
        {/*      <span className={less.extra}>*/}
        {/*        <span className={less.userIcon} data-cursor="pointer">*/}
        {/*          <i className={less.icon}>*/}
        {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19">*/}
        {/*              <path fillRule="evenodd" d="M0 19v-3s1.471-4 6-4 6 4 6 4v3H0zm6-9A5 5 0 116.001-.001 5 5 0 016 10z" />*/}
        {/*            </svg>*/}
        {/*          </i>*/}
        {/*        </span>*/}
        {/*        <span className={less.divider}>|</span>*/}
        {/*      </span>*/}
        {/*      <span className={less.userAction} data-cursor="pointer">LOGOUT</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </nav>
    </header>
  );
}
