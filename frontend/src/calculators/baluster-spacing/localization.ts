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
  de: {
    fields: {
      'run': 'Lichte Weite zwischen den Pfosten, mm',
      'baluster_width': 'Stabbreite, mm',
      'max_gap': 'Höchstlücke, mm',
    },
    results: {
      'Балясин': 'Geländerstäbe',
      'Фактический просвет': 'Tatsächliche Lücke',
      'Шаг между осями': 'Achsabstand',
      'Суммарная ширина стоек': 'Gesamtbreite der Stäbe',
      'Просветов': 'Lücken',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'шт': 'Stk',
      'мм': 'mm',
      'Пролёт должен быть больше нуля': 'Die lichte Weite muss größer als null sein',
      'Ширина стойки должна быть больше нуля': 'Die Stabbreite muss größer als null sein',
      'Предельный просвет должен быть больше нуля': 'Die Höchstlücke muss größer als null sein',
      'Стойка не может быть шире пролёта': 'Ein Stab kann nicht breiter sein als das Feld',
      'При таком просвете стойки не помещаются в пролёт': 'Bei dieser Lücke passen die Stäbe nicht in das Feld',
      'Пролёт слишком велик для такого просвета': 'Das Feld ist für diese Lücke zu breit',
    },
  },
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
