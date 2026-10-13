import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vysor Docs',
  description: 'Mirror and control Android and iOS devices',

  head: [
    ['link', { rel: 'icon', href: '/img/icons/android-chrome-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon-180x180.png' }],
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
        ],
      },
      {
        text: 'Vysor',
        items: [
          { text: 'Vysor Pro', link: '/pro' },
          { text: 'Billing', link: '/billing' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/koush/Vysor' },
    ],
  },
})