import React from "react"
import policyStyles from "../../scss/_policy.module.scss"

function OptionalPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <ul>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>신용카드 정보</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>MS Azure CSP 서비스 크레덴셜 정보</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>AWS CSP 서비스 크레덴셜 정보</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Naver Cloud CSP 서비스 크레덴셜 정보</h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *세부 항목은 개인정보 처리방침 본문에서 확인
            </h5>
        </section>
    )
}

export default OptionalPersonalInfo
