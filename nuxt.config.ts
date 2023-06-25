// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from './config/modules/i18n'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    i18n,
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
  ],

  runtimeConfig: {
    public: {
      strapi: {
        url: 'http://localhost:1337', // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
      },
    },
  },
})
