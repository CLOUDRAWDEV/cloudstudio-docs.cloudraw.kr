import React from "react"
import policyStyles from "../../scss/_policy.module.scss"

function RequiredPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <ul>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>ID</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>비밀번호</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>이메일</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>서비스 이용 기록</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>접속로그</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>쿠키</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>접속 IP 정보</h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *세부 항목은 개인정보 처리방침 본문에서 확인
            </h5>
        </section>
    )
}

export default RequiredPersonalInfo
