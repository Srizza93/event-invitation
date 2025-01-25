<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { initLanguage } from '@/services/languageService'

onMounted(() => initLanguage())
</script>

<style lang="scss">
@use '@/assets/global';

body {
  background-color: global.$primary--color;
  background-image: url('@/assets/vintage-paper.jpg');
  background-size: cover;
  color: global.$secondary--color;
  font-family: 'Garamond', 'Times New Roman', serif; // Adding a vintage font-family
  padding: 2rem;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
