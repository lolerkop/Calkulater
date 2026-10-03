import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"income": "Monthly income after tax"},
    results: { ...runtimeScalarPhrases("en",[6]),"Нужды": "Needs", "Желания": "Wants", "Сбережения": "Savings", "Доход после налогов": "Income after tax" },
    values: { ...runtimeScalarPhrases("en",[2, 0, 4, 7]), },
    options: {},
  },
  "uk": {
    fields: {"income": "Місячний дохід після податків"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Нужды": "Потреби", "Желания": "Бажання", "Сбережения": "Заощадження", "Доход после налогов": "Дохід після податків" },
    values: { ...runtimeScalarPhrases("uk",[3, 1, 6, 9]), },
    options: {},
  },
  "de": {
    fields: {"income": "Monatliches Nettoeinkommen"},
    results: { ...runtimeScalarPhrases("de",[8]),"Нужды": "Bedarf", "Желания": "Wünsche", "Сбережения": "Sparen", "Доход после налогов": "Einkommen nach Steuern" },
    values: { ...runtimeScalarPhrases("de",[3, 2, 6, 10]), },
    options: {},
  },
  "es": {
    fields: {"income": "Ingresos mensuales netos"},
    options: {},
    results: { ...runtimeScalarPhrases("es",[7]),"Нужды": "Necesidades", "Желания": "Deseos", "Сбережения": "Ahorro", "Доход после налогов": "Ingresos netos" },
    values: { ...runtimeScalarPhrases("es",[2, 0, 4, 9]), },
  },
};
