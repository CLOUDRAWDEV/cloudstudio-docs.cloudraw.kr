// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "CloudStudio Documents",
    tagline: "",
    // url: "https://cloudrawdev.github.io",
    url: "https://docs.cloudraw.kr",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/simbol3.png",
    organizationName: "cloudrawdev",
    projectName: "cloudstudio-docs",
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en", "ja"],
    },

    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "docs",
                    path: "i18n/ko/docusaurus-plugin-content-docs/current",
                },
                blog: {
                    routeBasePath: "release",
                    blogSidebarTitle: "Release Note",
                    blogSidebarCount: "ALL",
                    path: "i18n/ko/docusaurus-plugin-content-blog/current",
                },
                theme: {
                    customCss: require.resolve("./src/scss/_custom.scss"),
                },
            }),
        ],
    ],

    plugins: [
        "docusaurus-plugin-sass",
        // ko 로케일의 FAQ docs
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-faq",
                path: "i18n/ko/docusaurus-plugin-content-docs-docs-faq/current",
                routeBasePath: "docs-faq",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
        // en 로케일의 docs 설정
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-en",
                path: "i18n/en/docusaurus-plugin-content-docs/current",
                routeBasePath: "en/docs",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
        // en 로케일의 blog 설정
        [
            "@docusaurus/plugin-content-blog",
            {
                id: "blog-en",
                path: "i18n/en/docusaurus-plugin-content-blog/current",
                routeBasePath: "en/release",
                blogSidebarTitle: "Release Note",
                blogSidebarCount: "ALL",
            },
        ],
        // en 로케일의 FAQ docs
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-faq-en",
                path: "i18n/en/docusaurus-plugin-content-docs-docs-faq/current",
                routeBasePath: "en/docs-faq",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
        // ja 로케일의 docs 설정
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-ja",
                path: "i18n/ja/docusaurus-plugin-content-docs/current",
                routeBasePath: "ja/docs",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
        // ja 로케일의 blog 설정
        [
            "@docusaurus/plugin-content-blog",
            {
                id: "blog-ja",
                path: "i18n/ja/docusaurus-plugin-content-blog/current",
                routeBasePath: "ja/release",
                blogSidebarTitle: "Release Note",
                blogSidebarCount: "ALL",
            },
        ],
        // ja 로케일의 FAQ docs
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-faq-ja",
                path: "i18n/ja/docusaurus-plugin-content-docs-docs-faq/current",
                routeBasePath: "ja/docs-faq",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ],
    ],

    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en"],
                searchBarShortcutHint: true,
                searchResultContextMaxLength: 20,
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],

    themeConfig:
        /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            navbar: {
                title: "",
                logo: {
                    alt: "cloudstudio Logo",
                    src: "img/cloudstudio_logo.png",
                    srcDark: "img/cloudstudio_logo_white.png",
                    className: "navbarLogo",
                },
                items: [
                    {
                        to: "/docs/category/시작하기",
                        label: "Docs",
                        position: "left",
                        activeBaseRegex: `/docs/`,
                    },
                    {
                        to: "/docs-faq/category/계정-및-프로필",
                        label: "FAQ",
                        position: "left",
                        activeBaseRegex: `/docs-faq/`,
                    },
                    {
                        to: "/release",
                        label: "Release",
                        position: "left",
                        activeBaseRegex: `/release/`,
                    },
                    {
                        href: "https://join.slack.com/t/cloudraw/shared_invite/zt-1gazpq5ky-lZQwzvjwmr25JazlrLgyhA",
                        label: "Contact Slack",
                        position: "left",
                        className: "btnSlack",
                    },
                    {
                        href: "https://cstudio.app/",
                        label: "CloudStudio",
                        position: "right",
                        className: "btnTrial",
                    },
                    {
                        type: "localeDropdown",
                        position: "right",
                    },
                ],
            },
            footer: {},
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
