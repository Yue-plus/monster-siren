import less from './index.less';

export default function Index() {
  return (
    <div className={less.pageIndex} style={{ opacity: 1, zIndex: 1 }}>
      <div className={less.background} style={{ opacity: 1 }} />
      <div className={less.container} style={{ opacity: 1 }}>
        <div className={`${less.slideText} ${less.welcome}`}>
          <div
            className={less.inner}
            style={{
              color: 'rgb(212, 216, 221)',
              textShadow: 'rgba(212, 216, 221, 0.5) 0px -2em 1px',
              transform: 'translateY(0em)',
            }}
          >
            WELCOME&nbsp;
          </div>
          <div
            className={less.inner}
            style={{
              color: 'rgb(212, 216, 221)',
              textShadow: 'rgba(212, 216, 221, 0.5) 0px -2em 1px',
              transform: 'translateY(0em)',
            }}
          >
            TO
          </div>
        </div>
        <div className={`${less.slideText} ${less.title}`}>
          <div
            className={less.inner}
            style={{
              color: 'rgb(212, 216, 221)',
              textShadow: 'rgba(212, 216, 221, 0.5) 0px -2em 1px',
              transform: 'translateY(0em)',
            }}
          >
            塞壬唱片
          </div>
        </div>
        <div className={`${less.slideText} ${less.desc}`}>
          <div
            className={less.inner}
            style={{
              color: 'rgb(212, 216, 221)',
              textShadow: 'rgba(212, 216, 221, 0.5) 0px -2em 1px',
              transform: 'translateY(0em)',
            }}
          >
            一 个 已 知 或 未 知 的 世 界
          </div>
        </div>
      </div>
      <div
        className={less.searchResult}
        style={{ pointerEvents: 'none', opacity: 0 }}
      >
        <div
          data-cursor="pointer"
          className={`${less.returnButton} ${less.returnButton}`}
        >
          <div className={less.viewPort}>
            <div className={less.icon} />
          </div>
        </div>
        <div className={less.albumArea}>
          <div />
        </div>
        <div className={less.newsArea}>
          <div />
        </div>
      </div>
      <div
        className={less.searchInput}
        style={{
          opacity: 1,
          transform: 'translateY(0rem) translateX(0rem)',
          width: '10.9992rem',
        }}
      >
        <div className={`${less.input} ${less.isSearch}`}>
          <div className={less.wrapper}>
            <input className={less.inner} value="" />
            <span className={less.placeholder}>a world familiarly unknown</span>
            <div className={less.iconSearch} data-cursor="pointer">
              <i className={less.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 181">
                  <path
                    fillRule="evenodd"
                    d="M170.005,175.302 C163.632,181.674 153.301,181.674 146.928,175.302 L113.640,142.014 C102.541,148.357 89.700,152.000 76.000,152.000 C34.026,152.000 0.000,117.974 0.000,76.000 C0.000,34.026 34.026,-0.000 76.000,-0.000 C117.974,-0.000 152.000,34.026 152.000,76.000 C152.000,92.447 146.758,107.661 137.878,120.099 L170.005,152.226 C176.377,158.598 176.377,168.930 170.005,175.302 ZM75.828,30.750 C50.829,30.750 30.562,51.009 30.562,76.000 C30.562,100.991 50.829,121.250 75.828,121.250 C100.828,121.250 121.094,100.991 121.094,76.000 C121.094,51.009 100.828,30.750 75.828,30.750 Z"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
