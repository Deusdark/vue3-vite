<script setup lang="ts">
import type { PropType } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

defineProps({
  to: {
      type: String as PropType<RouteLocationRaw>,
      required: true
  }
});
</script>

<template>
  <RouterLink
    :to="to"
    class="mx-2 text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
  >
    <slot></slot>
  </RouterLink>
</template>

<style scoped></style>
