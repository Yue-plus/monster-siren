import less from './scroll.less';

function Svg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 13">
      <path
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth="2px"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
        d="M3.249,1.105 L8.644,6.500 L3.249,11.895 "
      />
    </svg>
  );
}

export default function Scroll() {
  return (
    <div className={less.scroll} style={{ opacity: 1 }}>
      <div className={less.wrapper}>
        <div className={less.arrow}>
          <i className={less.icon}>
            <Svg />
          </i>
          <i className={less.icon}>
            <Svg />
          </i>
          <i className={less.icon}>
            <Svg />
          </i>
        </div>
      </div>
    </div>
  );
}
