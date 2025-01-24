import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import en from './i18n/en_EN.json'
import fr from './i18n/fr_FR.json'
import it from './i18n/it_IT.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    it,
  },
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
