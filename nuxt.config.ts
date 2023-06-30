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
    [
      'nuxt-svgo',
      {
        defaultImport: 'component',
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  inlineStyles: {
                    onlyMatchedOnce: false,
                  },
                  removeDoctype: false,
                  removeDimensions: false,
                  removeViewBox: false,
                  removeUselessStrokeAndFill: false,
                },
              },
            },
          ],
        },
      },
    ],
  ],

  css: ['@/assets/global.css'],

  runtimeConfig: {
    public: {
      strapi: {
        url: 'http://80.249.149.128:1337', // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
      },
    },
  },
})
