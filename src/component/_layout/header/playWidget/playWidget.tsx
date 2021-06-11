import less from './playWidget.less';

export default function PlayWidget() {
  return (
    <div className={less.playWidget}>
      <canvas
        className={less.playWidgetCanvas}
        data-cursor="pointer"
        width="442"
        height="53"
      />
      <div className={less.playList}>
        <div className={less.playListNormal}>Real Me</div>
      </div>
    </div>
  );
}
