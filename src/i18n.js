// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     lng: "en",
//     resources: {
//       // so here, the key has to be called exactly the same working with i18next
//       en: {
//         translation: {
//           greeting: "Hello World!",
//         },
//       },
//       tam: {
//         translation: {
//           greeting: "வணக்கம் உலகம்!",
//         },
//       },
//       hi: {
//         translation: {
//           greeting: "हैलो वर्ल्ड!",
//         },
//       },
//     },
//   });

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // load translation files
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // bind to React
  .init({
    fallbackLng: "en", // if no detected language, use English
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
