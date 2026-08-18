import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Temperature', from: 'From unit', to: 'To unit' },
    options: { c: 'Celsius (°C)', f: 'Fahrenheit (°F)', k: 'Kelvin (K)', r: 'Rankine (°Ra)' },
    results: { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' },
    values: {
      'Выберите единицы из списка': 'Choose units from the list',
      'Введите конечное число': 'Enter a finite number',
      'Результат вне допустимого диапазона': 'The result is outside the supported range',
    },
  },
  uk: {
    fields: { value: 'Температура', from: 'З одиниці', to: 'В одиницю' },
    options: { c: 'Цельсій (°C)', f: 'Фаренгейт (°F)', k: 'Кельвін (K)', r: 'Ранкін (°Ra)' },
    results: { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Выберите единицы из списка': 'Оберіть одиниці зі списку',
      'Введите конечное число': 'Введіть скінченне число',
      'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
    },
  },
};
