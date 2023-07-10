<template>
  <VueDisqusComments v-bind="disqusOptions" />
</template>

<script setup>
import { useNuxtApp } from "#imports";

import { DisqusComments as VueDisqusComments } from "vue3-disqus";

const disqusOptions = useNuxtApp()?.$disqusOptions || {};
</script>
