# Disqus for Nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Instantly add Disqus Comments to your posts or pages using this package designed to work perfectly with Nuxt 3.

Nuxt Disqus provides a wrapper for [vue3-disqus](https://github.com/modbender/vue3-disqus) to be used with Nuxt 3

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-disqus?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 🔆Easy to integrate
- ⚡️Instantly usable components `DisqusComments` and `DisqusCount`

## Quick Setup

1. Add `nuxt-disqus` dependency to your project

   ```bash
   # Using pnpm
   pnpm add -D nuxt-disqus

   # Using yarn
   yarn add --dev nuxt-disqus

   # Using npm
   npm install --save-dev nuxt-disqus
   ```

2. Add `nuxt-disqus` to the `modules` section of `nuxt.config.ts`

   ```js
   export default defineNuxtConfig({
     modules: ["nuxt-disqus"],
     disqus: {
       shortname: "your-disqus-shortname",
     },
   });
   ```

3. Place `DisqusComments` anywhere in your app to render Disqus Comment thread for particular `identifier`

   ```jsx
   <DisqusComments identifier="/blog/1" />
   ```

4. Place `DisqusCount` anywhere in your app to render Disqus Comment Count for particular `identifier`

   ```jsx
   <DisqusCount identifier="/blog/1" />
   ```

   Example Output for `DisqusCount` will be:
   ```xml
   99 Comments
   ```

That's it! You can now use Disqus in your Nuxt app ✨

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn run dev:prepare

# Develop with the playground
yarn run dev

# Build the playground
yarn run dev:build

# Run ESLint
yarn run lint

# Run Vitest
yarn run test
yarn run test:watch

# Release new version
yarn run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-disqus/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-disqus
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-disqus.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-disqus
[license-src]: https://img.shields.io/npm/l/nuxt-disqus.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-disqus
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
