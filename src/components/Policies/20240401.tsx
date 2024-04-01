import React from "react"
import policyStyles from "@site/src/scss/_policy.module.scss"
import Labeling from "@site/src/pages/policy/Labeling"
import RequiredPersonalInfo from "@site/src/pages/policy/RequiredPersonalInfo"
import OptionalPersonalInfo from "@site/src/pages/policy/OptionalPersonalInfo"

function Policy20240401() {
    return (
        <>
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
                            contents={<OptionalPersonalInfo />}
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
                                    <h5 style={{ fontWeight: "normal", lineHeight: "22px" }}>
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
                <h4>1. 서비스 회원가입 과정에서 아래와 같은 개인정보를 수집합니다.</h4>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "10%" }}>구분</th>
                        <th style={{ width: "20%" }}>수집항목</th>
                        <th style={{ width: "40%" }}>수집 목적</th>
                        <th style={{ width: "30%" }}>보유 및 이용기간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th rowSpan={3}>필수</th>
                        <td style={{ textAlign: "center" }}>ID</td>
                        <td rowSpan={3}>
                            서비스 이용에 따른 본인 확인 및 고지사항 전달,
                            서비스 관련 상담 및 불만 처리 등 원활한 의사소통
                            경로의 확보
                        </td>
                        <td rowSpan={3} style={{ textAlign: "center" }}>
                            <strong>회원 탈퇴 시 까지</strong>
                            <br />
                            단, 관계법령에 정함이 있는 경우 해당 법률에서
                            정한 기간동안 보유 및 이용 가능
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>이메일</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>비밀번호</td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <h4>2. 결제 수단 등록시 아래와 같은 개인정보를 수집합니다.</h4>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "20%" }}>수집항목</th>
                        <th style={{ width: "50%" }}>수집 목적</th>
                        <th style={{ width: "30%" }}>보유 및 이용기간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            생년월일/사업자등록번호
                        </td>
                        <td>결제 수단 소유자 확인</td>
                        <td rowSpan={3} style={{ textAlign: "center" }}>
                            <strong>회원 탈퇴 시 까지</strong>
                            <br />
                            단, 관계법령에 정함이 있는 경우 해당 법률에서
                            정한 기간동안 보유 및 이용 가능
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            결제수단 정보
                            <br />
                            (신용카드 회사명, <br />신용카드 번호, <br />신용카드 유효 기간)
                        </td>
                        <td>서비스 이용에 따른 비용 결제</td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <h4>3. 크레덴셜 등록시 아래와 같은 개인정보를 수집합니다.</h4>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "20%" }}>수집항목</th>
                        <th style={{ width: "50%" }}>수집 목적</th>
                        <th style={{ width: "30%" }}>보유 및 이용기간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            MS Azure 크레덴셜 정보 <br />
                            (Tenant ID,<br />
                            Subscription ID, <br />
                            Service Principal ID, <br />
                            Service Principal Key)
                        </td>
                        <td> MS Azure 서비스 API 연동을 통한 관리 서비스 제공</td>
                        <td rowSpan={3} style={{ textAlign: "center" }}>
                            <strong>삭제시 혹은 회원 탈퇴 시 까지</strong>
                            <br />
                            단, 관계법령에 정함이 있는 경우 해당 법률에서
                            정한 기간동안 보유 및 이용 가능
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            AWS 크레덴셜 정보<br />
                            (Access Key, <br />
                            Secret Key)
                        </td>
                        <td>AWS API 서비스 연동을 통한 관리 서비스 제공</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center" }}>
                            NCloud 크레덴셜 정보 <br />
                            (Access Key,<br />
                            Secret Key)
                        </td>
                        <td> NCloud 서비스 API 연동을 통한 관리 서비스 제공</td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <h4>4. 서비스 이용과정에서 아래와 같은 정보가 자동으로 생성되거나 추가로 수집될 수 있습니다.</h4>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "40%" }}>수집항목</th>
                        <th style={{ width: "60%" }}>수집 목적</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보
                        </td>
                        <td>
                            이용 서비스 정보 등에 대한 분석 및 세분화를 통한
                            이용자의 서비스 이용 선호도 분석
                        </td>
                    </tr>
                    <tr>
                        <td>결제 기록</td>
                        <td>
                            거래내역 확인, 부정거래 확인, 결제취소 금액 환불
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
                <h4>
                    회사는 서비스 제공에 관한 계약을 이행하고 이용자의 편의 증진 등을 위하여 개인정보 처리업무를 외부 전문업체에게 위탁하고 있으며, 수탁자에 대해서는 “위·수탁계약서” 등을 통하여 관련 법규 및 지침의 준수, 정보보호 및 비밀유지, 제3자 제공 금지, 사고 시 책임부담, 위탁기간 종료 즉시 개인정보의 반납/파기 의무 등 책임에 관한 사항을 규정하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                </h4>
                <br />
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "20%" }}>처리 위탁업체</th>
                        <th style={{ width: "20%" }}>위탁업무 및 이용 목적</th>
                        <th style={{ width: "20%" }}>수집항목</th>
                        <th style={{ width: "40%" }}>보유 및 이용기간</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ textAlign: "center" }}>부트페이</td>
                        <td style={{ textAlign: "center" }}>비용 결제 대행</td>
                        <td style={{ textAlign: "center" }}>결제수단 정보   <br/>
                            (신용카드 회사명, <br/>
                            신용카드 번호,<br/>
                            신용카드 유효 기간)</td>
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
                <h2>개인정보의 파기</h2>
                <h4>
                    이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
                    <br />
                    개인정보 파기절차 및 방법은 다음과 같습니다.
                    <br />
                    <br />
                    1. 파기절차
                    <br />
                    이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간
                    저장된 후 파기됩니다.
                    동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
                    <br />
                    <br />
                    2. 파기방법
                    <br />
                    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                    <br />
                    전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                </h4>
                <hr/>
                <br />
                <h4>
                전자상거래 등에서의 소비자 보호에 관한 법률, 전자문서 및 전자거래 기본법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는 경우는 아래와 같습니다. 회사는 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며, 본 정보를 다른 목적으로는 절대 이용하지 않습니다.
                <br />
                <br />
                전자상거래 등에서 소비자 보호에 관한 법률
                <br />
                계약 또는 청약철회 등에 관한 기록 : 5년 보관
                <br />
                대금결제 및 재화 등의 공급에 관한 기록 : 5년 보관
                <br />
                소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 보관
                <br />
                <br />
                전자문서 및 전자거래 기본법
                <br />
                공인전자주소를 통한 전자문서 유통에 관한 기록 : 10년 보관
                <br />
                <br />
                통신비밀보호법
                <br />
                로그인 기록 : 3개월
                </h4>
                <br />
                <br />
                <br />
                <h2>정보주체의 권리</h2>

                <h4>
                    이용자는 서비스에서 보유하고 있는 자신의 개인정보를 제공할 것을 요청할 권리가 있습니다.
                    <br />
                    개인 정보에 접근하려면 “마이페이지”를 클릭하면 개인정보 또는 기본 설정을 업데이트 할 있습니다.
                    <br />
                    이용자는 자신의 개인정보를 수정, 차단, 완료 및 삭제하고, 사용을 제한하고, 데이터를 다른 조직으로 이관하도록 요청할 권리가 있습니다.
                    <br />
                    이용자는 자신의 개인정보 처리에 관한 추가 정보를 요청할 권리가 있습니다. 또한, 일부 상황에서 서비스의 데이터 처리에
                    이의를 제기할 권리가 있으며 데이터 처리 동의를 요청한 경우 동의를 철회할 권리가 있습니다.
                    <br />
                    <br />
                    위에 명시된 권한에 대한 지원을 원하면 아래 개인정보담당자(hbmoon@cloudraw.kr)에게 문의해 주시기 바랍니다.
                    <br />
                </h4>

                <br />
                <br />
                <br />
                <h2>개인정보보호를 위한 노력</h2>

                <h4>
                    회사는 이용자의 개인정보보호를 위해 아래의 노력을 합니다.
                </h4>
                <br />
                <h4>
                    1. 개인정보보호 내부 관리계획 수립ㆍ시행
                    <br />
                    개인정보 보호책임자의 지정 등 개인정보 보호 조직의 구성 및 운영에 관한 사항 등을 포함하여 개인정보 내부관리계획을 수립하고, 매 년 내부관리계획을 잘 시행하고 있는지를 점검하고 있습니다.
                    <br />
                    <br />
                    2. 개인정보 암호화
                    <br />
                    회사는 비밀번호, 결제수단 등의 개인정보를 법령에서 요구하는 기준에 따라 암호화 처리하고 있으며, 중요한 데이터는 파일 및 전송 데이터를 암호화하는 등 별도의 보안 조치를 취하여 이용자의 개인정보를 보호하고 있습니다.
                    <br />
                    <br />
                    3. 해킹 등에 대비한 대책
                    <br />
                    회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있으며 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.
                    <br />
                    <br />
                    4. 개인정보보호전담기구의 운영
                    <br />
                    회사는 사내 개인정보보호전담기구 등을 통하여 회사 개인정보처리방침의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.
                    <br />
                    <br />
                    단, 이용자 본인의 부주의나 인터넷상의 문제로 ID, 비밀번호 등 개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.
                </h4>

                <br />
                <br />
                <br />
                {/* 권익침해 구제방법 */}
                <h2>권익침해 구제방법</h2>
                <h4>
                    회사 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며,
                    신고나 상담이 필요한 경우 아래의 담당부서로 연락해 주시기 바랍니다.
                </h4>
                <br />
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: "100vh" }} colSpan={2}>
                            개인정보보호책임자(CPO)
                        </th>
                    </tr>
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
                <h4>이 개인정보 처리방침은 2024. 4. 1부터 적용됩니다.</h4>
                <br />
            </section>
        </>
    )
}

export default Policy20240401
