<template>
  <VueDisqusCount v-bind="props" />
</template>

<script setup>
import { DisqusCount as VueDisqusCount } from 'vue3-disqus'
import { useNuxtApp } from '#imports'

const props = defineProps({
  ...VueDisqusCount.props,
  shortname: {
    type: String,
    default: () => useNuxtApp()?.$disqusOptions?.shortname,
  },
})
</script>
