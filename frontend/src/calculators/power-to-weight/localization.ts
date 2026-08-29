import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Удельная мощность': 'Power to weight', 'Лошадиных сил на тонну': 'Horsepower per tonne',
  'Килограммов на силу': 'Kilograms per horsepower', 'Мощность': 'Power',
  'Расчётная масса': 'Mass used', 'Без нагрузки было бы': 'Without the load it would be', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Удельная мощность': 'Питома потужність', 'Лошадиных сил на тонну': 'Кінських сил на тонну',
  'Килограммов на силу': 'Кілограмів на силу', 'Мощность': 'Потужність',
  'Расчётная масса': 'Розрахункова маса', 'Без нагрузки было бы': 'Без навантаження було б', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'power': 'Motorleistung',
      'powerUnit': 'Einheit der Leistung',
      'mass': 'Leergewicht, kg',
      'payload': 'Zusätzliche Last, kg',
    },
    options: {
      'ps': 'Pferdestärken (PS)',
      'kw': 'Kilowatt (kW)',
    },
    results: {
      'Удельная мощность': 'Leistungsgewicht',
      'Лошадиных сил на тонну': 'PS je Tonne',
      'Килограммов на силу': 'Kilogramm je PS',
      'Мощность': 'Leistung',
      'Расчётная масса': 'Verwendete Masse',
      'Без нагрузки было бы': 'Ohne Last wären es',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кВт/т': 'kW/t',
      'л.с./т': 'PS/t',
      'кг/л.с.': 'kg/PS',
      'кВт': 'kW',
      'л.с.': 'PS',
      'кг': 'kg',
      'Мощность должна быть больше нуля': 'Die Leistung muss größer als null sein',
      'Масса должна быть больше нуля': 'Die Masse muss größer als null sein',
      'Дополнительная нагрузка не может быть отрицательной': 'Die zusätzliche Last kann nicht negativ sein',
    },
  },
  en: {
    fields: { power: 'Engine power', powerUnit: 'Power unit', mass: 'Kerb weight, kg', payload: 'Extra load, kg' },
    options: { ps: 'metric hp (PS)', kw: 'kilowatts (kW)' },
    results: RESULTS_EN,
    values: {
      'кВт/т': 'kW/t', 'л.с./т': 'hp/t', 'кг/л.с.': 'kg/hp', 'кВт': 'kW', 'л.с.': 'hp', 'кг': 'kg',
      'Мощность должна быть больше нуля': 'The power must be greater than zero',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Дополнительная нагрузка не может быть отрицательной': 'The extra load cannot be negative',
    },
  },
  uk: {
    fields: { power: 'Потужність двигуна', powerUnit: 'Одиниця потужності', mass: 'Спорядна маса, кг', payload: 'Додаткове навантаження, кг' },
    options: { ps: 'метричні к.с. (PS)', kw: 'кіловати (кВт)' },
    results: RESULTS_UK,
    values: {
      'кВт/т': 'кВт/т', 'л.с./т': 'к.с./т', 'кг/л.с.': 'кг/к.с.', 'кВт': 'кВт', 'л.с.': 'к.с.', 'кг': 'кг',
      'Мощность должна быть больше нуля': 'Потужність має бути більшою за нуль',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Дополнительная нагрузка не может быть отрицательной': 'Додаткове навантаження не може бути від’ємним',
    },
  },
};
