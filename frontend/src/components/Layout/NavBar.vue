<script setup lang="ts">
import { useCart } from "@/composables/useCart";
import CategoryButtons from "../Category/CategoryButtons.vue";

const { nbItems } = useCart();
</script>
<template>
  <nav class="flex justify-between">
    <div class="flex justify-center">
      <RouterLink
        to="/"
        class="mx-2 text-sm font-semibold bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
      >
        Home
      </RouterLink>
      <CategoryButtons />
    </div>
    <div class="relative inline-block">
      <span><IconCart /></span>
      <span
        v-if="nbItems"
        class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
        >{{ nbItems }}</span
      >
    </div>
  </nav>
</template>
