import less from './about.less';

export default function About() {
  return (
    <div className={less.pageAbout} style={{ opacity: 1, zIndex: 1 }}>
      <div className={less.container}>
        <div className={less.aboutInfo}>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            <span className={less.bold}>塞壬唱片MSR</span>
            <span>
              &nbsp;(Monster&nbsp;Siren&nbsp;Records)，泰拉世界十世纪最大的音乐发行商之一。
            </span>
          </p>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            从异教重金属乐队至偶像产业，塞壬唱片MSR旗下的签约艺人涉猎音乐各方面。
          </p>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            根据最新统计数据，塞壬唱片MSR占有泰拉世界30%以上的音乐市场。
          </p>
        </div>
        <div className={`${less.aboutInfo} ${less.isEN}`}>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            <span className={less.bold}>Monster Siren Records</span>
            <span>
              &nbsp;(MSR), one of the world's largest music publishers in the
              tenth century in Terra.
            </span>
          </p>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            From heavy metal bands to the idol industry, MSR artists are
            involved in all aspects of music.
          </p>
          <p style={{ transform: 'translateY(0%)', opacity: 1 }}>
            According to the latest statistics, MSR occupies more than 30% of
            the music market in Terra.
          </p>
        </div>
      </div>
    </div>
  );
}
