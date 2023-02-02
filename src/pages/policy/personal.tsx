import React from "react"
import Layout from "@theme/Layout"
import policyStyles from "../../scss/_policy.module.scss"

export default function Personal() {
    return (
        <Layout title="Policy_Personal" description="Policy_Personal Page">
            <section className={policyStyles.policy}>
                <h1>개인정보처리방침</h1>
                <br />
                <hr />
                <br />
                <h4>
                    주식회사 클라우드로(이하 "회사")는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및
                    관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고
                    있습니다.<br />이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한
                    절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
                    위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
                </h4>
                <br />
                <br />
                <h2>개인정보의 처리목적 및 보유기간</h2>
                <br />
                <table>
                    <thead>
                    <th>구분</th>
                    <th>수집항목</th>
                    <th>수집 목적</th>
                    <th>보유 및 이용기간</th>
                    </thead>
                    <tbody>
                    <tr>
                        <th rowSpan={2}>필수</th>
                        <td>ID, 비밀번호, 이메일</td>
                        <td>
                            서비스 이용에 따른 본인 확인 및 고지사항 전달,
                            서비스 관련 상담 및 불만 처리 등 원활한 의사소통
                            경로의 확보
                        </td>
                        <td rowSpan={7} style={{ textAlign: "center" }}>
                            <strong>회원 탈퇴 시 까지</strong>
                            <br />
                            단, 관계법령에 정함이 있는 경우 해당 법률에서
                            정한 기간동안 보유 및 이용 가능
                        </td>
                    </tr>
                    <tr>
                        <td>
                            서비스 이용 기록, 접속로그, 쿠키, 접속 IP 정보
                        </td>
                        <td>
                            이용 서비스 정보 등에 대한 분석 및 세분화를 통한
                            이용자의 서비스 이용 선호도 분석
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan={5}>선택</th>
                        <td>
                            신용카드 정보(카드 회사명, 카드 번호, 유효 기간)
                        </td>
                        <td>서비스 이용에 따른 비용 결제</td>
                    </tr>
                    <tr>
                        <td>
                            AWS CSP 서비스 크레덴셜 정보(Access Key, Secret
                            Key)
                        </td>
                        <td>API 연동을 통한 관리 서비스 제공</td>
                    </tr>
                    <tr>
                        <td>
                            MS Azure CSP 서비스 크레덴셜 정보 (Tenant ID,
                            Subscription ID, Service Principal ID, Service
                            Principal Key)
                        </td>
                        <td> API 연동을 통한 관리 서비스 제공</td>
                    </tr>
                    <tr>
                        <td>
                            N-Cloud CSP 서비스 크레덴셜 정보 (Access Key,
                            Secret Key)
                        </td>
                        <td> API 연동을 통한 관리 서비스 제공</td>
                    </tr>
                    <tr>
                        <td>결제 기록</td>
                        <td>
                            거래 내역 확인, 부정거래 확인, 결제 취소 금액
                            환불
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    클라우드로는 회원가입을 위해 필요한 최소한의 개인정보를
                    수집합니다. 개인정보 수집에 동의하지 않을 수 있으나 이 경우
                    회원가입이 제한될 수 있습니다.
                </h4>
                <br />
                <br />
                <h2>개인정보 처리의 위탁</h2>
                <br />
                <table>
                    <thead>
                    <th>처리 위탁업체</th>
                    <th>위탁업무 및 이용 목적</th>
                    <th>보유 및 이용기간</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>부트페이</td>
                        <td>비용 결제 대행</td>
                        <td style={{ textAlign: "center" }}>
                            <strong>
                                회원 탈퇴 시 혹은 위탁계약 종료 시 까지
                            </strong>
                            <br />
                            단, 관계법령에 정함이 있는 경우 해당 법률에서
                            정한 기간동안 보유 및 이용 가능
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <h2>권익침해 구제방법</h2>
                <h4>
                    회사 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 아래의
                    담당부서로 연락해 주시기 바랍니다.
                </h4>
                <table>
                    <thead>
                    <th colSpan={2}>개인정보보호책임자(CPO)</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>이름</td>
                        <td>박상규</td>
                    </tr>
                    <tr>
                        <td>직책</td>
                        <td>부대표</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>skpark@cloudraw.kr</td>
                    </tr>
                    </tbody>
                </table>

                <h4> 정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
                    한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할
                    수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에
                    문의하시기 바랍니다.</h4>
                <ul>
                    <li>
                        개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
                    </li>
                    <li>
                        개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                    </li>
                    <li>
                        대검찰청 : (국번없이) 1301 (www.spo.go.kr)
                    </li>
                    <li>
                        경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                    </li>

                </ul>
                <h4>
                    「개인정보 보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제),
                    제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한
                    처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는
                    바에 따라 행정심판을 청구할 수 있습니다.
                </h4>
                <ul>
                    <li>
                        중앙행정심판위원회 : (국번없이) 110 (www.simpan.go.kr)
                    </li>

                </ul>


                <br />
                <br />
                <h2>개인정보 처리방침의 변경</h2>
                <h4>
                    이 개인정보 처리방침은 2023. 2. 1부터 적용됩니다.
                </h4>
                <br />
            </section>
        </Layout>
    )
}
