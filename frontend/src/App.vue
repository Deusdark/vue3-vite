<script setup lang="ts">
import NavHeader from "./components/Layout/NavHeader.vue";
import NavBar from "./components/Layout/NavBar.vue";
</script>

<template>
  <header>
    <NavHeader />
    <NavBar />
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <div class="">Loading...</div>
        </template>
      </suspense>
    </RouterView>
  </main>
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
