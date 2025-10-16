import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engTranslation from "./translations/translation.en.json";
import traduccion from "./translations/translation.es.json";
import deutschTranslation from "./translations/translation.de.json";
import frTranslation from "./translations/translation.fr.json";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  es: {
    translation: traduccion,
  },
  en: {
    translation: engTranslation,
  },
  de: {
    translation: deutschTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "de",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
