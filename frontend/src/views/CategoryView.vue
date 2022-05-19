<script setup lang="ts">
import ProductList from "../components/Product/ProductList.vue";
import { useCategories } from "@/composables/useCategories";

const { data } = await useCategories();
</script>

<template>
  <ProductList
    :products="data.category.products"
    :error="data.error"
    :isFinished="data.isFinished"
  />
</template>
