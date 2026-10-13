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
        ],
      },
      {
        text: 'Manual',
        items: [
          { text: 'Video Quality', link: '/manual/video-quality' },
          { text: 'Copy and Paste', link: '/manual/copy-paste' },
          { text: 'Drag and Drop Files', link: '/manual/drag-and-drop' },
          { text: 'Screen Recording', link: '/manual/screen-recording' },
          { text: 'Multitouch', link: '/manual/multitouch' },
          { text: 'Controlling iOS', link: '/manual/ios-control' },
          { text: 'Window Settings', link: '/manual/customize-window' },
          { text: 'Customizing Vysor', link: '/manual/customize' },
          { text: 'Video Broadcasting (OBS)', link: '/manual/obs' },
          { text: 'Linux Installation', link: '/manual/linux' },
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