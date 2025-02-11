import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  // compatibilityDate: "2025-01-22",
  devtools: { enabled: false },

  css: ["~/assets/main.scss"],

  modules: [
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  alias: {
    components: '@/',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Best Dental Irrigators for Healthy Teeth & Gums in 2025',
      titleTemplate: '%s',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
    },
    rootAttrs: {
      id: 'dental-irrigator',
    },
  },

  image: {
    format: ['webp', 'png'],
    screens: {
      xs: 320,
      md: 1024,
      xl: 1280,
    },
  },

  gtm: {
    id: 'GTM-53GHMHBC',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
    devtools: false,
  },

  compatibilityDate: '2025-02-11',
})