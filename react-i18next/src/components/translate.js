import i18n from "i18next";
import { reactI18nextModule, translate } from "react-i18next";

import en from "./locale/en.json";
import es from "./locale/es.json";

let i18Initialized = false;

export default function(component) {
  initI18n();

  return translate()(component);
}

function initI18n() {
  if (i18Initialized) return;

  console.log("initi18n");

  i18Initialized = true;

  i18n.use(reactI18nextModule).init(
    {
      ns: "site-package",
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
}
