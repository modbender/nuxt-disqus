<template>
  <VueDisqusCount v-bind="disqusOptions" />
</template>

<script setup>
import { useNuxtApp } from "#imports";

import { DisqusCount as VueDisqusCount } from "vue3-disqus";

const disqusOptions = useNuxtApp()?.$disqusOptions || {};
</script>
