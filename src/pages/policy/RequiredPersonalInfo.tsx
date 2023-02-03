import React from "react"
import policyStyles from "../../scss/_policy.module.scss"

function RequiredPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <h5
                style={{ fontWeight: "normal" }}
            >{`ID, 비밀번호, 이메일, 서비스 이용 기록, 접속로그, 쿠키, 접속 IP 정보`}</h5>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *세부 항목은 개인정보 처리방침 본문에서 확인
            </h5>
        </section>
    )
}

export default RequiredPersonalInfo
