import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Балясин': 'Balusters', 'Фактический просвет': 'Actual gap', 'Шаг между осями': 'Centre-to-centre pitch',
  'Суммарная ширина стоек': 'Total baluster width', 'Просветов': 'Gaps',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Балясин': 'Балясин', 'Фактический просвет': 'Фактичний просвіт', 'Шаг между осями': 'Крок між осями',
  'Суммарная ширина стоек': 'Сумарна ширина стійок', 'Просветов': 'Просвітів',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { run: 'Clear run between posts, mm', baluster_width: 'Baluster width, mm', max_gap: 'Maximum gap, mm' },
    options: {},
    results: RESULTS_EN,
    values: {
      'шт': 'pcs', 'мм': 'mm',
      'Пролёт должен быть больше нуля': 'The run must be greater than zero',
      'Ширина стойки должна быть больше нуля': 'The baluster width must be greater than zero',
      'Предельный просвет должен быть больше нуля': 'The maximum gap must be greater than zero',
      'Стойка не может быть шире пролёта': 'A baluster cannot be wider than the run',
      'При таком просвете стойки не помещаются в пролёт': 'At that gap the balusters do not fit the run',
      'Пролёт слишком велик для такого просвета': 'The run is too long for that gap',
    },
  },
  uk: {
    fields: { run: 'Проліт між опорами, мм', baluster_width: 'Ширина стійки, мм', max_gap: 'Граничний просвіт, мм' },
    options: {},
    results: RESULTS_UK,
    values: {
      'шт': 'шт', 'мм': 'мм',
      'Пролёт должен быть больше нуля': 'Проліт має бути більшим за нуль',
      'Ширина стойки должна быть больше нуля': 'Ширина стійки має бути більшою за нуль',
      'Предельный просвет должен быть больше нуля': 'Граничний просвіт має бути більшим за нуль',
      'Стойка не может быть шире пролёта': 'Стійка не може бути ширшою за проліт',
      'При таком просвете стойки не помещаются в пролёт': 'За такого просвіту стійки не вміщуються у проліт',
      'Пролёт слишком велик для такого просвета': 'Проліт завеликий для такого просвіту',
    },
  },
};
