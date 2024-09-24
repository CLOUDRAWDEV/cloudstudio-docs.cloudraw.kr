import React from "react"
import policyStyles from "/src/scss/_policy.module.scss"

function OptionalPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <ul>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        クレジットカード情報
                    </h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        MS Azure CSP サービスクレデンシャル情報
                    </h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        AWS CSP サービスクレデンシャル情報
                    </h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        Naver Cloud CSP サービスクレデンシャル情報
                    </h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *詳細項目は個人情報処理方針本文にて確認
            </h5>
        </section>
    )
}

export default OptionalPersonalInfo
