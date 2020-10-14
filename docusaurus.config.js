module.exports = {
  title: 'Myze Shop Documentation',
  tagline: 'This is documentation site for Myze project',
  url: 'https://myze.shop',
  baseUrl: '/myze-docs/',
  projectName: 'myze-docs', // Usually your repo name.
  organizationName: 'szczepanbarszczowski', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Myze Shop Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'Envato',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Install',
              to: 'docs/',
            },
            {
              label: 'Customize',
              to: 'docs/styles/',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Myze Shop, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
