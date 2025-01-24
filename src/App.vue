<template>
  <header>{{ $t('invitation') }}</header>
  <ul class="locations">
    <li v-for="location in locations" :key="location.name">
      <h3>{{ location.name }}</h3>
      <section>
        <h4>Address</h4>
        <p>{{ location.address }}</p>
      </section>
      <section>
        <h4>Time</h4>
        <p>{{ location.time }}</p>
      </section>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const locations = ref([
  { name: 'city-hall', time: '14h00', address: '123 Main St', city: 'Springfield', state: 'IL' },
  { name: 'church', time: '15h30', address: '123 Main St', city: 'Springfield', state: 'IL' },
  { name: 'restaurant', time: '19h00', address: '123 Main St', city: 'Springfield', state: 'IL' },
])
</script>

<style lang="scss">
@use '@/assets/global';

body {
  background-color: global.$primary--color;
  color: global.$secondary--color;
}
</style>

<style lang="scss" scoped>
@use '@/assets/global';

.locations {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: global.$secondary--color;
    color: global.$primary--color;
    width: 70%;

    h3 {
      margin-top: 0;
    }

    section {
      margin-bottom: 1rem;

      h4 {
        margin-top: 0;
      }
    }
  }
}
</style>
