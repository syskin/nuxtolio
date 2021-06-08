export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'mathieu-cadu.com',
        src: 'https://analytics.mathieu-cadu.com/js/plausible.js',
      },
    ],
  },

  optimizedImages: {
    optimizeImages: true,
  },

  server: {
    port: 4949,
    host: '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vue-scrollactive'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        lazy: true,
        langDir: './i18n',
        locales: [
          {
            code: 'en',
            iso: 'en-us',
            name: 'English',
            file: 'en-us.js',
          },
          {
            code: 'fr',
            iso: 'fr-fr',
            name: 'Français',
            file: 'fr-fr.js',
          },
        ],
        defaultLocale: 'en',
        noPrefixDefaultLocale: true,
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Mathieu Cadu PWA',
      lang: 'en',
      theme_color: '#372750',
      background_color: '#fd6800',
      display: 'standalone',
    },
    icon: {
      fileName: 'icon.png',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
