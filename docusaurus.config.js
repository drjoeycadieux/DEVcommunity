/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DEV Community",
  tagline: "Document For Developers From Developers",
  url: "https://dev-community-git-main-instructorjoeycadieux.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "DEV Community",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/"
            },
            {
              label: "Second Doc",
              to: "docs/doc2/"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "https://stackoverflow.com/users/12696830/joey-cadieux"
            },
            {
              label: "Terms",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Cookie Policy",
              href: "https://twitter.com/drjoeycadieux"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/12696830/joey-cadieux"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/drjoeycadieux"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/drjoeycadieux"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DEV Community, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/drjoeycadieux"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/drjoeycadieux"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
