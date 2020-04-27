var appTitle = 'Covid 19 Tracker - coronavirus case count in India and Worldwide';
var appDescription = 'The website shows information about coronavirus in India and worldwide. A detailed country information about coronavirus outbreak, graphically shows the number of cases by state and district.(@shekhargupta677)';
var appDescription2 = 'Coronavirus in India and worldwide: Latest Case Counts';

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
      { name: 'robots', content: 'nofollow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: appDescription2 },
      { property: 'og:description', content: appDescription2 },
      { property: 'og:image', content: '/icon.png' },
      { property: 'og:url', content: 'https://pandemic-tracker.netlify.app/' },
      { property: 'og:site_name', content: 'Covid 19 Tracker' },
      { property: 'twitter:title', content: appTitle },
      { property: 'twitter:description', content: appDescription },
      { property: 'twitter:image', content: '/icon.png' },
      { property: 'twitter:site', content: '@shekhargupta677' },
      { property: 'twitter:creator', content: '@shekhargupta677' }
    ],
    link: [
      { rel:"canonical", href:"https://pandemic-tracker.netlify.app/" },
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
    start_url: 'https://pandemic-tracker.netlify.app',
    theme_color: '#18253C',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait'
  },

  // robots txt config
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://pandemic-tracker.netlify.app/sitemap.xml'
  },

  // sitemap config
  sitemap: {
    hostname: 'https://pandemic-tracker.netlify.app',
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
