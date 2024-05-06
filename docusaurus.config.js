// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://gjqsznhwkjsanuvlryxe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcXN6bmh3a2pzYW51dmxyeXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjUwNjUsImV4cCI6MjAyODEwMTA2NX0.v4z-KTl5mK7jAWcZveJ-_WzKN5FT6FpeCW7KszDHUbc");

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {

  },
  title: 'Azalea',
  tagline: 'The best Minecraft Bedrock Essentials Addon',
  favicon: 'img/',

  // Set the production url of your site here
  url: 'https://azalea.trashdev.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trashdev', // Usually your GitHub org/user name.
  projectName: 'azalea', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          feedOptions: {
            type: 'all',
            title: 'Feed',
            description: '',
            copyright: '',
            language: undefined,
            
          },
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        'sitemap': {
          "filename": "sitemap.xml",
          'changefreq': 'daily',
          'lastmod': 'date',
          'priority': 1
        },
        "docs": {
          sidebarPath: './sidebars.js',
        }
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: './sidebarsCommunity.js',
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        'path': './addons',
        'routeBasePath': 'addons',
        'id': 'addons',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'azalea_new_blog',
      //   content:
      //     'Azalea has a new blog system! <a href="/blog">Check it out</a>',
      //   backgroundColor: 'var(--primary-400)',
      //   textColor: '#000',
      //   isCloseable: true,
      // },
      colorMode: {
        "defaultMode": "dark",
        "respectPrefersColorScheme": false,
        "disableSwitch": true,
      },
      // Replace with your project's social card
      image: 'img/social.png',
      navbar: {
        'style': 'dark',
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'https://media.discordapp.net/attachments/1223412365358272702/1237180106380673044/9dicksinmymouth.png?ex=663ab543&is=663963c3&hm=9cccc9253e9ac10e9eb20ddad622dc1069a26d6fad152f2f20a7d841c609701d&=&format=webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Partnered Servers',
            to: '/partnered',
            position: 'left'
          },
          {
            label: 'Version Archive',
            to: '/version-archive',
            position: 'left'
          },
          {
            label: 'Addons',
            to: '/addons',
            position: 'right'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Ant767/Azalea',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Azalea`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark
      },
    }),
};

export default config;
