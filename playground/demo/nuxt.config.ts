// https://nuxt.com/docs/api/configuration/nuxt-config
/// <reference types="nuxt" />
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [
    { path: 'node_modules/ertu-forms/src/components', extensions: ['vue'] }
  ]
})
