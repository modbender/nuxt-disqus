<template>
  <VueDisqusComments v-bind="props" />
</template>

<script setup>
import { DisqusComments as VueDisqusComments } from 'vue3-disqus'
import { useNuxtApp } from '#imports'

const props = defineProps({
  ...VueDisqusComments.props,
  shortname: {
    type: String,
    default: () => useNuxtApp()?.$disqusOptions?.shortname,
  },
})
</script>
