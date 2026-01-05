// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['../assets/css/main.css'],
  app: {
    head: {
      title: 'Nicole — Interactive CV',
      meta: [
        { name: 'description', content: 'Interactive CV showcasing full-stack engineering experience across .NET, AWS serverless, Vue/Nuxt, and applied AI.' },
      ],
      htmlAttrs: { lang: 'en' } // or 'ro'
    },
  },
})
