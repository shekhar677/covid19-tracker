var appTitle = 'Coronavirus Tracker - coronavirus case count in India and Worldwide';
var appDescription = 'The website shows information about coronavirus in India and worldwide. A detailed country information about coronavirus outbreak, graphically shows the number of cases by state and district.(@shekhargupta677)';
var appDescription2 = 'Coronavirus in India and worldwide: Latest Case Counts';
var url = 'https://coronavirus-info.netlify.app/';
var keywords = 'coronavirus cases, coronavirus symptoms, corona, coronavirus news, corona virus, coronavirus deaths, coronavirus china, italy coronavirus, symptoms of coronavirus, coronavirus new york, cdc coronavirus, coronavirus in usa, coronavirus in india, coronavirus update, coronavirus cases india, coronavirus update india, coronavirus live, coronavirus cases in india, coronavirus in world, coronavirus news india, coronavirus by state'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: appTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: appDescription },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'nofollow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: appDescription2 },
      { property: 'og:description', content: appDescription2 },
      { property: 'og:image', content: '/icon.png' },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Coronavirus Tracker' },
      { property: 'twitter:title', content: appTitle },
      { property: 'twitter:description', content: appDescription },
      { property: 'twitter:image', content: '/icon.png' },
      { property: 'twitter:site', content: '@shekhargupta677' },
      { property: 'twitter:creator', content: '@shekhargupta677' }
    ],
    link: [
      { rel:"canonical", href: url },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png" },
      { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png" },
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#18253C' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/jsonld',
    '~/plugins/fuse',
    { src: '~plugins/chart.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },

  manifest: {
    short_name: 'Covid 19 Tracker',
    name: 'Covid 19 Tracker',
    lang: 'en',
    start_url: url,
    theme_color: '#18253C',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait'
  },

  // robots txt config
  robots: {
    UserAgent: '*',
    Sitemap: `${url}sitemap.xml`
  },

  // sitemap config
  sitemap: {
    hostname: url,
    gzip: true,
  },
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  pageTransition: {
    name: 'slide-up',
    mode: 'out-in'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
