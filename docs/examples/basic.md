---
title: Basic
description: A minimal end-to-end example — register the module, set a shortname, and render a Disqus comment thread on a blog post page.
sidebar:
  order: 1
---

The smallest complete setup: register the module, set your shortname, and render a thread with `<DisqusComments />`.

## 1. Register the module and set your shortname

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-disqus'],
  disqus: {
    shortname: 'your-disqus-shortname',
  },
})
```

## 2. Render the thread on a page

```vue
<!-- pages/blog/[id].vue -->
<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <article>
    <h1>My blog post</h1>
    <p>...post content...</p>

    <DisqusComments :identifier="`/blog/${route.params.id}`" />
  </article>
</template>
```

That's it. The thread loads lazily when it scrolls into view, using the shortname from your config. `<DisqusComments />` is auto-imported, so there's no import statement.

:::tip
Use a **stable** value for `identifier` — your route path or the post's database id. Disqus uses it to attach comments to the page, so it should never change once comments exist.
:::

## Using a per-page URL

If you want Disqus to record the canonical URL alongside the identifier, pass `url`:

```vue
<template>
  <DisqusComments
    identifier="/blog/1"
    url="https://example.com/blog/1"
  />
</template>
```

## Next steps

- [Comment Counts](/nuxt-disqus/examples/comment-counts/) — show "12 Comments" in a post list.
- [Lazy Loading](/nuxt-disqus/examples/lazy-loading/) — control when the thread loads.
