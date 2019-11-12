const webpack = require('webpack')
import path from 'path'
import fs from 'fs'

export default {
  mode: 'universal',
  //mode: 'spa',

  serverMiddleware: [
    '~/api/logger'
  ],

  /*****************************************************************************************
  ** BEGIN - Headers of the page
  *****************************************************************************************/
  head: {
    htmlAttrs: {
      lang: 'vn'
    },
    // title: process.env.npm_package_name || '',
    title: 'Lending app' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300i,400,500,500i,700,700i,900,900i&display=swap&subset=vietnamese' }
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap&subset=vietnamese' }
    ]
  },
  /*****************************************************************************************
  ** END - Headers of the page
  *****************************************************************************************/
  
  /*****************************************************************************************
  ** BEGIN - Customize the progress-bar color
  *****************************************************************************************/
  loading: {
    // color: '#fff'
    /*
    /** Custom loadding bar
    */
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
  },
  /*****************************************************************************************
  ** END - Customize the progress-bar color
  *****************************************************************************************/

  /****************************************************************************************
  ** BEGIN - Axios config
  ****************************************************************************************/
  // axios: {
  //   proxy: true,
  //   https: true
  // },
  // proxy: {
  //   // '/api': 'http://localhost:3000'
  //   '/api': 'http://admin.bobbylct.com'
  // },

  axios: {
    baseURL: 'http://admin.bobbylct.com'
  },
  /****************************************************************************************
  ** END - Axios config
  ****************************************************************************************/

  /****************************************************************************************
  ** BEGIN - Auth config
  ****************************************************************************************/
  auth: {
    redirect: {
      login: '/account/login',
      home: '/',
      logout: '/',
      callback: '/account/callback'
    },
    resetOnError: false,
    scopeKey: "scope",
    rewriteRedirects: true,
    fullPathRedirect: false,
    defaultStrategy: undefined,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/login', propertyName: 'Data.token', method: 'post' },
          user: { url: '/api/account', propertyName: 'Data', method: 'get' }
        }
      },
      facebook: {
        client_id: '2010316212389042',
        userinfo_endpoint: 'https://graph.facebook.com/v4.0/me?fields=about,picture{url},email,birthday,address,last_name,first_name,gender,middle_name,name',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        //YjWPGRoRbc-S-R6e2IIuWjtx
        client_id: '655230625611-9bjeumbu1ffgoff49bbfnpis8r76cbnn.apps.googleusercontent.com'
      }
    }
    
  },
  /****************************************************************************************
  ** END - Auth config
  ****************************************************************************************/

  /****************************************************************************************
  ** BEGIN - Global toast config
  ****************************************************************************************/
  // toast: {
  //   position: 'top-center'
  // },
  /****************************************************************************************
  ** END - Global toast config
  ****************************************************************************************/
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/scss/main.scss',
    '@/assets/scss/animate.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/global',
    '@/plugins/bootstrap',
    '@/plugins/axios',
    '@/plugins/toast.client'
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
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  server: {
    port: 3000, // default: 3000
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
