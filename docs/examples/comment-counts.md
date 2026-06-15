---
title: Comment Counts
description: Show Disqus comment counts in a post list with DisqusCount — as plain text or as a link, matched to the thread identifier.
sidebar:
  order: 2
---

`<DisqusCount />` renders the number of comments for a page. The most common use is a blog index that shows each post's comment count next to its title, with the full thread living on the post page.

## Counts in a post list

Render a `<DisqusCount />` per post, using the same `identifier` you use for that post's thread:

```vue
<!-- pages/blog/index.vue -->
<script setup lang="ts">
const posts = [
  { id: 1, title: 'Hello world' },
  { id: 2, title: 'Second post' },
]
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
      —
      <DisqusCount :identifier="`/blog/${post.id}`" />
    </li>
  </ul>
</template>
```

Each count renders inside a `<span>` by default and shows output like `12 Comments`.

:::caution
The `identifier` on `<DisqusCount />` must **match** the `identifier` on the matching `<DisqusComments />` thread. If they differ, the count won't reflect the thread.
:::

## Count as a link

Set `tag="a"` and pass the page `url` to render the count as an anchor that links straight to the comments section:

```vue
<template>
  <DisqusCount
    tag="a"
    url="https://example.com/blog/1"
    identifier="/blog/1"
  />
</template>
```

When `tag` is `"a"`, the rendered link points at the page URL with the `#disqus_thread` anchor, so clicking it jumps the reader to the comments.

## Choosing the wrapper element

The `tag` prop controls which element wraps the count. Use a heading or a paragraph if that fits your layout better:

```vue
<template>
  <DisqusCount tag="p" identifier="/blog/1" />
</template>
```

## Next steps

- [Basic](/nuxt-disqus/examples/basic/) — render the full thread the count points to.
- [Lazy Loading](/nuxt-disqus/examples/lazy-loading/) — control when the thread script loads.
