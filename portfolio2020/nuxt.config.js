
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    //title: process.env.npm_package_name || '',
    //title: '',
    titleTemplate: '%s | RyutaGoto`s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/RyutaGoto.ico' },
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
  /*
  generate: {
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
  }
  */
}
