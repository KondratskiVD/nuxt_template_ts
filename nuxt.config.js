const args = require('yargs').argv

let { env } = args
if (!env) {
  env = ''
}

require('dotenv').config({ path: '.env' + (env ? ('.' + env) : '') })
export default {
  mode: 'spa',
  // server: {
  //  port: 8080, // default: 3000
  //  host: 'console.joseph-henry.home' // default: localhost
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'My Uberem',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Личный кабинет пользователя'
      }
    ]
    /* link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ] */
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
    // '~/plugins/composition-api',
    '~/plugins/directives',
    '~/plugins/scss',
    '~/plugins/v-tooltip',
    '~/plugins/v-clipboard'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build',
    // https://www.npmjs.com/package/@nuxtjs/moment
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/toast
    '@nuxtjs/toast',
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  moment: {
    locales: ['ru']
  },
  toast: {
    position: 'top-right',
    duration: 10000
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    },
    baseURL: process.env.API_URL,
    withCredentials: true
  },
  router: {
    middleware: [
      // 'auth',
      'address-redirect'
    ]
  },
  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru-Ru.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru'
    }
  },
  auth: {
    rewriteRedirects: false,
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        _scheme: '~/modules/auth/schemes/fixedLocal.js',
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            withCredentials: true,
            propertyName: 'data.token',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }
          },
          logout: {
            url: '/logout',
            method: 'post',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }
          },
          user: {
            url: '/profile',
            method: 'get',
            propertyName: 'data',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }
          }
        },
        tokenRequired: true,
        globalToken: true,
        tokenType: 'Bearer'
      }
    }
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
  },
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    purgeCSSInDev: false,
    exposeConfig: false
  },
  purgeCSS: {
    whitelist: ['body', 'html', 'nuxt-progress', 'tooltip', 'v-select'],
    whitelistPatterns: [/^vs__/, /^vs--/],
    whitelistPatternsChildren: [/tooltip/]
  },
  pwa: {
    manifest: {
      name: 'Trade Admin Application',
      short_name: 'Trade Admin'
    },
    meta: {
      name: 'Trade Admin',
      author: 'Think Studion',
      lang: 'en',
      description: 'Trede admin',
      ogImage: {
        path: 'http://app.joseph-henry.home/',
        width: '640',
        height: '640'
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL,
    avatarLink: process.env.AVATAR_LINK,
    theme_color: '#2b6cb0'
  },
  generate: {
    // choose to suit your project
    interval: 2000
  }
}
