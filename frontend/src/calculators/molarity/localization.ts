import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц трогать нельзя,
// это вернуло бы ручную регистрацию. Подстановка идёт по самому длинному ключу,
// поэтому « моль/л» выигрывает у « моль», а « г/моль» — у « г».
const RESULTS_EN = {
  'Молярная концентрация': 'Molar concentration',
  'Количество вещества': 'Amount of substance',
  'Объём раствора': 'Solution volume',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Молярная концентрация': 'Молярна концентрація',
  'Количество вещества': 'Кількість речовини',
  'Объём раствора': 'Об’єм розчину',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What is known', moles: 'Amount of substance, mol', mass: 'Mass of substance, g', molarMass: 'Molar mass, g/mol', volumeUnit: 'Volume unit', volume: 'Solution volume', },
    options: { moles: 'the amount of substance', mass: 'a mass and a molar mass', ml: 'millilitres', l: 'litres', m3: 'cubic metres', },
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
      'Объём должен быть больше нуля': 'The volume must be greater than zero',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Молярная масса должна быть больше нуля': 'The molar mass must be greater than zero',
      'Количество вещества должно быть больше нуля': 'The amount of substance must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що відомо', moles: 'Кількість речовини, моль', mass: 'Маса речовини, г', molarMass: 'Молярна маса, г/моль', volumeUnit: 'Одиниця об’єму', volume: 'Об’єм розчину', },
    options: { moles: 'кількість речовини', mass: 'маса і молярна маса', ml: 'мілілітри', l: 'літри', m3: 'кубометри', },
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
      'Объём должен быть больше нуля': 'Об’єм має бути більшим за нуль',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Молярная масса должна быть больше нуля': 'Молярна маса має бути більшою за нуль',
      'Количество вещества должно быть больше нуля': 'Кількість речовини має бути більшою за нуль',
    },
  },
};
