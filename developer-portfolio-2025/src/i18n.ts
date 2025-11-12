import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// import translation files
import en from './Locales/en.json';
import it from './Locales/it.json';
import fr from './Locales/fr.json';


const resources = {
en: { translation: en },
it: { translation: it },
fr: { translation: fr },
};


const savedLng = (typeof window !== 'undefined' && localStorage.getItem('lng')) || undefined;


i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
resources,
lng: savedLng || 'en',
fallbackLng: 'en',
interpolation: {
escapeValue: false, // react already safes from xss
},
react: {
useSuspense: false, // set to true if you want to use Suspense
},
});


export default i18n;