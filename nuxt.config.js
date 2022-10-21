export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-import-external-pj',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: '/jquery-3.5.1.slim.min.js'
      },
      {
        src: '/popper.min.js'
      },
      {
        src: '/bootstrap.min.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {  rel: 'stylesheet', type: 'image/x-icon', href: '/bootstrap.min.css' },
      {  rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Router
  router: {
    routers: [
      {
        name: 'home',
        path: '/',
        component: 'pages/index.vue',
        children: [
          {
            name: 'home-chamcong',
            path: '/chamcong',
            component: 'pages/chamcong',
          },
        ]
      },
    ]
  }
}
