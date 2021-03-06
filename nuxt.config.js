
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    //title: process.env.npm_package_name || '',
    //title: '',
    titleTemplate: '%s | RyutaGoto\'s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'RyutaGoto\'s Portfolio' },
      { hid: 'og:site_name', property: 'og:site_name', content: '後藤隆太のポートフォリオサイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ryutagoto.space' },
      //{ hid: 'og:title', property: 'og:title', content: 'サイト名' },
      //{ hid: 'og:description', property: 'og:description', content: '共通ディスクリプション' },
      { hid: 'og:image', property: 'og:image', content: "/portfolio/img/thumnail.png"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/RyutaGoto.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  
  router: {
    base: '/'
  },

  server: {
    port: 8000, // デフォルト: 3000
    //host: '0.0.0.0' // デフォルト: localhost
  },

  generate: {
    dir: 'docs'
    /*
    routes: [
      '/works/caravan',
      '/works/dragonfly',
      '/works/gomi',
      '/works/amethyst',
      '/works/circuit',
      '/works/lamp',
      '/works/lixie',
      '/works/moto'
    ]
    */
  }
}
