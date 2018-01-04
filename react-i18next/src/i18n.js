import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import en from "./locale/en.json";
import es from "./locale/es.json";

i18n.use(reactI18nextModule).init(
  {
    interpolation: {
      escapeValue: false
    },
    lng: "en", // 'en' | 'es'
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    }
  },
  (err, t) => {
    if (err) {
      throw new Error(err);
    }
  }
);

export default i18n;
