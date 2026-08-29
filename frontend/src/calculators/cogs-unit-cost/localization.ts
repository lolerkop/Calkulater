import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'materials': 'Material, €',
      'labor': 'Arbeit, €',
      'overhead': 'Gemeinkosten, €',
      'units': 'Hergestellte Einheiten',
    },
    results: {
      'Себестоимость единицы': 'Kosten je Einheit',
      'Всего затрат': 'Gesamtkosten',
      'Единиц': 'Einheiten',
      'Доля материалов': 'Materialanteil',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Затраты не могут быть отрицательными': 'Kosten können nicht negativ sein',
      'Тираж должен быть больше нуля': 'Die Zahl der Einheiten muss größer als null sein',
    },
  },
  en: {
    fields: {
      materials: 'Materials, ₽',
      labor: 'Labour, ₽',
      overhead: 'Overhead, ₽',
      units: 'Units produced',
    },
    results: {
      'Себестоимость единицы': 'Cost per unit',
      'Всего затрат': 'Total cost',
      'Единиц': 'Units',
      'Доля материалов': 'Materials share',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Затраты не могут быть отрицательными': 'Costs cannot be negative',
      'Тираж должен быть больше нуля': 'The number of units must be greater than zero',
    },
  },
  uk: {
    fields: {
      materials: 'Матеріали, ₽',
      labor: 'Праця, ₽',
      overhead: 'Накладні витрати, ₽',
      units: 'Вироблено одиниць',
    },
    results: {
      'Себестоимость единицы': 'Собівартість одиниці',
      'Всего затрат': 'Усього витрат',
      'Единиц': 'Одиниць',
      'Доля материалов': 'Частка матеріалів',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Затраты не могут быть отрицательными': 'Витрати не можуть бути від’ємними',
      'Тираж должен быть больше нуля': 'Тираж має бути більшим за нуль',
    },
  },
};
