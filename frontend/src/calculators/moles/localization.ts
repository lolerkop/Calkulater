import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц трогать нельзя,
// это вернуло бы ручную регистрацию. Подстановка идёт по самому длинному ключу,
// поэтому « моль/л» выигрывает у « моль», а « г/моль» — у « г».
const RESULTS_EN = {
  'Количество вещества': 'Amount of substance',
  'Масса': 'Mass',
  'Число частиц': 'Number of particles',
  'Молярная масса': 'Molar mass',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Количество вещества': 'Кількість речовини',
  'Масса': 'Маса',
  'Число частиц': 'Кількість частинок',
  'Молярная масса': 'Молярна маса',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What is known', mass: 'Mass, g', moles: 'Amount of substance, mol', molarMass: 'Molar mass, g/mol', },
    options: { mass: 'the mass', amount: 'the amount of substance', },
    results: RESULTS_EN,
    values: {
      ' моль/л': ' mol/L',
      ' г/моль': ' g/mol',
      ' моль': ' mol',
      ' г/л': ' g/L',
      ' г': ' g',
      ' мл': ' mL',
      ' л': ' L',
      ' кПа': ' kPa',
      ' атм': ' atm',
      ' Па': ' Pa',
      ' К': ' K',
      ' ppm': ' ppm',
      'Дж/(моль·К)': 'J/(mol·K)',
      'Молярная масса должна быть больше нуля': 'The molar mass must be greater than zero',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Количество вещества должно быть больше нуля': 'The amount of substance must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що відомо', mass: 'Маса, г', moles: 'Кількість речовини, моль', molarMass: 'Молярна маса, г/моль', },
    options: { mass: 'маса', amount: 'кількість речовини', },
    results: RESULTS_UK,
    values: {
      ' моль/л': ' моль/л',
      ' г/моль': ' г/моль',
      ' моль': ' моль',
      ' г/л': ' г/л',
      ' мл': ' мл',
      ' кПа': ' кПа',
      ' атм': ' атм',
      ' Па': ' Па',
      ' К': ' К',
      'Дж/(моль·К)': 'Дж/(моль·К)',
      'Молярная масса должна быть больше нуля': 'Молярна маса має бути більшою за нуль',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Количество вещества должно быть больше нуля': 'Кількість речовини має бути більшою за нуль',
    },
  },
};
