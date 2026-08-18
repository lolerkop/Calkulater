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
    fields: { value: 'Illuminance', from: 'From unit', to: 'To unit' },
    options: { lx: 'Lux (lx)', klx: 'Kilolux (klx)', mlx: 'Millilux (mlx)', fc: 'Foot-candle (fc)', ph: 'Phot (ph)', nox: 'Nox (nox)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'лк': 'lx', 'клк': 'klx', 'млк': 'mlx', 'фк': 'fc', 'фот': 'ph', 'нокс': 'nox' },
  },
  uk: {
    fields: { value: 'Освітленість', from: 'З одиниці', to: 'В одиницю' },
    options: { lx: 'Люкс (лк)', klx: 'Кілолюкс (клк)', mlx: 'Мілілюкс (млк)', fc: 'Фут-кандела (фк)', ph: 'Фот (фот)', nox: 'Нокс (нокс)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'лк': 'лк', 'клк': 'клк', 'млк': 'млк', 'фк': 'фк', 'фот': 'фот', 'нокс': 'нокс' },
  },
};
