import React, { useEffect, useState } from "react"
import policyStyles from "@site/src/scss/_policy.module.scss"
import Policy20240401 from "../Policies/20240401"
import Policy20230201 from "../Policies/20230201"
import Layout from "@theme/Layout"

export default function Personal() {
    const [current, setCurrent] = useState("20240401")
    const [policyComponent, setPolicyComponent] = useState(null)
    useEffect(() => {
        switch (current) {
            case "20240401":
                setPolicyComponent(<Policy20240401/>)
                break
            case "20230201":
                setPolicyComponent(<Policy20230201/>)
                break
        }
    }, [current])



    return (
        <Layout title="Policy Personal" description="Policy Personal Page">
            <div className={policyStyles.version}>
                <span>View another version</span>
                <select onChange={(e)=>{
                    setCurrent(e.target.value)
                }}>
                    <option value={"20240401"}>2024.04.01</option>
                    <option value={"20230201"}>2023.02.01</option>
                </select>
            </div>


            {policyComponent}
        </Layout>

    )
}
