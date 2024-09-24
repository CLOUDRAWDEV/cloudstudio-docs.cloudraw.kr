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
                    <h5 style={{ fontWeight: "normal" }}>Password</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Email</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Service usage records</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Access logs</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Cookies</h5>
                </li>
                <li>
                    <h5 style={{ fontWeight: "normal" }}>Access IP information</h5>
                </li>
            </ul>
            <h5 style={{ color: "#868686", fontWeight: "normal" }}>
                *For detailed items, please refer to the main text of the Privacy Policy.
            </h5>
        </section>
    )
}

export default RequiredPersonalInfo
