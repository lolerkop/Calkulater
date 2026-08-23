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
    fields: { value: 'Volume', from: 'From unit', to: 'To unit' },
    options: { ml: 'Millilitre (ml)', l: 'Litre (l)', tspM: 'Teaspoon, metric (5 ml)', tbspM: 'Tablespoon, metric (15 ml)', cupM: 'Cup, metric (250 ml)', tspUS: 'Teaspoon, US', tbspUS: 'Tablespoon, US', cupUS: 'Cup, US', flozUS: 'Fluid ounce, US' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'мл': 'mL', 'ч. л. (метр.)': 'tsp (metric)', 'ст. л. (метр.)': 'tbsp (metric)', 'стакан (метр.)': 'cup (metric)', 'ч. л. (US)': 'tsp (US)', 'ст. л. (US)': 'tbsp (US)', 'стакан (US)': 'cup (US)', 'жидк. унция (US)': 'fl oz (US)' },
  },
  uk: {
    fields: { value: 'Об’єм', from: 'З одиниці', to: 'В одиницю' },
    options: { ml: 'Мілілітр (мл)', l: 'Літр (л)', tspM: 'Чайна ложка метрична (5 мл)', tbspM: 'Столова ложка метрична (15 мл)', cupM: 'Склянка метрична (250 мл)', tspUS: 'Чайна ложка США', tbspUS: 'Столова ложка США', cupUS: 'Склянка США', flozUS: 'Рідка унція США' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'мл': 'мл', 'л': 'л', 'ч. л. (метр.)': 'ч. л. (метр.)', 'ст. л. (метр.)': 'ст. л. (метр.)', 'стакан (метр.)': 'склянка (метр.)', 'ч. л. (US)': 'ч. л. (US)', 'ст. л. (US)': 'ст. л. (US)', 'стакан (US)': 'склянка (US)', 'жидк. унция (US)': 'рідка унція (US)' },
  },
};
