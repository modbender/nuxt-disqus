import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import Vue3Disqus from "vue3-disqus";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Disqus);

  return {
    provide: {
      disqusOptions: useRuntimeConfig().public.disqus,
    },
  };
});
