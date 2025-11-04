import { createI18n } from 'vue-i18n'
import zh from '../locales/zh'
import en from '../locales/en'

// Get saved language from localStorage or default to Chinese
const savedLocale = localStorage.getItem('language') || 'zh'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
