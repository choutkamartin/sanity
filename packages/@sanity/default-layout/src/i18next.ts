import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import config from 'config:sanity'

const resources = {
  en: {
    translation: {
      'Manage project': 'Manage project',
      dashboard: 'Dashboard',
    },
  },
  fr: {
    translation: {
      'Manage project': 'Gérer des projet',
      dashboard: 'Tableau de bord',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language'),
    fallbackLng: config.language,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
