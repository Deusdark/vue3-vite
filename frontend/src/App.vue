<script setup lang="ts">
import { RouterView } from "vue-router";
import CategoryButtons from "@/components/Category/CategoryButtons.vue";
import IconCart from "./components/icons/IconCart.vue";
import { useCart } from "./composables/useCart";
import MenuButton from "./components/Category/MenuButton.vue";

const { nbItems } = useCart();
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
