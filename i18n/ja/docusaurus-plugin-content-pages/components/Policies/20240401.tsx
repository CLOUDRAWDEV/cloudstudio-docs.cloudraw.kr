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
                <h4>
                    1.
                    サービスの会員登録過程で、以下のような個人情報を収集します。
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>区分</th>
                            <th style={{ width: "20%" }}>収集項目</th>
                            <th style={{ width: "40%" }}>収集目的</th>
                            <th style={{ width: "30%" }}>保有及び利用期間</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan={3}>必須</th>
                            <td style={{ textAlign: "center" }}>ID</td>
                            <td rowSpan={3}>
                                サービス利用に伴う本人確認及び通知事項の伝達、サービスに関連する相談及び苦情処理等の円滑なコミュニケーション経路の確保
                            </td>
                            <td rowSpan={3} style={{ textAlign: "center" }}>
                                <strong>会員退会時まで</strong>
                                <br />
                                ただし、関係法令に定めがある場合は、該当法律で定められた期間内に保有及び利用可能
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>イーメール</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>パスワード</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>2. 決済手段登録時に以下のような個人情報を収集します。</h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>収集項目</th>
                            <th style={{ width: "50%" }}>収集目的</th>
                            <th style={{ width: "30%" }}>保有及び利用期間</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                生年月日/事業者登録番号
                            </td>
                            <td>決済手段の所有者確認</td>
                            <td rowSpan={3} style={{ textAlign: "center" }}>
                                <strong>会員退会時まで</strong>
                                <br />
                                ただし、関係法令に定めがある場合は、該当法律で定められた期間内に保有及び利用可能
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                決済手段情報
                                <br />
                                (クレジットカード会社名, <br />
                                クレジットカード番号, <br />
                                クレジットカード有効期限)
                            </td>
                            <td>サービス利用に伴う費用決済</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    3.
                    クレデンシャル登録の際、以下のような個人情報を収集します。
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>収集項目</th>
                            <th style={{ width: "50%" }}>収集目的</th>
                            <th style={{ width: "30%" }}>保有及び利用期間</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                MS Azure クレデンシャル情報 <br />
                                (Tenant ID,
                                <br />
                                Subscription ID, <br />
                                Service Principal ID, <br />
                                Service Principal Key)
                            </td>
                            <td> MS Azure API連動による管理サービスを提供</td>
                            <td rowSpan={3} style={{ textAlign: "center" }}>
                                <strong>削除時または会員退会時まで</strong>
                                <br />
                                ただし、関係法令に定めがある場合は、該当法律で定められた期間内に保有及び利用可能
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                AWS クレデンシャル情報
                                <br />
                                (Access Key, <br />
                                Secret Key)
                            </td>
                            <td>AWS API連動による管理サービスを提供</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                NCloud クレデンシャル情報 <br />
                                (Access Key,
                                <br />
                                Secret Key)
                            </td>
                            <td> NCloud API連動による管理サービスを提供</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    4.
                    サービス利用過程で以下のような情報が自動的に生成されたり、追加で収集されることがあります。
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "40%" }}>収集項目</th>
                            <th style={{ width: "60%" }}>収集目的</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                サービス利用記録、接続ログ、クッキー、接続IP情報
                            </td>
                            <td>
                                利用サービス情報などに関する分析および細分化を通じた
                                利用者のサービス利用好みの分析
                            </td>
                        </tr>
                        <tr>
                            <td>決済記録</td>
                            <td>
                                取引履歴確認、不正取引確認、決済キャンセル金額の返金
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    Cloudrawは会員登録のために必要最小限の個人情報を
                    収集します。個人情報収集に同意しない場合、会員登録が制限されることがあります。
                </h4>
                <br />
                <br />
                <br />
                {/* 개인정보 처리의 위탁 */}
                <h2>個人情報処理の委託</h2>
                <h4>
                    会社はサービス提供に関する契約を履行し、利用者の便宜を図るために、個人情報処理業務を外部専門業者に委託しており、受託者に対しては「委託契約書」などを通じて、
                    関連法規および指針の遵守、情報保護および秘密保持、第三者提供禁止、事故発生時の責任負担、委託期間終了時の個人情報の返却/破棄義務などの責任に関する事項を規定し、
                    受託者が個人情報を安全に処理しているかどうかを監督しています。
                </h4>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "20%" }}>処理委託業者</th>
                            <th style={{ width: "20%" }}>
                                委託業務及び利用目的
                            </th>
                            <th style={{ width: "20%" }}>収集項目</th>
                            <th style={{ width: "40%" }}>保有及び利用期間</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "center" }}>ブートペイ</td>
                            <td style={{ textAlign: "center" }}>
                                費用決済代行
                            </td>
                            <td style={{ textAlign: "center" }}>
                                決済手段情報 <br />
                                (クレジットカード会社名, <br />
                                クレジットカード番号,
                                <br />
                                クレジットカード有効期限)
                            </td>
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
                <h2>個人情報の破棄</h2>
                <h4>
                    利用者の個人情報は原則として、個人情報の収集および利用目的が達成された場合には、遅滞なく破棄します。
                    <br />
                    個人情報破棄手続きおよび方法は以下のとおりです。
                    <br />
                    <br />
                    1. 破棄手続き
                    <br />
                    利用者が会員登録などのために入力した情報は、目的が達成された後、別のDBに移され(紙の場合は別の書類棚)、
                    内部方針およびその他の関連法令による情報保護理由に従い、一定期間保存された後、破棄されます。この個人情報は法律による場合を除いて、
                    保持される以外の他の目的には利用されません。
                    <br />
                    <br />
                    2. 破棄方法
                    <br />
                    紙に出力された個人情報は、シュレッダーで粉砕するか、焼却によって破棄します。
                    <br />
                    電子的ファイル形式で保存された個人情報は、記録を再生できない技術的手段を用いて削除します。
                </h4>
                <hr />
                <br />
                <h4>
                    電子商取引等における消費者保護に関する法律、電子文書および
                    電子取引基本法、通信秘密保護法などの法令において、一定期間情報の
                    保管を規定する場合は以下のとおりです。会社はこの期間中、
                    法令の規定に従って個人情報を保管し、本情報を他の目的には
                    決して利用しません。
                    <br />
                    <br />
                    電子商取引等における消費者保護に関する法律
                    <br />
                    契約または申し込みの撤回等に関する記録：5年間保管
                    <br />
                    代金決済および商品等の供給に関する記録：5年間保管
                    <br />
                    消費者の不満または紛争処理に関する記録：3年間保管
                    <br />
                    <br />
                    電子文書および電子取引基本法
                    <br />
                    公認電子住所を通じた電子文書流通に関する記録：10年間保管
                    <br />
                    <br />
                    通信秘密保護法
                    <br />
                    ログイン記録：3か月
                </h4>
                <br />
                <br />
                <br />
                <h2>情報主体の権利</h2>

                <h4>
                    利用者は、サービスが保有している自分の個人情報を提供することを
                    要求する権利があります。
                    <br />
                    個人情報にアクセスするには、「マイページ」をクリックすると、
                    個人情報または基本設定を更新できます。
                    <br />
                    利用者は、自分の個人情報を修正、ブロック、完了、削除し、
                    利用を制限し、データを他の組織に移管するよう要求する権利があります。
                    <br />
                    利用者は、自分の個人情報の処理に関する追加情報を要求する権利があります。
                    また、特定の状況下では、サービスのデータ処理に異議を唱える権利があり、
                    データ処理に同意を求められた場合、同意を撤回する権利があります。
                    <br />
                    <br />
                    上記の権利に関するサポートが必要な場合は、以下の
                    個人情報担当者(hbmoon@cloudraw.kr)にお問い合わせください。
                    <br />
                </h4>

                <br />
                <br />
                <br />
                <h2>個人情報保護のための努力</h2>

                <h4>
                    会社は利用者の個人情報保護のために以下の努力をしています。
                </h4>
                <br />
                <h4>
                    1. 個人情報保護内部管理計画の策定・実施
                    <br />
                    個人情報保護責任者の指定など、個人情報保護組織の構成と運営に
                    関する事項を含む個人情報内部管理計画を策定し、毎年内部管理計画が
                    適切に実施されているかを点検しています。
                    <br />
                    <br />
                    2. 個人情報の暗号化
                    <br />
                    会社は、パスワード、決済手段などの個人情報を法律で要求される基準に
                    従って暗号化処理しており、重要なデータはファイルや転送データを
                    暗号化するなどの別のセキュリティ措置を講じて利用者の個人情報を
                    保護しています。
                    <br />
                    <br />
                    3. ハッキングなどに備えた対策
                    <br />
                    会社は、ハッキングやコンピュータウイルスによって会員の個人情報が
                    漏洩または損傷されるのを防ぐために最善を尽くしています。
                    個人情報の損傷に備えて資料を定期的にバックアップしており、
                    最新のウイルス対策プログラムを使用して利用者の個人情報や資料が
                    漏洩したり損傷しないように防止しており、暗号化通信などを通じて
                    ネットワーク上で個人情報を安全に送信できるようにし、その他の
                    システム的にセキュリティを確保するための可能なすべての技術的装置を
                    整えるよう努力しています。
                    <br />
                    <br />
                    4. 個人情報保護専任機関の運営
                    <br />
                    会社は社内の個人情報保護専任機関を通じて、会社の個人情報処理方針の
                    実施状況および担当者の遵守状況を確認し、問題が発見された場合は
                    直ちに修正し、改善できるよう努力しています。
                    <br />
                    <br />
                    ただし、利用者本人の不注意やインターネット上の問題によりID、パスワード
                    などの個人情報が漏洩して発生した問題について、会社は一切の責任を
                    負いません。
                </h4>

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
                        <tr>
                            <th style={{ width: "100vh" }} colSpan={2}>
                                個人情報保護責任者(CPO)
                            </th>
                        </tr>
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
