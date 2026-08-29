import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается,
// это вернуло бы ручную регистрацию.
const RESULTS_EN = {
  'Объём утеплителя': 'Insulation volume',
  'Плит': 'Slabs',
  'Упаковок': 'Packs',
  'Площадь одной плиты': 'Area of one slab',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Объём утеплителя': 'Об’єм утеплювача',
  'Плит': 'Плит',
  'Упаковок': 'Упаковок',
  'Площадь одной плиты': 'Площа однієї плити',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'area': 'Zu dämmende Fläche, m²',
      'thickness': 'Schichtdicke, mm',
      'slabArea': 'Fläche einer Platte, m²',
      'perPack': 'Platten je Paket',
    },
    results: {
      'Объём утеплителя': 'Volumen des Dämmstoffs',
      'Плит': 'Platten',
      'Упаковок': 'Pakete',
      'Площадь одной плиты': 'Fläche einer Platte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' шт': ' Stk',
      ' кг': ' kg',
      'Площадь должна быть больше нуля': 'Die Fläche muss größer als null sein',
      'Толщина должна быть больше нуля': 'Die Dicke muss größer als null sein',
      'Площадь плиты должна быть больше нуля': 'Die Fläche einer Platte muss größer als null sein',
      'В упаковке должна быть хотя бы одна плита': 'Ein Paket muss mindestens eine Platte enthalten',
    },
  },
  en: {
    fields: { area: 'Area to insulate, m²', thickness: 'Layer thickness, mm', slabArea: 'Area of one slab, m²', perPack: 'Slabs per pack', },
    options: { },
    results: RESULTS_EN,
    values: {
      ' шт': ' pcs',
      ' кг': ' kg',
      'Площадь должна быть больше нуля': 'The area must be greater than zero',
      'Толщина должна быть больше нуля': 'The thickness must be greater than zero',
      'Площадь плиты должна быть больше нуля': 'The slab area must be greater than zero',
      'В упаковке должна быть хотя бы одна плита': 'A pack must contain at least one slab',
    },
  },
  uk: {
    fields: { area: 'Площа утеплення, м²', thickness: 'Товщина шару, мм', slabArea: 'Площа однієї плити, м²', perPack: 'Плит в упаковці', },
    options: { },
    results: RESULTS_UK,
    values: {
      ' шт': ' шт',
      ' кг': ' кг',
      'Площадь должна быть больше нуля': 'Площа має бути більшою за нуль',
      'Толщина должна быть больше нуля': 'Товщина має бути більшою за нуль',
      'Площадь плиты должна быть больше нуля': 'Площа плити має бути більшою за нуль',
      'В упаковке должна быть хотя бы одна плита': 'В упаковці має бути щонайменше одна плита',
    },
  },
};
