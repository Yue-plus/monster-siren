import less from './copyright.less';

export default function Copyright() {
  return (
    <div className={less.copyright}>
      <div className={less.content}>
        <div
          className={less.logo}
          style={{
            backgroundImage:
              'https://web.hycdn.cn/hg_web_sdk/assets/hypergryph/copyright.png?ts=20210607143700',
          }}
        />
        <div className={less.info}>
          <p>
            <span>沪ICP备17022476号-1</span>
            <span>沪网文〔2018〕0803-067号</span>
          </p>
          <p>
            <span>
              Copyright ©2017 - 2021 Hypergryph Co.,Ltd. All Rights Reserved.
            </span>
            <span>上海市嘉定区南翔镇银翔路799号昌辉大厦504-1室</span>
            <span>电话：021-64399377</span>
          </p>
        </div>
      </div>
      <button className={less.buttonCopyright}>
        <span>版权信息</span>
        <div className={less.icon}>
          <div className={less.inner} />
        </div>
      </button>
    </div>
  );
}
