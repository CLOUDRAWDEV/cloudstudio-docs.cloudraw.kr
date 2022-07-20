import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import Styles from '../../scss/_textStyle.module.scss';
import Link from '@docusaurus/Link';


export default function Footer(props) {
  return (
    <footer className={Styles.footer}>
      <section className={Styles.footer__nav}>
        <section className={Styles.footer__nav__menu}>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link to="https://www.cloudraw.kr/"><h4>About</h4></Link></li>
              <li><Link to="https://cloudstudio.cloudraw.kr/payments"><h4>Pricing</h4></Link></li>
              <li><Link to=" "><h4>Policy</h4></Link></li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li><Link to=" "><h4>Slack</h4></Link></li>
              <li><Link to=" "><h4>FAQ</h4></Link></li>
              <li><Link to="https://www.youtube.com/channel/UCHoqm5luu1MvzPQRHVSwH9w"><h4>Youtube</h4></Link></li>
            </ul>
          </div>
        </section>
        <h1>Drawing<p>Your Cloud Infra.</p></h1>
      </section>
      <section className={Styles.footer__address}>
        <h5>(주)클라우드로 | 사업자등록번호 : 886-86-02497 | 대표이사 강혜경 | 서울시 강남구 테헤란로 151 (역삼하이츠빌딩) 305</h5>
        <h5>Copyright ⓒ 2021 Cloudraw. Inc.</h5>
      </section>
    </footer>
  );
}
