import Vue3Disqus from 'vue3-disqus'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Disqus)

  return {
    provide: {
      disqusOptions: useRuntimeConfig().public.disqus,
    },
  }
})
