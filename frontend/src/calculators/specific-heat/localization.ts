import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Энергия': 'Energy', 'Изменение температуры': 'Temperature change', 'Масса': 'Mass',
  'В киловатт-часах': 'In kilowatt-hours', 'Удельная теплоёмкость': 'Specific heat capacity',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Энергия': 'Енергія', 'Изменение температуры': 'Зміна температури', 'Масса': 'Маса',
  'В киловатт-часах': 'У кіловат-годинах', 'Удельная теплоёмкость': 'Питома теплоємність',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find', mass: 'Mass, kg', c: 'Specific heat capacity, J/(kg·K)',
      dt: 'Temperature change, K', q: 'Energy, J',
    },
    options: { energy: 'the energy', deltaT: 'the temperature change', mass: 'the mass' },
    results: RESULTS_EN,
    values: {
      'Дж/(кг·К)': 'J/(kg·K)', 'кВт·ч': 'kWh', 'Дж': 'J', 'кг': 'kg', 'К': 'K',
      'Удельная теплоёмкость должна быть больше нуля': 'The specific heat capacity must be greater than zero',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Изменение температуры не может быть нулевым: делить на него нечего': 'The temperature change cannot be zero: there is nothing to divide by',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', mass: 'Маса, кг', c: 'Питома теплоємність, Дж/(кг·К)',
      dt: 'Зміна температури, К', q: 'Енергія, Дж',
    },
    options: { energy: 'енергію', deltaT: 'зміну температури', mass: 'масу' },
    results: RESULTS_UK,
    values: {
      'Дж/(кг·К)': 'Дж/(кг·К)', 'кВт·ч': 'кВт·год', 'Дж': 'Дж', 'кг': 'кг', 'К': 'К',
      'Удельная теплоёмкость должна быть больше нуля': 'Питома теплоємність має бути більшою за нуль',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Изменение температуры не может быть нулевым: делить на него нечего': 'Зміна температури не може бути нульовою: ділити на неї нічого',
    },
  },
};
