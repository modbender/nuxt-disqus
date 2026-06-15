---
title: Configuration
description: Set your shortname via the disqus key in nuxt.config.ts, plus the full prop reference for the DisqusComments and DisqusCount components.
sidebar:
  order: 4
---

There are two layers of configuration: the global **module options** in `nuxt.config.ts`, and the **per-component props** you pass at the call site.

## Module options

Module options live under the `disqus` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-disqus'],
  disqus: {
    shortname: 'your-disqus-shortname',
  },
})
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `shortname` | `string` | `''` | Your Disqus site's shortname. Used as the default shortname for every `<DisqusComments />` and `<DisqusCount />` in your app. |

:::tip
`shortname` is the only module option. Everything else is configured per-component via props — see the tables below.
:::

### Shortname precedence

When a component needs a shortname, it resolves it in this order:

1. The `shortname` **prop** passed directly to the component.
2. The global `disqus.shortname` from `nuxt.config.ts`.

So the global config is the default, and any individual component can override it. If neither is set, Disqus throws `"Disqus shortname is required"` at runtime.

## `<DisqusComments />` props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | — | **Required.** Unique, stable identifier that ties the thread to a page. |
| `shortname` | `string` | _(global config)_ | Override the Disqus shortname for this thread. |
| `url` | `string` | _(none)_ | The canonical page URL Disqus associates with the thread. |
| `class` | `string` | _(none)_ | CSS class applied to the thread container. |
| `language` | `string` | `'en'` | Disqus interface language for the thread. |
| `lazy` | `boolean` | `true` | Load the embed script only when the thread scrolls into view. |
| `lazyConfig` | `object` | `{ root: null, rootMargin: '300px', threshold: 0.5 }` | `IntersectionObserver` options that control when lazy loading triggers. |
| `pageConfig` | `object` | _(none)_ | Advanced Disqus page-level config (e.g. `title`, `category_id`, `slug`). Keys are validated against Disqus's allowed page keys. |
| `ssoConfig` | `object` | _(none)_ | Single Sign-On config (e.g. `name`, `button`, `icon`, `url`, `logout`, `profile_url`, `width`, `height`). |

### Emitted events

`<DisqusComments />` re-emits the Disqus thread callbacks as Vue events: `pre-data`, `pre-init`, `after-render`, `init`, `ready`, `identify`, `paginate`, `new-comment`, `before-comment`, `pre-reset`.

## `<DisqusCount />` props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | — | **Required.** Identifier of the page whose count to show. Match the thread's identifier. |
| `shortname` | `string` | _(global config)_ | Override the Disqus shortname for this count. |
| `url` | `string` | _(none)_ | The page URL. Used as the link target when `tag` is `"a"`. |
| `tag` | `string` | `'span'` | The HTML element to render the count in. Use `'a'` to render it as a link. |

## Lazy loading config

The `lazyConfig` prop is passed straight to the `IntersectionObserver` that triggers loading. Widen `rootMargin` to start loading the thread earlier (further before it enters the viewport):

```vue
<template>
  <DisqusComments
    identifier="/blog/1"
    :lazy-config="{ root: null, rootMargin: '600px', threshold: 0 }"
  />
</template>
```

:::caution
Set `:lazy="false"` if you want the thread to load on mount regardless of scroll position. When `lazy` is `false`, `lazyConfig` is ignored.
:::

See [Basic](/nuxt-disqus/examples/basic/), [Comment Counts](/nuxt-disqus/examples/comment-counts/), and [Lazy Loading](/nuxt-disqus/examples/lazy-loading/) for end-to-end recipes.
