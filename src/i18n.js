// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Load translations from backend (locales)
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Integrate with React
  .init({
    lng: "en",
    fallbackLng: "en", // Default language if no match
    debug: true,
    interpolation: {
      escapeValue: false, // React handles XSS protection
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation file path
    },
  });

export default i18n;
