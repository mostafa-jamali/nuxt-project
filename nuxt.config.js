export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MW',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/index.scss', 'leaflet/dist/leaflet.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/createJWT.js' }, { src: '~/plugins/parseJWT.js' }, { src: '~/plugins/validationForm.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://www.npmjs.com/package/nuxt-leaflet
    'nuxt-leaflet',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /////////////////// customizing (New Configs) ////////////////////
  // customize styleResource module
  styleResources: {
    scss: '~/assets/styles/_global_variables.scss',
  },

  // customize bootstrapVue module
  bootstrapVue: {
    icons: true,
  },

  // auth
  router: {
    middleware: ['auth'],
  },

  auth: {
    strategies: {
      email: {
        scheme: 'local',
        user: {
          autoFetch: true,
          property: false,
        },
        endpoints: {
          user: { url: '/api/auth/user', method: 'get' },
          logout: { url: '/api/auth/logout', method: 'post' },
          login: { url: '/api/auth/login', method: 'post' },
        },
        token: {
          property: 'token',
          global: true,
          // maxAge: 5 * 60,
          // required: true,
          // type: 'Bearer'
        },
      },
    },
  },
};
