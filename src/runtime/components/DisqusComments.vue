<template>
  <VueDisqusComments v-bind="props" />
</template>

<script setup>
import { useNuxtApp } from "#imports";

import { DisqusComments as VueDisqusComments } from "vue3-disqus";

const props = defineProps({
  ...VueDisqusComments.props,
  shortname: {
    type: String,
    default: () => useNuxtApp()?.$disqusOptions?.shortname,
  },
});
</script>
