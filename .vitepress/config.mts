import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vysor Docs',
  description: 'Mirror and control Android and iOS devices',

  sitemap: {
    hostname: 'https://docs.vysor.io',
  },

  srcExclude: ['README.md'],

  transformHead({ pageData }) {
    const description = pageData.frontmatter.description ?? 'Mirror and control Android and iOS devices'
    return [
      ['meta', { property: 'og:title', content: pageData.title || 'Vysor Docs' }],
      ['meta', { property: 'og:description', content: description }],
    ]
  },

  head: [
    ['link', { rel: 'icon', href: '/img/icons/android-chrome-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-180x180.png' }],
    ['meta', { property: 'og:site_name', content: 'Vysor Docs' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/icons/android-chrome-192x192.png',
    editLink: {
      pattern: 'https://github.com/koush/docs.vysor.io/edit/main/:path',
    },
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Download', link: '/download' },
      { text: 'Android', link: '/android' },
      { text: 'iOS', link: '/ios' },
      { text: 'Vysor Pro', link: '/pro' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Vysor?', link: '/' },
          { text: 'Download & Install', link: '/download' },
          { text: 'Android Setup', link: '/android' },
          { text: 'iOS Setup', link: '/ios' },
          { text: 'Vysor Dongle', link: '/dongle' },
        ],
      },
      {
        text: 'Vysor Share',
        items: [
          { text: 'Sharing Devices', link: '/share' },
        ],
      },
      {
        text: 'Licensing',
        items: [
          { text: 'Vysor Pro', link: '/pro' },
          { text: 'Enterprise', link: '/enterprise' },
          { text: 'Billing', link: '/billing' },
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'How Vysor Works', link: '/architecture' },
        ],
      },
    ],
  },
})