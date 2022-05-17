<script setup lang="ts">
import { ref, watch } from "vue";
import { APISettings } from "@/api/APISettings";
import type { Category } from "@/core/models/Category";
import ProductList from "../components/Product/ProductList.vue";
import { useFetch } from "@vueuse/core";
import { useRoute } from "vue-router";

const route = useRoute();
let category = ref({} as Category);
let isFinished = ref(false);
let error = ref(null);

async function fetchData() {
  const response = await useFetch<Category>(
    APISettings.baseURL + "/categories/" + route.params.id
  ).json();
  category.value = response.data.value;
  isFinished.value = response.isFinished.value;
  error.value = response.error.value;
}

await fetchData();

watch(() => route.params.id, fetchData);
</script>

<template>
  <ProductList :products="category.products" :error="error" :isFinished="isFinished" />
</template>

<style scoped></style>
