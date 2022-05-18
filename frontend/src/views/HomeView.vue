<script setup lang="ts">
import { APISettings } from "@/api/APISettings";
import type { Product } from "@/core/models/Product";
import { useFetch } from "@vueuse/core";
import ProductList from "../components/Product/ProductList.vue";

const { error, isFinished, data: products } = await useFetch(
  APISettings.baseURL + "/products"
).json<Product[]>();

function timeoutAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });
}

await timeoutAsync();
</script>

<template>
  <ProductList :products="products" :error="error" :isFinished="isFinished" />
</template>
