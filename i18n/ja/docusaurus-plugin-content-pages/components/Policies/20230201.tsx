import React from "react"
import policyStyles from "@site/src/scss/_policy.module.scss"
import Labeling from "@site/src/pages/policy/Labeling"
// import RequiredPersonalInfo from "@site/src/pages/policy/RequiredPersonalInfo"
import RequiredPersonalInfo from "../../policy/RequiredPersonalInfo"
// import OptionalPersonalInfo from "@site/src/pages/policy/OptionalPersonalInfo"
import OptionalPersonalInfo from "../../policy/OptionalPersonalInfo"

function Policy20240401() {
    return (
        <>
            <section className={policyStyles.policy}>
                <h1>개인정보 처리방침</h1>
                <br />
                <hr />
                <br />
                <h4>
                    株式会社Cloudraw(以下"会社")は情報主体の自由と権利保護のために「個人情報保護法」及び関連法令が定めるところを遵守し、適法に個人情報を処理し安全に管理しております。
                    <br />
                    このため「個人情報保護法」第30条に従い、情報主体に対して個人情報処理に関する手続き及び基準を案内し、これに関連する苦情を迅速かつ円滑に処理できるように以下の通り個人情報処理方針を策定・公開します。
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
                            title={"必須個人情報収集"}
                            contents={<RequiredPersonalInfo />}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914l3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"
                            }
                            width={24}
                            height={24}
                            title={"選択個人情報収集"}
                            contents={<OptionalPersonalInfo />}
                        />
                        <Labeling
                            xmlns={"http://www.w3.org/2000/svg"}
                            d={
                                "M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z"
                            }
                            width={24}
                            height={24}
                            title={"個人情報の保有期間"}
                            contents={
                                <>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        会員退会時まで
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        ただし、関連法令に定めがある場合には、その法律で定められた期間中保持および利用可能
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
                            title={"個人情報の処理目的"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        1.
                                        サービス利用に伴う本人確認および通知事項の伝達、サービス関連の相談および苦情処理など、円滑な意思疎通の確保
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        2.
                                        利用サービス情報などの分析および細分化を通じた利用者のサービス利用好みの分析
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        3. サービス利用に伴う費用の決済
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        4. API連携を通じた管理サービスの提供
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        5.
                                        取引履歴の確認、不正取引の確認、決済キャンセル金額の返金
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *詳細項目は個人情報処理方針本文にて確認
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
                            title={"個人情報処理の委託"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>処理委託業者 : </strong>
                                        ブートペイ
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>委託業務及び利用目的 : </strong>{" "}
                                        費用決済代行
                                    </h5>
                                    <h5
                                        style={{
                                            fontWeight: "normal",
                                            lineHeight: "22px",
                                        }}
                                    >
                                        <strong>保有および利用期間 :</strong>{" "}
                                        会員退会時、もしくは委託契約終了時まで
                                        ただし、関係法令に定めがある場合は、該当します
                                        法律で定められた期間、保有及び利用可能
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
                            title={"権益侵害の救済方法"}
                            contents={
                                <div>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>
                                            個人情報保護責任者(CPO) :{" "}
                                        </strong>
                                        HyunBae Moon
                                    </h5>
                                    <h5 style={{ fontWeight: "normal" }}>
                                        <strong>イーメール :</strong>{" "}
                                        hbmoon@cloudraw.kr{" "}
                                    </h5>
                                    <h5
                                        style={{
                                            color: "#868686",
                                            fontWeight: "normal",
                                        }}
                                    >
                                        *会社情報主体の個人情報自己決定権を保障し、個人情報侵害による相談および被害救済のために努力しており、
                                        申告や相談が必要な場合は下記の担当部署にご連絡お願いします。
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
                <h2>個人情報の処理目的及び保有期間</h2>
                <br />
                <table>
                    <thead>
                        <th>区分</th>
                        <th>収集項目</th>
                        <th>収集目的</th>
                        <th>保有及び利用期間</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan={2}>必須</th>
                            <td>ID, パスワード, イーメール</td>
                            <td>
                                サービス利用に伴う本人確認及び通知事項の伝達、サービスに関連する相談及び苦情処理等の円滑なコミュニケーション経路の確保
                            </td>
                            <td rowSpan={7} style={{ textAlign: "center" }}>
                                <strong>会員退会時まで</strong>
                                <br />
                                ただし、関係法令に定めがある場合は、該当法律で定められた期間内に保有及び利用可能
                            </td>
                        </tr>
                        <tr>
                            <td>
                                サービス利用記録、接続ログ、クッキー、接続IP情報
                            </td>
                            <td>
                                利用サービス情報等に関する分析及びセグメンテーションを通じた利用者のサービス利用嗜好の分析
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan={5}>選択</th>
                            <td>
                                クレジットカード情報（カード会社名、カード番号、有効期限）
                            </td>
                            <td>サービス利用に伴う費用の決済</td>
                        </tr>
                        <tr>
                            <td>
                                MS Azure CSP サービスクレデンシャル情報 (Tenant
                                ID, Subscription ID, Service Principal ID,
                                Service Principal Key)
                            </td>
                            <td> API連携を通じた管理サービスの提供</td>
                        </tr>
                        <tr>
                            <td>
                                AWS CSP サービスクレデンシャル情報(Access Key,
                                Secret Key)
                            </td>
                            <td>API連携を通じた管理サービスの提供</td>
                        </tr>
                        <tr>
                            <td>
                                Naver Cloud CSP サービスクレデンシャル情報
                                (Access Key, Secret Key)
                            </td>
                            <td> API連携を通じた管理サービスの提供</td>
                        </tr>
                        <tr>
                            <td>決済記録</td>
                            <td>
                                取引履歴の確認、不正取引の確認、決済取消額の返金
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    Cloudrawは、会員登録のために必要最小限の個人情報を収集します。個人情報の収集に同意しないことも可能ですが、その場合は会員登録が制限されることがあります。
                </h4>
                <br />
                <br />
                <br />
                {/* 개인정보 처리의 위탁 */}
                <h2>個人情報処理の委託</h2>
                <br />
                <table>
                    <thead>
                        <th>処理委託業者</th>
                        <th>委託業務及び利用目的</th>
                        <th>保有及び利用期間</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ブートペイ</td>
                            <td>費用決済代行</td>
                            <td style={{ textAlign: "center" }}>
                                <strong>
                                    会員退会時または委託契約終了時まで
                                </strong>
                                <br />
                                ただし、関係法令に定めがある場合は、当該法律で定められた期間中保持および利用可能
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <br />
                {/* 권익침해 구제방법 */}
                <h2>権益侵害の救済方法</h2>
                <h4>
                    会社は情報主体の個人情報自己決定権を保証し、
                    個人情報侵害による相談及び被害救済に努めており、
                    通報や相談が必要な場合は、以下の担当部門にご連絡ください。
                </h4>
                <br />
                <table>
                    <thead>
                        <th style={{ width: "100vh" }} colSpan={2}>
                            個人情報保護責任者(CPO)
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>名前</td>
                            <td>HyunBae Moon</td>
                        </tr>
                        <tr>
                            <td>職責</td>
                            <td>本部長</td>
                        </tr>
                        <tr>
                            <td>イーメール</td>
                            <td>hbmoon@cloudraw.kr</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    情報主体は個人情報侵害による救済を受けるために、
                    個人情報紛争調整委員会、韓国インターネット振興院
                    個人情報侵害通報センターなどに紛争解決や相談などを申請することができます。
                    これ以外にも、その他の個人情報侵害の通報や相談については、
                    以下の機関にお問い合わせください。
                </h4>
                <br />
                <ul>
                    <li>
                        個人情報紛争調整委員会 : (市外局番なし) 1833-6972
                        (www.kopico.go.kr)
                    </li>
                    <li>
                        個人情報侵害通報センター : (市外局番なし) 118
                        (privacy.kisa.or.kr)
                    </li>
                    <li>大検察庁 : (市外局番なし) 1301 (www.spo.go.kr)</li>
                    <li>警察庁 : (市外局番なし) 182 (ecrm.cyber.go.kr)</li>
                </ul>
                <br />
                <br />
                <h4>
                    「個人情報保護法」第35条(個人情報の閲覧)、
                    第36条(個人情報の訂正・削除)、第37条(個人情報の処理停止
                    など)の規定に基づく要求に対し、公的機関の長が行った処分
                    または不作為により権利または利益の侵害を受けた者は、
                    行政審判法が定めるところにより行政審判を請求することができます。
                </h4>
                <ul>
                    <li>
                        中央行政審判委員会 : (市外局番なし) 110
                        (www.simpan.go.kr)
                    </li>
                </ul>

                <br />
                <br />
                <br />
                {/* 개인정보 처리방침의 변경 */}
                <h2>個人情報処理方針の変更</h2>
                <h4>この個人情報処理方針は2023年2月1日から適用されます。</h4>
                <br />
            </section>
        </>
    )
}

export default Policy20240401
