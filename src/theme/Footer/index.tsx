import React, { useEffect, useState } from "react"
import footerStyles from "/src/scss/_footer.module.scss"
import Link from "@docusaurus/Link"

export default function Footer(props) {
    const [currentLocale, setCurrentLocale] = useState("ko") // 기본 언어를 한국어로 설정

    useEffect(() => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname
            const locale = path.startsWith("/ja")
                ? "ja"
                : path.startsWith("/en")
                ? "en"
                : "ko"
            setCurrentLocale(locale)
        }
    }, [])
    const texts = {
        en: {
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            refund: "Refund Policy",
            companyName: "Cloudraw",
            brn: "BRN : 886-86-02497",
            ceo: "CEO GyeongSu Kim",
            address:
                "716, Bd, Yeoksam-Height, 151, Teheran-ro, Gangnam-gu, Seoul, Korea",
        },
        ja: {
            terms: "サービス利用規約",
            privacy: "プライバシーポリシー",
            refund: "返金ポリシー",
            companyName: "(株)Cloudraw",
            brn: "事業者登録番号 886-86-02497",
            ceo: "CEO GyeongSu Kim",
            address:
                "716, Bd, Yeoksam-Height, 151, Teheran-ro, Gangnam-gu, Seoul, Korea",
        },
        ko: {
            terms: "서비스 이용 약관",
            privacy: "개인정보 처리 방침",
            refund: "환불 정책",
            companyName: "(주)클라우드로",
            brn: "사업자등록번호 : 886-86-02497",
            ceo: "대표이사 김경수",
            address: "서울시 강남구 테헤란로 151 (역삼하이츠빌딩), 716",
        },
    }

    const currentTexts = texts[currentLocale] || texts.ko // 기본적으로 영어 사용
    return (
        <></>
        // <footer className={footerStyles.footer}>
        //     {/*<section className={footerStyles.footer__nav}>*/}
        //     {/*    <section className={footerStyles.footer__nav__menu}>*/}
        //     {/*        <div>*/}
        //     {/*            <h3>Company</h3>*/}
        //     {/*            <ul>*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="https://www.cloudraw.kr/">*/}
        //     {/*                        <h4>About</h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*                /!*<li><Link to="https://cstudio.app/payments"><h4>Pricing</h4></Link></li>*!/*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="/policy/service">*/}
        //     {/*                        <h4>{currentTexts.terms}</h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="/policy/personal">*/}
        //     {/*                        <h4 style={{ fontWeight: "800" }}>*/}
        //     {/*                            {currentTexts.privacy}*/}
        //     {/*                        </h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="/policy/refund">*/}
        //     {/*                        <h4>{currentTexts.refund}</h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*            </ul>*/}
        //     {/*        </div>*/}
        //     {/*        <div>*/}
        //     {/*            <h3>Community</h3>*/}
        //     {/*            <ul>*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="https://blog.cloudraw.kr">*/}
        //     {/*                        <h4>Blog</h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*                <li>*/}
        //     {/*                    <Link to="https://www.youtube.com/channel/UCHoqm5luu1MvzPQRHVSwH9w">*/}
        //     {/*                        <h4>Youtube</h4>*/}
        //     {/*                    </Link>*/}
        //     {/*                </li>*/}
        //     {/*            </ul>*/}
        //     {/*        </div>*/}
        //     {/*    </section>*/}
        //     {/*    <h1>*/}
        //     {/*        Draw<p>Your Cloud Infra.</p>*/}
        //     {/*    </h1>*/}
        //     {/*</section>*/}
        //     {/*<section className={footerStyles.footer__address}>*/}
        //     {/*    <h5>*/}
        //     {/*        {currentTexts.companyName} | {currentTexts.brn} |{" "}*/}
        //     {/*        {currentTexts.ceo} | {currentTexts.address}*/}
        //     {/*    </h5>*/}
        //     {/*    <h5 className={footerStyles.footer__address__copy}>*/}
        //     {/*        Copyright ⓒ 2021 Cloudraw. Inc.*/}
        //     {/*    </h5>*/}
        //     {/*</section>*/}
        // </footer>
    )
}
