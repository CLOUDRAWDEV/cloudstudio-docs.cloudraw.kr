import React from 'react';
// import {useThemeConfig} from '@docusaurus/theme-common';
import footerStyles from '../../scss/_footer.module.scss';
import Link from '@docusaurus/Link';


export default function Footer(props) {
  return (
    <footer className={footerStyles.footer}>
      <section className={footerStyles.footer__nav}>
        <section className={footerStyles.footer__nav__menu}>
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link to="https://www.cloudraw.kr/"><h4>About</h4></Link></li>
              {/*<li><Link to="https://cstudio.app/payments"><h4>Pricing</h4></Link></li>*/}
              <li><Link to="/policy/service"><h4>서비스이용약관</h4></Link></li>
              <li><Link to="/policy/personal"><h4 style={{fontWeight:"800"}}>개인정보처리방침</h4></Link></li>
              <li><Link to="/policy/refund"><h4>환불정책</h4></Link></li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li><Link to="https://join.slack.com/t/cloudraw/shared_invite/zt-1gazpq5ky-lZQwzvjwmr25JazlrLgyhA"><h4>Slack</h4></Link></li>
              <li><Link to="https://www.youtube.com/channel/UCHoqm5luu1MvzPQRHVSwH9w"><h4>Youtube</h4></Link></li>
            </ul>
          </div>
        </section>
        <h1>Draw<p>Your Cloud Infra.</p></h1>
      </section>
      <section className={footerStyles.footer__address}>
        <h5>(주)클라우드로 | 사업자등록번호 : 886-86-02497 | 대표이사 김경수 | 서울시 강남구 테헤란로 151 (역삼하이츠빌딩), 716</h5>
        <h5 className={footerStyles.footer__address__copy}>Copyright ⓒ 2021 Cloudraw. Inc.</h5>
      </section>
    </footer>
  );
}
