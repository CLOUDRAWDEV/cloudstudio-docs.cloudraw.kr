import React, { useState } from "react"
import Layout from "@theme/Layout"
import policyStyles from "../../scss/_policy.module.scss"
import Labeling from "./Labeling"
import RequiredPersonalInfo from "./RequiredPersonalInfo"
import OptionalPersonalInfo from "./OptionalPersonalInfo"

export default function Personal() {
    return (
        <Layout title="Policy Personal" description="Policy Personal Page">
            <section className={policyStyles.policy}>
                <h1>개인정보 처리방침</h1>
                <br />
                <hr />
                <br />
                <h4>
                    주식회사 클라우드로(이하 "회사")는 정보주체의 자유와 권리
                    보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를
                    준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고
                    있습니다.
                    <br />
                    이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보
                    처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을
                    신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
                    개인정보 처리방침을 수립·공개합니다.
                </h4>
                <br />
                <br />

                {/* 라벨링 영역입니다. */}
                <section className={policyStyles.policy__labeling}>
                    <section className={policyStyles.policy__labeling__wrap}>
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z"
                            }
                            width={24}
                            height={24}
                            title={"필수 개인정보 수집"}
                            contents={<RequiredPersonalInfo />}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"
                            }
                            width={24}
                            height={24}
                            title={"선택 개인정보 수집"}
                            contents={<OptionalPersonalInfo/>}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"
                            }
                            width={24}
                            height={24}
                            title={"개인정보의 보유 기간"}
                            contents={
                            <>
                                <h5
                                    style={{ fontWeight: "normal" }}
                                >회원 탈퇴 시 까지</h5>
                                <h5 style={{ fontWeight: "normal" }}>
                                    단, 관계법령에 정함이 있는 경우 해당 법률에서 정한 기간동안 보유 및 이용 가능</h5>
                            </>

                            }
                        />
                    </section>
                    <section className={policyStyles.policy__labeling__wrap}>
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
                            }
                            width={24}
                            height={24}
                            title={"개인정보 처리목적"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        1. 서비스 이용에 따른 본인 확인 및
                                        고지사항 전달, 서비스 관련 상담 및 불만
                                        처리 등 원활한 의사소통 경로의 확보
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        2. 이용 서비스 정보 등에 대한 분석 및
                                        세분화를 통한 이용자의 서비스 이용
                                        선호도 분석
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        3. 서비스 이용에 따른 비용 결제
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        4. API 연동을 통한 관리 서비스 제공
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        5. 거래 내역 확인, 부정거래 확인, 결제
                                        취소 금액 환불
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *세부 항목은 개인정보 처리방침 본문에서
                                        확인
                                    </h5>
                                </div>
                            }
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z"
                            }
                            width={24}
                            height={24}
                            title={"개인정보 처리의 위탁"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>처리 위탁업체 : </strong>부트페이
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>위탁업무 및 이용 목적 : </strong>{" "}
                                        비용 결제 대행
                                    </h5>
                                    <h5 style={{ fontWeight: "normal", lineHeight:"22px" }}>
                                        <strong>보유 및 이용기간 :</strong> 회원
                                        탈퇴 시 혹은 위탁계약 종료 시 까지 단,
                                        관계법령에 정함이 있는 경우 해당
                                        법률에서 정한 기간동안 보유 및 이용 가능
                                    </h5>
                                </div>
                            }
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"
                            }
                            width={24}
                            height={24}
                            title={"권익침해 구제방법"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>
                                            개인정보보호책임자(CPO) :{" "}
                                        </strong>
                                        문현배 본부장
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>이메일 :</strong>
                                        {" "}hbmoon@cloudraw.kr{" "}
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *회사 정보주체의 개인정보자기결정권을
                                        보장하고, 개인정보침해로 인한 상담 및
                                        피해 구제를 위해 노력하고 있으며, 신고나
                                        상담이 필요한 경우 아래의 담당부서로
                                        연락해 주시기 바랍니다.
                                    </h5>
                                </div>
                            }
                        />
                    </section>
                </section>

                <br />
                <br />
                <br />

                {/* 개인정보의 처리목적 및 보유기간 */}
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
                                MS Azure CSP 서비스 크레덴셜 정보 (Tenant ID,
                                Subscription ID, Service Principal ID, Service
                                Principal Key)
                            </td>
                            <td> API 연동을 통한 관리 서비스 제공</td>
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
                                Naver Cloud CSP 서비스 크레덴셜 정보 (Access Key,
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
                {/* 개인정보 처리의 위탁 */}
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
                <br />
                {/* 권익침해 구제방법 */}
                <h2>권익침해 구제방법</h2>
                <h4>
                    회사 정보주체의 개인정보자기결정권을 보장하고,
                    개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고
                    있으며, 신고나 상담이 필요한 경우 아래의 담당부서로 연락해
                    주시기 바랍니다.
                </h4>
                <br />
                <table>
                    <thead>
                        <th style={{ width: "100vh" }} colSpan={2}>
                            개인정보보호책임자(CPO)
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>문현배</td>
                        </tr>
                        <tr>
                            <td>직책</td>
                            <td>본부장</td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>hbmoon@cloudraw.kr</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여
                    개인정보분쟁조정위원회, 한국인터넷진흥원
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                    있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                    아래의 기관에 문의하시기 바랍니다.
                </h4>
                <br />
                <ul>
                    <li>
                        개인정보분쟁조정위원회 : (국번없이) 1833-6972
                        (www.kopico.go.kr)
                    </li>
                    <li>
                        개인정보침해신고센터 : (국번없이) 118
                        (privacy.kisa.or.kr)
                    </li>
                    <li>대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                    <li>경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
                </ul>
                <br />
                <br />
                <h4>
                    「개인정보 보호법」 제35조(개인정보의 열람),
                    제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지
                    등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분
                    또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
                    행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                </h4>
                <ul>
                    <li>
                        중앙행정심판위원회 : (국번없이) 110 (www.simpan.go.kr)
                    </li>
                </ul>

                <br />
                <br />
                <br />
                {/* 개인정보 처리방침의 변경 */}
                <h2>개인정보 처리방침의 변경</h2>
                <h4>이 개인정보 처리방침은 2023. 2. 1부터 적용됩니다.</h4>
                <br />
            </section>
        </Layout>
    )
}
