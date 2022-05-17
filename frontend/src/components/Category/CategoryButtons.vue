<script setup lang="ts">
import { APISettings } from "@/api/APISettings";
import type { Category } from "@/core/models/Category";
import { useFetch } from "@vueuse/core";
import CategoryButton from "./CategoryButton.vue";

const { error, data: categories } = useFetch<Category>(
  APISettings.baseURL + "/categories"
).json();
</script>

<template>
  <div>
    <template v-for="category in categories">
      <CategoryButton
        v-if="!error"
        :to="`/categories/${category.slug}`"
        :key="category.id"
        class=""
      >
        {{ category.name }}
      </CategoryButton>
    </template>
  </div>
</template>

<style scoped></style>
