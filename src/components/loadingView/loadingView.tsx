import less from './loadingView.less';

export default () => (
  <div className={less.loadingView}>
    <div className={less.loadingCanvasWrapper}>
      <canvas width="455" height="58" />
      <div className={less.loadingPercentage}>0 %</div>
    </div>
  </div>
);
