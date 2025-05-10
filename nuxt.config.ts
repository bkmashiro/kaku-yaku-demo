// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/ui", "floating-vue/nuxt"],
  ssr: false,
  vite: {
    server: {
      // fs: {
      //   strict: false,
      // },
      // hmr: {
      //   overlay: false,
      // },
      proxy: {
        "/api": "http://localhost:3001",
      },
    },
  },
  // nitro:  { preset: 'node' },
  ui: {},
  app: {
    head: {
      title: '日本語文法解析 Demo',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ['floating-vue']
  },
  // 通过runtimeConfig配置floating-vue
  runtimeConfig: {
    public: {
      floatingVue: {
        themes: {
          'tooltip': {
            autoHide: false,
            handleResize: true,
            instantMove: true,
            disposeTimeout: 3000,
            popperTriggers: ['hover', 'click'],
            triggers: ['hover', 'click'],
            distance: 10,
            delay: {
              show: 300,
              hide: 1000
            }
          }
        }
      }
    }
  }
});
