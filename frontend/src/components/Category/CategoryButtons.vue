<script setup lang="ts">
import { APISettings } from "@/api/APISettings";
import type { Category } from "@/core/models/Category";
import { useFetch } from "@vueuse/core";
import MenuButton from "./MenuButton.vue";

const { error, data: categories } = useFetch<Category>(
  APISettings.baseURL + "/categories"
).json();
</script>

<template>
  <template v-for="category in categories">
    <MenuButton v-if="!error" :to="`/categories/${category.slug}`" :key="category.id">
      {{ category.name }}
    </MenuButton>
  </template>
</template>

<style scoped></style>
