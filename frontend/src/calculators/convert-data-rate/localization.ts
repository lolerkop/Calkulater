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
    fields: { value: 'Data rate', from: 'From unit', to: 'To unit' },
    options: { bits: 'Bit per second (bit/s)', kbits: 'Kilobit per second (kbit/s)', mbits: 'Megabit per second (Mbit/s)', gbits: 'Gigabit per second (Gbit/s)', bytes: 'Byte per second (B/s)', kbytes: 'Kilobyte per second (kB/s)', mbytes: 'Megabyte per second (MB/s)', mibs: 'Mebibyte per second (MiB/s)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'бит/с': 'bit/s', 'кбит/с': 'kbit/s', 'Мбит/с': 'Mbit/s', 'Гбит/с': 'Gbit/s', 'Б/с': 'B/s', 'кБ/с': 'kB/s', 'МБ/с': 'MB/s', 'МиБ/с': 'MiB/s' },
  },
  uk: {
    fields: { value: 'Швидкість передачі', from: 'З одиниці', to: 'В одиницю' },
    options: { bits: 'Біт за секунду (біт/с)', kbits: 'Кілобіт за секунду (кбіт/с)', mbits: 'Мегабіт за секунду (Мбіт/с)', gbits: 'Гігабіт за секунду (Гбіт/с)', bytes: 'Байт за секунду (Б/с)', kbytes: 'Кілобайт за секунду (кБ/с)', mbytes: 'Мегабайт за секунду (МБ/с)', mibs: 'Мебібайт за секунду (МіБ/с)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'бит/с': 'біт/с', 'кбит/с': 'кбіт/с', 'Мбит/с': 'Мбіт/с', 'Гбит/с': 'Гбіт/с', 'Б/с': 'Б/с', 'кБ/с': 'кБ/с', 'МБ/с': 'МБ/с', 'МиБ/с': 'МіБ/с' },
  },
};
