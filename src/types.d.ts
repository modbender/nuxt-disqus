export interface ModuleOptions {
  shortname?: string
}

declare module 'nuxt-disqus' {
  interface NuxtConfig {
    disqus?: ModuleOptions
  }

  interface NuxtOptions {
    disqus?: ModuleOptions
  }
}