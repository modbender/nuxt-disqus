---
title: Lazy Loading
description: Control when the Disqus thread loads — the default lazy behaviour, eager loading, and tuning the IntersectionObserver via lazyConfig.
sidebar:
  order: 3
---

The Disqus embed script is heavy, so by default `<DisqusComments />` waits until the thread is about to enter the viewport before loading it. This example shows the default, how to opt out, and how to tune the trigger.

## Default: lazy

Out of the box, `lazy` is `true`. The component uses an `IntersectionObserver` and only loads Disqus when the thread scrolls near the viewport — no configuration needed:

```vue
<template>
  <DisqusComments identifier="/blog/1" />
</template>
```

This keeps the third-party script off your initial page load, which is especially valuable when the comments sit far below the fold.

## Eager loading

If the thread is above the fold, or you simply want it loaded on mount, turn lazy loading off with `:lazy="false"`:

```vue
<template>
  <DisqusComments identifier="/blog/1" :lazy="false" />
</template>
```

:::tip
When `lazy` is `false`, the embed script loads as soon as the component mounts (on the client), and `lazyConfig` is ignored.
:::

## Tuning the trigger distance

The `lazyConfig` prop is passed directly to the `IntersectionObserver`. Its defaults are:

```ts
{
  root: null,
  rootMargin: '300px',
  threshold: 0.5,
}
```

`rootMargin` is the most useful knob: a larger value starts loading the thread earlier (further before it reaches the viewport), so it's ready by the time the reader scrolls to it:

```vue
<template>
  <DisqusComments
    identifier="/blog/1"
    :lazy-config="{ root: null, rootMargin: '800px', threshold: 0 }"
  />
</template>
```

To load almost immediately on any scroll, drop `threshold` to `0` and widen `rootMargin`. To load only when the thread is well into view, lower `rootMargin` and raise `threshold`.

:::caution
`lazyConfig` only applies when `lazy` is `true`. Setting `:lazy="false"` overrides it entirely and loads the thread on mount.
:::

## Next steps

- [Basic](/nuxt-disqus/examples/basic/) — the minimal end-to-end thread setup.
- [Configuration](/nuxt-disqus/configuration/) — every component prop in one place.
