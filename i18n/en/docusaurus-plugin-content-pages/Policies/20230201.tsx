import React from "react"
import policyStyles from "@site/src/scss/_policy.module.scss"
import Labeling from "@site/src/pages/policy/Labeling"
import RequiredPersonalInfo from "@site/src/pages/policy/RequiredPersonalInfo"
import OptionalPersonalInfo from "@site/src/pages/policy/OptionalPersonalInfo"
import Layout from "@theme/Layout"

function Policy20240401() {
    return (
        <>
            <section className={policyStyles.policy}>
                <h1>Privacy Policy</h1>
                <br />
                <hr />
                <br />
                <h4>
                Cloudraw Inc. (hereinafter referred to as "the Company") is committed to protecting the rights and freedoms of data subjects in accordance with the "Personal Information Protection Act" and related laws. We process personal information lawfully and manage it securely.
                <br />
                In accordance with Article 30 of the "Personal Information Protection Act," we provide data subjects with information about the procedures and criteria for processing personal information, and we establish and disclose this privacy policy to ensure that any related complaints can be addressed quickly and smoothly.
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
                            title={"Collection of Mandatory Personal Information"}
                            contents={<RequiredPersonalInfo />}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"
                            }
                            width={24}
                            height={24}
                            title={"Collection of Optional Personal Information"}
                            contents={<OptionalPersonalInfo />}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"
                            }
                            width={24}
                            height={24}
                            title={"Retention Period of Personal Information"}
                            contents={
                                <>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        Until membership cancellation
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        However, if specified by relevant laws, retention and use are permitted for the period defined by those laws
                                    </h5>
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
                            title={"Purpose of Personal Data Processing"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        1. Verification of identity related to service usage, delivery of notifications, and establishment of smooth communication channels for service-related inquiries and complaint handling.
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        2. Analysis and segmentation of information regarding the services used to assess user preferences for service usage.
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        3. Payment of fees associated with service usage.
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        4. Provision of management services through API integration.
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        5. Confirmation of transaction history, verification of fraudulent transactions, and refunds of canceled payments.
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *Details can be found in the main text of the Privacy Policy
                                        Confirm
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
                            title={"Outsourcing of Personal Data Processing"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>Processing subcontractor : </strong>
                                        Bootpay
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>
                                            Outsourced Services and Purpose of Use :{" "}
                                        </strong>{" "}
                                        Payment Processing Services
                                    </h5>
                                    <h5
                                        style={{
                                            fontWeight: "normal",
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <strong>Retention and Use Period :</strong> Member
                                        Until withdrawal or termination of the outsourcing contract; however, if there are provisions in relevant laws, it may be retained and used for the period specified in those laws.
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
                            title={"Remedies for Rights Infringement"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>
                                            Data Protection Officer(CPO) :{" "}
                                        </strong>
                                        Moon Hyun-bae Department Head
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>Email :</strong>{" "}
                                        hbmoon@cloudraw.kr{" "}
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *The company guarantees the data subject's right to self-determination regarding personal information and strives to provide consultation and remedies for damages caused by personal information breaches. If you need to report or seek consultation, please contact the department below.
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
                <h2>Purpose of Personal Information Processing and Retention Period</h2>
                <br />
                <table>
                    <thead>
                        <th>Category</th>
                        <th>Collected Items</th>
                        <th>Purpose of Collection</th>
                        <th>Retention and Usage Period</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan={2}>Essential</th>
                            <td>ID, Password, Email</td>
                            <td>
                            Verification of identity for service usage, delivery of notifications, ensuring smooth communication for service-related inquiries and complaint handling.
                            </td>
                            <td rowSpan={7} style={{ textAlign: "center" }}>
                                <strong>Until Membership Withdrawal</strong>
                                <br />
                                However, if stipulated by relevant laws, retention and use are permitted for the period specified by those laws.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Service usage records, access logs, cookies, access IP information
                            </td>
                            <td>
                                Analysis of service usage information and segmentation to assess user preferences in service utilization.
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan={5}>Select</th>
                            <td>
                                Credit card information (card issuer, card number, expiration date)
                            </td>
                            <td>Payment for services rendered</td>
                        </tr>
                        <tr>
                            <td>
                                MS Azure CSP service credential information (Tenant ID, Subscription ID, Service Principal ID, Service Principal Key)
                            </td>
                            <td> Provision of management services through API integration</td>
                        </tr>
                        <tr>
                            <td>
                                AWS CSP service credential information (Access Key, Secret Key)
                            </td>
                            <td>Providing management services through API integration</td>
                        </tr>
                        <tr>
                            <td>
                                Naver Cloud CSP credential information (Access Key, Secret Key)
                            </td>
                            <td> Providing management services through API integration</td>
                        </tr>
                        <tr>
                            <td>Payment records</td>
                            <td>
                                Transaction history verification, fraudulent transaction verification, and payment cancellation amount
                                Refund
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    Cloudraw collects the minimum personal information necessary for membership registration. You may choose not to consent to the collection of personal information; however, in such cases, your registration may be restricted.
                </h4>
                <br />
                <br />
                <br />
                {/* 개인정보 처리의 위탁 */}
                <h2>Outsourcing of Personal Data Processing</h2>
                <br />
                <table>
                    <thead>
                        <th>Processing subcontractor</th>
                        <th>Outsourced Services and Purpose of Use</th>
                        <th>Retention and Use Period</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bootpay</td>
                            <td>Payment Processing Services</td>
                            <td style={{ textAlign: "center" }}>
                                <strong>
                                    Until the member withdraws or the outsourcing contract ends
                                </strong>
                                <br />
                                However, if stipulated by relevant laws, retention and use are permitted for the period specified by those laws.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                {/* 권익침해 구제방법 */}
                <h2>Remedies for Rights Infringement</h2>
                <h4>
                    The company guarantees the data subjects' right to self-determination regarding their personal information and strives to address inquiries and provide remedies for damages caused by personal data breaches. If you need to report an issue or seek advice, please contact the department listed below.
                </h4>
                <br />
                <table>
                    <thead>
                        <th style={{ width: "100vh" }} colSpan={2}>
                            Data Protection Officer(CPO)
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Moon Hyun-bae</td>
                        </tr>
                        <tr>
                            <td>Position</td>
                            <td>Department Head</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>hbmoon@cloudraw.kr</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    The data subject can seek redress for personal information breaches by applying for dispute resolution or consultation with the Personal Information Dispute Mediation Committee, the Korea Internet & Security Agency's Personal Information Violation Reporting Center, etc. For other reports or consultations regarding personal information breaches, please contact the institutions listed below.
                </h4>
                <br />
                <ul>
                    <li>
                        Personal Information Dispute Mediation Committee: 1833-6972 (no area code) (www.kopico.go.kr)
                    </li>
                    <li>
                        Personal Information Violation Reporting Center: 118 (no area code) (privacy.kisa.or.kr)
                    </li>
                    <li>Supreme Prosecutors' Office: 1301 (no area code) (www.spo.go.kr)</li>
                    <li>National Police Agency: 182 (no area code) (ecrm.cyber.go.kr)</li>
                </ul>
                <br />
                <br />
                <h4>
                    Individuals whose rights or interests have been infringed due to actions or omissions by the head of a public institution in response to requests under Articles 35 (Access to Personal Information), 36 (Correction and Deletion of Personal Information), and 37 (Suspension of Processing of Personal Information) of the Personal Information Protection Act may file an administrative appeal in accordance with the provisions of the Administrative Appeals Act.
                </h4>
                <ul>
                    <li>
                        Central Administrative Appeals Commission: (Toll-free) 110 (www.simpan.go.kr)
                    </li>
                </ul>

                <br />
                <br />
                <br />
                {/* 개인정보 처리방침의 변경 */}
                <h2>Changes to the Privacy Policy</h2>
                <h4>This Privacy Policy is effective as of February 1, 2023.</h4>
                <br />
            </section>
        </>
    )
}

export default Policy20240401
