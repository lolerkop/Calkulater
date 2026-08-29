import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'power': 'Leistung, PS',
      'mass': 'Leermasse mit Fahrer, kg',
    },
    results: {
      'Время четверти мили': 'Zeit auf der Viertelmeile',
      'Скорость на финише': 'Endgeschwindigkeit',
      'Удельная мощность': 'Leistungsgewicht',
      'Масса в фунтах': 'Masse in Pfund',
      'Скорость на финише в милях в час': 'Endgeschwindigkeit in Meilen je Stunde',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'с': 's',
      'км/ч': 'km/h',
      'л.с./т': 'PS/t',
      'фунт': 'lb',
      'миль/ч': 'mph',
      'Мощность должна быть больше нуля': 'Die Leistung muss größer als null sein',
      'Масса должна быть больше нуля': 'Die Masse muss größer als null sein',
    },
  },
  en: {
    fields: { power: 'Power, hp', mass: 'Kerb mass with driver, kg' },
    options: {},
    results: {
      'Время четверти мили': 'Quarter mile time', 'Скорость на финише': 'Trap speed',
      'Удельная мощность': 'Power to weight', 'Масса в фунтах': 'Mass in pounds',
      'Скорость на финише в милях в час': 'Trap speed in mph',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'с': 's', 'км/ч': 'km/h', 'л.с./т': 'hp/t', 'фунт': 'lb', 'миль/ч': 'mph',
      'Мощность должна быть больше нуля': 'The power must be greater than zero',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
    },
  },
  uk: {
    fields: { power: 'Потужність, к.с.', mass: 'Спорядна маса з водієм, кг' },
    options: {},
    results: {
      'Время четверти мили': 'Час чверті милі', 'Скорость на финише': 'Швидкість на фініші',
      'Удельная мощность': 'Питома потужність', 'Масса в фунтах': 'Маса у фунтах',
      'Скорость на финише в милях в час': 'Швидкість на фініші в милях за годину',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'с': 'с', 'км/ч': 'км/год', 'л.с./т': 'к.с./т', 'фунт': 'фунт', 'миль/ч': 'миль/год',
      'Мощность должна быть больше нуля': 'Потужність має бути більшою за нуль',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
    },
  },
};
