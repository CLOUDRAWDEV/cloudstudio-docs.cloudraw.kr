import React from 'react'
import Layout from '@theme/Layout';
import policyStyles from '../../scss/_policy.module.scss';

export default function Personal() {
    return (
      <Layout title="Policy_Personal" description="Policy_Personal Page">
        <section className={policyStyles.policy}>
          <h1>개인정보처리방침</h1>
            <hr />
            <br />
            <h4>클라우드로(주)(이하 ‘회사’라 합니다)가 제공하는 클라우드 스튜디오(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집/이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.</h4>
            <br />
            <hr />
            <br />
            <section>
              <br />
              <h2>수집항목</h2>
              <h4>
                - 이용자의 이메일 주소
                <br />
                - 연계정보(CI), 중복가입확인정보(DI)
                <br />
                - 이용자가 이용하는 서비스 정보, 이용 일시
              </h4>

              <br />
              <h2>이용목적</h2>
              <h4>
                - 이용자가 서비스 회원가입시 입력한 본인확인정보의 정확성 여부 확인 (본인확인서비스 제공)
                <br />
                - 해당서비스에 연계정보(CI)/중복가입확인정보(DI) 전송
                <br />
                - 서비스 관련 상담 및 불만 처리 등
                <br />
                - 이용 서비스 정보 등에 대한 분석 및 세분화를 통한, 이용자의 서비스 이용 선호도 분석
                <br />
                - 개인정보의 보유기간 및 이용기간
                <br />
                <span className={policyStyles.policy__indent}>(1) 이용자가 서비스를 이용하는 기간에 한하여 보유 및 이용. 다만, 아래의 경우는 제외</span>
                <br />
                <span className={policyStyles.policy__indent}>(2) 법령에서 정하는 경우 해당 기간까지 보유(상세 사항은 회사의 개인정보처리방침에 기재된 바에 따름)</span>
                <br />
                - 서비스 제공을 위한 개인정보의 취급위탁
                <br />
                <br />
                ※ 수탁자 (주) 구글, 네이버, 카카오 취급위탁 업무 본인확인정보의 정확성 여부 확인(본인확인서비스 제공), 연계정보(CI)/중복가입확인정보(DI) 생성 및 전송, 서비스 관련 상담 및 불만 처리, 휴대폰인증보호 서비스, 이용자의 서비스 이용 선호도 분석정보 제공관련 시스템 구축 광고매체 연동 및 위탁영업 등 ※수탁자의 상세 개인정보 취급 위탁 내용은 각 수탁자가 정하는 절차와 방법에 따라 수탁자 홈페이지 등에 게시된 수탁자의 개인정보 처리방침 및 제3자 제공 동의 방침 등에 따릅니다.
                <br />
                <br />
                ※ 위 개인정보 수집 • 이용 및 취급위탁에 동의하지 않으실 경우, 서비스를 이용하실 수 없습니다.
                <br />
                <br />
                ※ 회사가 제공하는 서비스와 관련된 개인정보의 취급과 관련된 사항은, 회사의 개인정보처리방침(회사 홈페이지 www.cloudraw.kr )에 따릅니다.
              </h4>
          </section>
          <br />
          <br />
        </section>
      </Layout>
    );
  }