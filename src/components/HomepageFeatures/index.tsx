import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '간편한 인프라 구축',
    Svg: require('../HomepageFeatures/img/achi.svg').default,
    description: (
      <>
        보안 및 생산성 담보를 보장하는 CSP별 Standard Best-Practice Infrastructur Template을 제공하여 쉽게 클라우드 환경을 구축할 수 있습니다.
      </>
    ),
  },
  {
    title: '배포 효율을 높이는 버전관리',
    Svg: require('../HomepageFeatures/img/version.svg').default,
    description: (
      <>
        캔버스로 구성한 리소스에 대한 버전을 관리할 수 있으며 원하는 시점으로 자유롭게 이동할 수 있어 리소스에 대한 형상관리가 가능합니다.
      </>
    ),
  },
  {
    title: 'IaC로 효과적인 인프라 관리',
    Svg: require('../HomepageFeatures/img/code.svg').default,
    description: (
      <>
        캔버스에 그려진 리소스들은 테라폼 코드로 관리되어 효과적으로 관리할 수 있습니다. 코드는 자유롭게 수정 가능하고, CSP 환경에 배포할 수 있습니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

        </div>
      </div>
    </section>
  );
}
