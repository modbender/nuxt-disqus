---
title: Usage
description: Render Disqus comment threads with DisqusComments and comment counts with DisqusCount — the identifier you must pass, lazy loading, and emitted events.
sidebar:
  order: 3
---

Nuxt Disqus gives you two auto-imported components. You can use them in any component or page without an import statement.

| Component | Description |
| --- | --- |
| `<DisqusComments />` | Renders a full Disqus comment thread for a page. |
| `<DisqusCount />` | Renders the comment count for a page (for example, "12 Comments"). |

## Render a comment thread

Drop `<DisqusComments />` where you want the thread, and give it an `identifier` — a stable, unique string that ties the thread to a specific page:

```vue
<template>
  <article>
    <h1>My first post</h1>
    <!-- ...post content... -->
    <DisqusComments identifier="/blog/1" />
  </article>
</template>
```

The shortname comes from your global `disqus.shortname` config (see [Installation](/nuxt-disqus/installation/)). To use a different Disqus site for a single thread, pass `shortname` on the component:

```vue
<template>
  <DisqusComments shortname="another-site" identifier="/blog/1" />
</template>
```

:::caution
`identifier` is **required**. It's how Disqus distinguishes one page's thread from another — give every page a unique, stable value (your route path or a database id works well). If you change a page's identifier later, its existing comments will no longer appear under it.
:::

## Render a comment count

`<DisqusCount />` renders the number of comments for a page. It takes the same `identifier`:

```vue
<template>
  <DisqusCount identifier="/blog/1" />
</template>
```

The default output is rendered in a `<span>` and looks like:

```text
12 Comments
```

A common pattern is showing the count next to a link in a post list, then the full thread on the post page. Render the count as a link by setting `tag="a"` and passing the page `url`:

```vue
<template>
  <NuxtLink to="/blog/1">
    <DisqusCount tag="a" url="https://example.com/blog/1" identifier="/blog/1" />
  </NuxtLink>
</template>
```

## Lazy loading

By default, `<DisqusComments />` is **lazy** — the Disqus embed script loads only when the thread scrolls into view, using an `IntersectionObserver`. This keeps the heavy third-party script off your initial page load.

To load the thread immediately instead, set `:lazy="false"`:

```vue
<template>
  <DisqusComments identifier="/blog/1" :lazy="false" />
</template>
```

You can also tune the observer's trigger distance with `lazyConfig` — see [Configuration](/nuxt-disqus/configuration/).

## Reacting to thread events

`<DisqusComments />` re-emits the Disqus thread lifecycle callbacks as Vue events, so you can react to them — for example, to know when the thread has finished rendering or when a new comment is posted:

```vue
<script setup lang="ts">
function onReady() {
  console.log('Disqus thread is ready')
}

function onNewComment(comment: unknown) {
  console.log('A new comment was posted', comment)
}
</script>

<template>
  <DisqusComments
    identifier="/blog/1"
    @ready="onReady"
    @new-comment="onNewComment"
  />
</template>
```

The full set of emitted events: `pre-data`, `pre-init`, `after-render`, `init`, `ready`, `identify`, `paginate`, `new-comment`, `before-comment`, and `pre-reset`.

## Next steps

- [Configuration](/nuxt-disqus/configuration/) — the `disqus` module options and every component prop.
- [Examples](/nuxt-disqus/examples/basic/) — copy-paste, end-to-end recipes.
