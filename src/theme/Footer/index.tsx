import React from 'react';
import Footer from '@theme-original/Footer';
import Styles from '../../scss/_textStyle.module.scss';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props}>
      </Footer>
      <section className={Styles.footerWrap}>
        <section>
          <div className={Styles.footerWrap_menu}>
            <a href='https://www.cloudraw.kr/'><h4 className={Styles.footerWrap_menu_text}>About</h4></a>
            <a href='https://cloudstudio.cloudraw.kr/support/notice'><h4 className={Styles.footerWrap_menu_text}>공지사항</h4></a>
            <a href='https://cloudstudio.cloudraw.kr/support/policy'><h4 className={Styles.footerWrap_menu_text}>서비스이용약관</h4></a>
            <a href='https://cloudstudio.cloudraw.kr/payments'><h4 className={Styles.footerWrap_menu_text}>구독정보</h4></a>
          </div>
          <div>
            {/* 아이콘 영역 */}
          </div>
        </section>
        <section className={Styles.footerWrap_address}>
          <h4>(주)클라우드로 | 사업자등록번호 : 886-86-02497 | 대표이사 강혜경 | 서울시 강남구 테헤란로 151 (역삼하이츠빌딩) 305</h4>
          <h4>Copyright ⓒ 2021 Cloudraw. Inc.</h4>
        </section>
      </section>
    </> 
  );
}