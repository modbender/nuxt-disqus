---
title: Nuxt Disqus
description: A Nuxt module that drops ready-to-use Disqus comment threads and comment counts into your Nuxt 3 or Nuxt 4 app, with a single shortname and zero plugin wiring.
sidebar:
  order: 1
---

Adding [Disqus](https://disqus.com) comments to a Nuxt app usually means loading the embed script at the right moment, wiring up a plugin, and re-initialising the thread on every client-side navigation. Nuxt Disqus does all of that for you.

It's a thin, well-behaved wrapper around the [vue3-disqus](https://github.com/modbender/vue3-disqus) library that makes Disqus work out of the box in Nuxt. Set your shortname once, drop a component where you want comments, and you're done.

## Key features

- **Easy integration** — install the module, set your `shortname`, and place `<DisqusComments />` or `<DisqusCount />` anywhere. No plugin wiring, no manual script tags.
- **Two auto-imported components** — `<DisqusComments />` renders a full comment thread; `<DisqusCount />` renders the comment count for a page.
- **Lazy by default** — the comment thread loads only when it scrolls into view, so it never blocks your initial render.
- **Client-only and SSR-safe** — the components render on the client where Disqus runs, so there's no hydration mismatch and no flash of broken markup.
- **Nuxt 3 + Nuxt 4** — a single install supports both major versions.

## A 30-second taste

Install the module:

```bash
npx nuxi@latest module add nuxt-disqus
```

Set your Disqus shortname in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-disqus'],
  disqus: {
    shortname: 'your-disqus-shortname',
  },
})
```

Then drop the components wherever you want comments or a count:

```vue
<template>
  <article>
    <!-- ...your post content... -->
    <DisqusCount identifier="/blog/1" />
    <DisqusComments identifier="/blog/1" />
  </article>
</template>
```

That's the whole thing. `<DisqusComments />` and `<DisqusCount />` are auto-imported — no manual imports needed.

## Compatibility

| | Supported |
| --- | --- |
| Nuxt Disqus | 1.x |
| Nuxt | 3.x and 4.x |
| Vue | 3 |

:::tip
Nuxt Disqus 1.x supports both Nuxt 3 and Nuxt 4 from the same package — there's nothing extra to configure when you upgrade Nuxt.
:::

## Where to next

- [Installation](/nuxt-disqus/installation/) — install the module and set your shortname.
- [Usage](/nuxt-disqus/usage/) — render comment threads and counts, and the `identifier` you must pass.
- [Configuration](/nuxt-disqus/configuration/) — the `disqus` key in `nuxt.config.ts` and every component prop.
