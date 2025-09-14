import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationZH from "./locales/zh/translation.json"
import translationEN from "./locales/en/translation.json"

const resources = {
  zh: { translation: translationZH },
  en: { translation: translationEN },
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      zh: {
        translation: translationZH,
      }
    },
    lng: "zh", 
    fallbackLng: "zh", 
    interpolation: {
      escapeValue: false, 
    },
  })

export default i18n


