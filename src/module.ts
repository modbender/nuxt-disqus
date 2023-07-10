import { defu } from "defu";
import { fileURLToPath } from "url";

import {
  isNuxt2,
  addPlugin,
  addComponent,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

import { name, version } from "../package.json";

export interface ModuleOptions {
  shortname?: string;
}

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "disqus",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    shortname: "",
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    nuxt.options.build.transpile = [];
    nuxt.options.build.transpile.push(runtimeDir);

    // Merge public and private disqus config and move to public config
    nuxt.options.runtimeConfig.disqus = defu(
      nuxt.options.runtimeConfig.disqus,
      options
    );

    nuxt.options.runtimeConfig.public.disqus = defu(
      nuxt.options.runtimeConfig.public.disqus,
      options
    );

    nuxt.hook("modules:done", () => {
      if (isNuxt2(nuxt)) {
        throw new Error("Vue3 Snackbar is not compatible with Nuxt2");
      } else {
        addPlugin(resolve("./runtime/plugin"));

        addComponent({
          name: "DisqusComments",
          export: "DisqusComments",
          filePath: resolve("./runtime/components/DisqusComments.vue"),
          mode: "client",
        });

        addComponent({
          name: "DisqusCount",
          export: "DisqusCount",
          filePath: resolve("./runtime/components/DisqusCount.vue"),
          mode: "client",
        });
      }
    });
  },
});
