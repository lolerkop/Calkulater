import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
