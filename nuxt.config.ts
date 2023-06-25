// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from './config/modules/i18n';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    i18n,
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
});
