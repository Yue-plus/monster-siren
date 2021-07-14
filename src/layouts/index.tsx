import React, { useState, useEffect } from 'react';
import less from './index.less';
import Header from '@/components/_layout/header/header';
import LoadingView from '@/components/loadingView/loadingView';
import LoadingWrapper from '@/components/loadingWrapper/loadingWrapper';
import SlideLogo from '@/components/_layout/slideLogo/slideLogo';
import Scroll from '@/components/_layout/scroll/scroll';
import Copyright from '@/components/_layout/copyright/copyright';

import { IRouteComponentProps } from 'umi';

export default function Index({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  const [htmlFontSize, setHtmlFontSize] = useState('50px');

  useEffect(() => {
    const setFontSize = () => {
      setHtmlFontSize((innerHeight / 21.58).toFixed(1) + 'px');
      document.documentElement.style.fontSize = htmlFontSize;
    };
    setFontSize();
    window.addEventListener('resize', setFontSize);
  });

  return (
    <>
      <div
        id={less.layout}
        className={less.layout}
        style={{ display: 'block' }}
      >
        <div>{children}</div>
        <Header />
        <SlideLogo />
        <div className={`${less.slogan} ${less.show}`}>
          a world familiarly unknown
        </div>
        <Scroll />
        <Copyright />
      </div>
      <LoadingWrapper />
    </>
  );
}
