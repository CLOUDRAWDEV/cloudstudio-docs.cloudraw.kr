import React from "react"
import policyStyles from "/src/scss/_policy.module.scss"

function RequiredPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <ul>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>ID</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>パスワード</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>イーメール</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>サービス利用記録</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>接続ログ</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>クッキー</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>接続IP情報</h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *詳細項目は個人情報処理方針本文にて確認
            </h5>
        </section>
    )
}

export default RequiredPersonalInfo
