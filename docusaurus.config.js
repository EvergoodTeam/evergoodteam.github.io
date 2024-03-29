// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Evergood",
  tagline: "",
  url: "https://evergoodteam.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "evergoodteam", // Usually your GitHub org/user name.
  projectName: "evergoodteam.github.io", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    CURSE_API: process.env.CURSE_API,
  },

  plugins: [
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-D6431CV5N3",
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "keywords", content: "minecraft, mod, modpack" }],

      algolia: {
        // The application ID provided by Algolia
        appId: "8ZAWFQ1VKY",

        // Public API key: it is safe to commit it
        apiKey: "6cfa7e3aa15ba2f5c56ef830ecc94b19",

        indexName: "evergoodteam",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },

      announcementBar: {
        content: "🚧 Wiki and the documentation are still a WIP 🚧",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },

      navbar: {
        logo: {
          alt: "Evergood",
          src: "img/evergood-light.svg",
          srcDark: "img/evergood-dark.svg",
          className: "evergood-navbar-logo",
        },
        hideOnScroll: false,
        items: [
          /*
          {
            className: "header-label",
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Docs',
          },
          {
            className: "header-label",
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          */
          {
            type: "search",
            position: "left",
          },
          {
            className: "header-link header-github-link ",
            title: "GitHub",
            "aria-label": "",
            href: "https://github.com/EvergoodTeam",
            position: "right",
          },
          {
            className: "header-link header-modrinth-link ",
            title: "Modrinth",
            "aria-label": "",
            href: "https://modrinth.com/organization/evergood",
            position: "right",
          },
          {
            className: "header-link header-curse-link ",
            title: "CurseForge",
            "aria-label": "",
            href: "https://www.curseforge.com/members/evergoodteam/projects",
            position: "right",
          },
          {
            className: "header-link header-discord-link ",
            title: "Discord",
            "aria-label": "",
            href: "https://discord.gg/k2P68Y8",
            position: "right",
          },
          {
            className: "header-link header-crowdin-link ",
            title: "Crowdin",
            "aria-label": "",
            href: "https://crowdin.com/profile/EvergoodTeam",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Mods",
                to: "/mods",
              },
              {
                label: "Modpacks",
                to: "/modpacks",
              },
            ],
          },
          {
            title: "Community",
            items: [
              /*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/',
              },*/
              {
                label: "Discord",
                href: "https://discord.com",
              },
              {
                label: "Crowdin",
                href: "https://crowdin.com/profile/EvergoodTeam",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/evergoodteam",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Support Us",
                to: "/support",
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["groovy", "java"],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
