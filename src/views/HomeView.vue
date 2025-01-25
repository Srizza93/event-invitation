<template>
  <header class="invitation">
    <img src="../assets/wedding.jpg" alt="Wedding" class="invitation__image" />
    <p class="invitation__message">{{ $t('invitation') }}</p>
  </header>
  <ul class="locations">
    <li v-for="location in locations" :key="location.name">
      <h3 class="locations__title">{{ $t('locations.' + location.name) }}</h3>
      <div class="locations__appointment">
        <section class="section">
          <h4 class="section__title">{{ $t('locations.time') }}:</h4>
          <p>{{ location.time }}</p>
        </section>
        <section class="section">
          <h4 class="section__title">{{ $t('locations.address') }}:</h4>
          <p>
            <a
              class="section__address"
              :href="generateGoogleMapsLink(location.address)"
              target="_blank"
              >{{ location.address }}</a
            >
          </p>
        </section>
      </div>
    </li>
  </ul>
  <options-modal
    :selected-language="selectedLanguage"
    :options="availableLanguages"
    :is-modal-open="isLanguageModalOpen"
    @select-option="selectLanguage"
    @open-modal="toggleModal"
    @close-modal="toggleModal"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import OptionsModal from '@/components/OptionsModal.vue'
import { getLanguageFlag, getLanguageId, selectLanguage } from '@/services/languageService'
import i18n from '@/i18n'

const locations = ref([
  { name: 'city-hall', time: '14h00', address: '39 Rue Faidherbe, 59810 Lesquin' },
  { name: 'church', time: '15h30', address: '79 Rue Pasteur, 59810 Lesquin' },
  { name: 'restaurant', time: '19h00', address: '14 Rue de la Becque, 59710 Avelin' },
])

const generateGoogleMapsLink = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

const isLanguageModalOpen = ref(false)
const availableLanguages = computed(() =>
  i18n.global.availableLocales.map((lang: string) => ({
    name: lang,
    img: getLanguageFlag(lang),
    selected: getLanguageId(i18n.global.locale) === lang,
  })),
)
const selectedLanguage = computed(() =>
  availableLanguages.value.find((language) => language.selected),
)

function toggleModal() {
  isLanguageModalOpen.value = !isLanguageModalOpen.value
}
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

<style lang="scss" scoped>
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

.invitation {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid #8b4513; // Decorative border
  padding-bottom: 1rem;

  &__image {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adding a subtle shadow
  }

  &__message {
    font-style: italic;
    white-space: break-spaces;
  }
}

.locations {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;

  &__title {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #8b4513;
    border-bottom: 1px solid #8b4513;
    padding-bottom: 0.2rem;
    margin-bottom: 0.5rem;
  }

  li {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.8); // Slightly transparent white background
    color: global.$secondary--color;
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adding a subtle shadow

    section {
      margin-top: 1rem;

      h4 {
        margin-top: 0;
      }
    }
  }
}

.section {
  display: flex;

  &__title {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  &__address {
    text-decoration: underline;
    color: #8b4513; // Dark brown color for links
    transition: color 0.3s;
    white-space: nowrap;

    &:hover {
      color: #a0522d; // Lighter brown on hover
      text-decoration: none;
    }
  }
}
</style>
