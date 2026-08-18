import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' };
const RESULTS_UK = { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' };
const ERRORS_EN = {
  'Выберите единицы из списка': 'Choose units from the list',
  'Введите конечное число': 'Enter a finite number',
  'Результат вне допустимого диапазона': 'The result is outside the supported range',
};
const ERRORS_UK = {
  'Выберите единицы из списка': 'Оберіть одиниці зі списку',
  'Введите конечное число': 'Введіть скінченне число',
  'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Energy', from: 'From unit', to: 'To unit' },
    options: { j: 'Joule (J)', kj: 'Kilojoule (kJ)', mj: 'Megajoule (MJ)', wh: 'Watt-hour (Wh)', kwh: 'Kilowatt-hour (kWh)', cal: 'Calorie (cal)', kcal: 'Kilocalorie (kcal)', btu: 'British thermal unit (BTU)', ev: 'Electronvolt (eV)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'Дж': 'J', 'кДж': 'kJ', 'МДж': 'MJ', 'Вт·ч': 'Wh', 'кВт·ч': 'kWh', 'кал': 'cal', 'ккал': 'kcal', 'эВ': 'eV' },
  },
  uk: {
    fields: { value: 'Енергія', from: 'З одиниці', to: 'В одиницю' },
    options: { j: 'Джоуль (Дж)', kj: 'Кілоджоуль (кДж)', mj: 'Мегаджоуль (МДж)', wh: 'Ват-година (Вт·год)', kwh: 'Кіловат-година (кВт·год)', cal: 'Калорія (кал)', kcal: 'Кілокалорія (ккал)', btu: 'Британська теплова одиниця (BTU)', ev: 'Електронвольт (еВ)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'Дж': 'Дж', 'кДж': 'кДж', 'МДж': 'МДж', 'Вт·ч': 'Вт·год', 'кВт·ч': 'кВт·год', 'кал': 'кал', 'ккал': 'ккал', 'эВ': 'еВ' },
  },
};
