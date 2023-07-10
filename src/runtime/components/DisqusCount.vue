<template>
  <VueDisqusCount v-bind="props" />
</template>

<script setup>
import { useNuxtApp } from "#imports";

import { DisqusCount as VueDisqusCount } from "vue3-disqus";

const props = defineProps({
  ...VueDisqusCount.props,
  shortname: {
    type: String,
    default: () => useNuxtApp()?.$disqusOptions?.shortname,
  },
});
</script>
