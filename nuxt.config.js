export default {
  mode: 'spa',
  // server: {
  //  port: 8080, // default: 3000
  //  host: 'my.app.uberem.com.ua' // default: localhost
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
    '~/plugins/v-clipboard',
    '~/plugins/vue-meta',
    '~/plugins/jivochat',
    '~/plugins/vue-notification'
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
    'nuxt-i18n'
  ],
  moment: {
    locales: ['ru']
  },
  toast: {
    position: 'top-right',
    duration: 15000,
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
    // extend (config, ctx) {
    // }
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
      name: 'My Uberem Application',
      short_name: 'My Uberem'
    },
    meta: {
      name: 'My Uberem',
      author: 'uberem.com.ua',
      lang: 'en',
      description: 'My Uberem',
      ogImage: {
        path: 'https://my.uberem.com.ua/images/site/auth_hero.jpg',
        width: '1600',
        height: '1066'
      }
    }
  },
  env: {
    themeColor: '#5a30f0',
    gaID: process.env.GA_ID,
  },
  generate: {
    // choose to suit your project
    interval: 2000
  },
  publicRuntimeConfig: {
    crmAppURL: process.env.CRM_APP_URL,
    baseURL: process.env.BASE_URL,
    jivositeID: process.env.JIVOSITE_ID,
    phoneTitleKS: '+38 (067) 401-69-77',
    phoneKS: '+380674016977',
    phoneTitleVF: '+38 (050) 348-61-07',
    phoneVF: '+380503486107',
    phoneTitleL: '+38 (063) 254-38-47',
    phoneL: '+380632543847',
    connectLinkFB: 'https://www.facebook.com/uberem.com.ua/',
    connectLinkW: 'https://www.facebook.com/uberem.com.ua/',
    connectLinkT: 'tg://resolve?domain=uberemua',
    connectLinkV: 'viber://add?number=380632670396',
    botT: 'https://t.me/uberem_bot'
  },
  privateRuntimeConfig: {
  }
}
