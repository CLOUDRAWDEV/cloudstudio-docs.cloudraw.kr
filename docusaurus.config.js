// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cloud Studio",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/simbol3.png",
  organizationName: "facebook", 
  projectName: "docusaurus", 
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: 'docs',
          path: 'docs',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve("./src/scss/_custom.scss"),
        },
      }),
    ],
  ],

plugins: [
  'docusaurus-plugin-sass',
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'docs-faq',
      path: 'docs-faq',
      routeBasePath: 'docs-faq',
      sidebarPath: require.resolve('./sidebars.js'),
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
            to: '/docs/category/시작하기',   
            label: 'Docs',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-faq/category/계정-및-프로필',   
            label: 'FAQ',
            position: 'left',
            activeBaseRegex: `/docs-faq/`,
          },
          { 
            to: "/blog",
            label: "Notice",
            position: "left"
          },
          {
            href: "https://join.slack.com/t/cloudraw/shared_invite/zt-1gazpq5ky-lZQwzvjwmr25JazlrLgyhA",
            label: "Contact Slack",
            position: "left",
          },
          {
            href: "https://cloudstudio.cloudraw.kr/",
            label: "무료체험하기",
            position: "right",
            className: "btnTrial",
          },
        ],
      },
      footer: {
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
