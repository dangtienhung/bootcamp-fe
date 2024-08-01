import English from '@/assets/locales/english.json'
import Vietnamese from '@/assets/locales/vietnamese.json'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

//Import all translation files

const resources = {
  en: {
    translation: English
  },
  vn: {
    translation: Vietnamese
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'vn' //default language
})

export default i18next
