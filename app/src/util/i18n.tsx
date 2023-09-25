import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          language_use: "Use English",
          home: "Home",
          about: "About",
          paymentMethod: "Payment method",
          Taiwan: "Taiwan",
          "Hong Kong": "Hong Kong",
          origin_country_description: "You are from",
          forget_language_setting: "Forget language setting",
        },
      },
      zh: {
        translation: {
          language_use: "使用中文",
          home: "主頁",
          about: "關於我們",
          paymentMethod: "付款方式",
          Taiwan: "台灣",
          "Hong Kong": "香港",
          origin_country_description: "你來",
          forget_language_setting: "忘記語言設定",
        },
      },
      jp: {
        translation: {
          language_use: "日本語を使用する",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
