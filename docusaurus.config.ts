import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Clarion API Docs',
  tagline: 'Free, Public Omega Strikers Proxy API',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.clarioncorp.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ClarionCorp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ClarionCorp/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ClarionCorp/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Clarion Docs',
      logo: {
        alt: 'CC Cog',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://clarioncorp.net',
          label: 'ClarionCorp',
          position: 'left',
        },
        {
          href: 'https://omegastrikers.wiki.gg',
          label: 'OS Wiki',
          position: 'left',
        },
        {
          href: 'https://github.com/ClarionCorp/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Clarion API v2',
              to: '/docs/category/v2',
            },
            {
              label: 'Odyssey OS API',
              to: '/docs/category/prometheus-api',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Official OS Wiki',
              href: 'https://omegastrikers.wiki.gg',
            },
            {
              label: 'Modding Discord',
              href: 'https://discord.gg/e576Mpd3B5',
            },
          ],
        },
        {
          title: 'CC Socials',
          items: [
            {
              label: 'OS Stats',
              href: 'https://clarioncorp.net',
            },
            // {
            //   label: 'API Source',
            //   href: 'https://github.com/ClarionCorp/API',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/ClarionCorp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClarionCorp`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
