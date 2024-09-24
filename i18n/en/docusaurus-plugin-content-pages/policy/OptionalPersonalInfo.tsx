import React from "react"
import policyStyles from "/src/scss/_policy.module.scss"

function OptionalPersonalInfo() {
    return (
        <section className={policyStyles.policy__labelingIcon}>
            <ul>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Credit Card Information</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        MS Azure CSP Credential Information
                    </h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        AWS CSP Credential Information
                    </h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>
                        Naver Cloud CSP Credential Information
                    </h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *For detailed items, please refer to the main text of the Privacy Policy.
            </h5>
        </section>
    )
}

export default OptionalPersonalInfo
