// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cloud Studio Docs",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/simbol.png",
  organizationName: "facebook", 
  projectName: "docusaurus", 
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },


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
        blog: false, 
        theme: {
          customCss: require.resolve("./src/scss/_custom.scss"),
        },
      }),
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
            to: '/docs/Intro',    // ./docs/Intro.md
            label: 'Docs',
            position: 'left',
            activeBaseRegex: `/docs/`,
          },
          {
            to: '/docs-faq/Intro',    // ./docs/Intro.md
            label: 'FAQ',
            position: 'left',
            activeBaseRegex: `/docs-faq/`,
          },
          {
            href: "https://join.slack.com/t/w1658372636-gh4700456/shared_invite/zt-1d0rtffdt-TzJ_8YqxPX5mPgWDY5SbKA",
            label: "Contact Slack",
            position: "left",
          },
          {
            href: "https://cloudstudio.cloudraw.kr/",
            label: "Demo",
            position: "right",
            className: "btnTrial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
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
