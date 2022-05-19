<script setup lang="ts">
import { useProducts } from "@/composables/useProducts";
import { useTimeout } from "@vueuse/core";
import ProductList from "../components/Product/ProductList.vue";

const { error, isFinished, data: products } = await useProducts();

// Simulate loading
await useTimeout(1000);
</script>

<template>
  <ProductList :products="products" :error="error" :isFinished="isFinished" />
</template>
