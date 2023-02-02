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
                    클라우드로(주)(이하 ‘회사’라 합니다)가 제공하는 클라우드
                    스튜디오(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과
                    같이 ‘회사’가 본인의 개인정보를 수집/이용하고, 개인정보의
                    취급을 위탁하는 것에 동의합니다.
                </h4>
                <br />
                <hr />
                <br />
                <br />
                <br />
                <br />
                <h2>개인정보 수집 이용 동의서</h2>
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
                <br />
                <br />
                <h2>개인정보 취급 위탁</h2>
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
            </section>
        </Layout>
    )
}
