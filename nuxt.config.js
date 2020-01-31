module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'KODIN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/kodin.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/argon-kit.js`,
    // `~/plugins/globalComponents.js`
    // `~/plugins/globalDirectives.js`,
    { src: '~/plugins/tawkto', ssr: false },
    { src: '~/plugins/typeform', ssr: false },
    { src: '~/plugins/googleAnalytics', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Nederlands',
            code: 'nl',
            iso: 'nl-NL',
            file: 'nl'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en'
          }
        ],
        langDir: 'lang/',
        defaultLocale: 'en',
        lazy: true
      }
    ]
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: true,
    extend(config, ctx) {}
  },
  server: {
    port: 8000 // default: 3000
  }
}
