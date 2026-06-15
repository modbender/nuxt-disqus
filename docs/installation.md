---
title: Installation
description: Install Nuxt Disqus, register it in nuxt.config, and set your Disqus shortname so comment threads and counts can render.
sidebar:
  order: 2
---

Getting Nuxt Disqus running takes two steps: add the module, then tell it your Disqus shortname.

## 1. Add the module

The quickest way is the Nuxt CLI, which installs the package and adds it to your `nuxt.config` for you:

```bash
npx nuxi@latest module add nuxt-disqus
```

### Manual install

If you'd rather install it by hand, add the package with your preferred package manager:

```bash
# pnpm
pnpm add nuxt-disqus
```

```bash
# npm
npm install nuxt-disqus
```

```bash
# yarn
yarn add nuxt-disqus
```

Then add `'nuxt-disqus'` to the `modules` array in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-disqus'],
})
```

## 2. Set your shortname

Your **shortname** is the unique identifier Disqus assigned to your site when you registered it (you can find it in your Disqus admin under *Settings → General*). Set it once under the `disqus` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-disqus'],
  disqus: {
    shortname: 'your-disqus-shortname',
  },
})
```

Every `<DisqusComments />` and `<DisqusCount />` in your app will use this shortname automatically, so you don't have to repeat it on each component.

:::tip
You don't have to set a global shortname — you can pass `shortname` to an individual component instead (handy if you render content from more than one Disqus site). See [Configuration](/nuxt-disqus/configuration/) for the precedence rules.
:::

## What gets registered

The module wires everything up for you:

- A plugin that loads and configures Disqus on the client.
- A `<DisqusComments />` component for rendering a comment thread.
- A `<DisqusCount />` component for rendering a comment count.

Both components are **client-only** — Disqus runs entirely in the browser, so the components render on the client where the embed script lives. There's no extra setup, no manual `<script>` tag, and no stylesheet to import.

## Next steps

- [Usage](/nuxt-disqus/usage/) — render your first comment thread and count.
- [Configuration](/nuxt-disqus/configuration/) — module options and the full component prop reference.
