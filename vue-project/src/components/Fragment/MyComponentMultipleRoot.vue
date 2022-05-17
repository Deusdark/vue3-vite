<template>
  <h3>Composant avec plusieurs racines</h3>
  <p>
    Une brève description <br />
    Mes attributs : {{ attrs }}
  </p>
  <button>Envoyer un message</button>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>

<style scoped></style>
