<script setup lang="ts">
import { RouterView } from "vue-router";
import CategoryButtons from "@/components/Category/CategoryButtons.vue";
</script>

<template>
  <header>
    <div class="flex items-center justify-between">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <span class="text-2xl">+</span>
      <img alt="Vue logo" class="logo" src="@/assets/logo-vite.png" />
      <span class="text-2xl">+</span>
      <img alt="Vue logo" class="logo" src="@/assets/logo-strapi.svg" />
    </div>
    <nav>
      <CategoryButtons class="flex justify-center" />
    </nav>
  </header>
  <Suspense>
    <div>
      <RouterView />
    </div>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  max-height: 100px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  margin-top: 2rem;
}
</style>
