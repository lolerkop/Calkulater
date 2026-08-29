import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается,
// это вернуло бы ручную регистрацию.
const RESULTS_EN = {
  'Масса сухой смеси': 'Dry mix mass',
  'Мешков': 'Bags',
  'Расход на м²': 'Consumption per m²',
  'Площадь': 'Area',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Масса сухой смеси': 'Маса сухої суміші',
  'Мешков': 'Мішків',
  'Расход на м²': 'Витрата на м²',
  'Площадь': 'Площа',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Wie die Fläche angegeben wird',
      'area': 'Wandfläche, m²',
      'length': 'Wandlänge, m',
      'height': 'Wandhöhe, m',
      'thickness': 'Schichtdicke, mm',
      'consumption': 'Verbrauch, kg/m² je 1 mm',
      'bagWeight': 'Sackgewicht, kg',
    },
    options: {
      'area': 'über die Fläche',
      'dimensions': 'über Länge und Höhe',
    },
    results: {
      'Масса сухой смеси': 'Masse des Trockenmörtels',
      'Мешков': 'Säcke',
      'Расход на м²': 'Verbrauch je m²',
      'Площадь': 'Fläche',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' шт': ' Stk',
      ' кг': ' kg',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Толщина слоя должна быть больше нуля': 'Die Schichtdicke muss größer als null sein',
      'Расход смеси должен быть больше нуля': 'Der Verbrauch muss größer als null sein',
      'Вес мешка должен быть больше нуля': 'Das Sackgewicht muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'How to give the area', area: 'Wall area, m²', length: 'Wall length, m', height: 'Wall height, m', thickness: 'Layer thickness, mm', consumption: 'Consumption, kg/m² per 1 mm', bagWeight: 'Bag weight, kg', },
    options: { area: 'by area', dimensions: 'by length and height', },
    results: RESULTS_EN,
    values: {
      ' шт': ' pcs',
      ' кг': ' kg',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Толщина слоя должна быть больше нуля': 'The layer thickness must be greater than zero',
      'Расход смеси должен быть больше нуля': 'The consumption must be greater than zero',
      'Вес мешка должен быть больше нуля': 'The bag weight must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Як задати площу', area: 'Площа стіни, м²', length: 'Довжина стіни, м', height: 'Висота стіни, м', thickness: 'Товщина шару, мм', consumption: 'Витрата суміші, кг/м² на 1 мм', bagWeight: 'Вага мішка, кг', },
    options: { area: 'площею', dimensions: 'довжиною і висотою', },
    results: RESULTS_UK,
    values: {
      ' шт': ' шт',
      ' кг': ' кг',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Толщина слоя должна быть больше нуля': 'Товщина шару має бути більшою за нуль',
      'Расход смеси должен быть больше нуля': 'Витрата суміші має бути більшою за нуль',
      'Вес мешка должен быть больше нуля': 'Вага мішка має бути більшою за нуль',
    },
  },
};
