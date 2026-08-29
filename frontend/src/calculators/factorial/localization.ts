import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Факториал": "Factorial",
    "Разрядов в ответе": "Digits in the answer",
    "Научная форма": "Scientific form",
    "Запись": "Written out",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Факториал": "Факторіал",
    "Разрядов в ответе": "Розрядів у відповіді",
    "Научная форма": "Наукова форма",
    "Запись": "Запис",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'n': 'Zahl n',
    },
    results: {
      'Факториал': 'Fakultät',
      'Разрядов в ответе': 'Stellen im Ergebnis',
      'Научная форма': 'Wissenschaftliche Schreibweise',
      'Запись': 'Ausgeschrieben',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'по определению': 'nach Festlegung',
      'Число должно быть целым': 'Die Zahl muss eine ganze Zahl sein',
      'Факториал определён для неотрицательных целых': 'Die Fakultät ist für nicht negative ganze Zahlen festgelegt',
      'Здесь считаются факториалы до 170: дальше результат перестаёт читаться': 'Hier werden Fakultäten bis 170 gerechnet: darüber hinaus hört das Ergebnis auf, lesbar zu sein',
    },
  },
  en: {
    fields: { n: "Number n" },
    results: RESULTS_EN,
    values: {
    "по определению": "by definition",
    "Число должно быть целым": "The number must be a whole number",
    "Факториал определён для неотрицательных целых": "A factorial is defined for non-negative whole numbers",
    "Здесь считаются факториалы до 170: дальше результат перестаёт читаться": "This calculator goes up to 170: beyond that the answer stops being readable",
    },
  },
  uk: {
    fields: { n: "Число n" },
    results: RESULTS_UK,
    values: {
    "по определению": "за визначенням",
    "Число должно быть целым": "Число має бути цілим",
    "Факториал определён для неотрицательных целых": "Факторіал визначений для невід’ємних цілих",
    "Здесь считаются факториалы до 170: дальше результат перестаёт читаться": "Тут рахуються факторіали до 170: далі результат перестає читатися",
    },
  },
};
