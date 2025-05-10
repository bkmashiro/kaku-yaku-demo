// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  vite: {
    server: {
      fs: {
        strict: false
      },
      hmr: {
        overlay: false
      }
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  css: ['~/assets/css/main.css']
})