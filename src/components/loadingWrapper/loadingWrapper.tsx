import less from './loadingWrapper.less';

export default function LoadingWrapper() {
  return (
    <div className={less.loadingWrapper}>
      <div className={less.ghost} />
      <div className={less.entity} />
    </div>
  );
}
