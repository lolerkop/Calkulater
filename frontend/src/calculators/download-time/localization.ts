import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Время загрузки': 'Download time', 'Всего секунд': 'Total seconds',
  'Размер файла': 'File size', 'Скорость канала': 'Link speed', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Время загрузки': 'Час завантаження', 'Всего секунд': 'Усього секунд',
  'Размер файла': 'Розмір файлу', 'Скорость канала': 'Швидкість каналу', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { size: 'File size', sizeUnit: 'Size unit', speed: 'Connection speed', speedUnit: 'Speed unit' },
    options: {
      kb: 'KB (1000 bytes)', mb: 'MB (10⁶ bytes)', gb: 'GB (10⁹ bytes)', tb: 'TB (10¹² bytes)',
      kib: 'KiB (1024 bytes)', mib: 'MiB (1024² bytes)', gib: 'GiB (1024³ bytes)', tib: 'TiB (1024⁴ bytes)',
      kbit: 'Kbit/s', mbit: 'Mbit/s', gbit: 'Gbit/s', mbyte: 'MB/s',
    },
    results: RESULTS_EN,
    values: {
      'мс': 'ms', 'с': 's', 'МБ': 'MB', 'МиБ': 'MiB', 'Мбит/с': 'Mbit/s', 'МБ/с': 'MB/s',
      'Размер файла должен быть больше нуля': 'The file size must be greater than zero',
      'Скорость должна быть больше нуля': 'The speed must be greater than zero',
    },
  },
  uk: {
    fields: { size: 'Розмір файлу', sizeUnit: 'Одиниця розміру', speed: 'Швидкість з’єднання', speedUnit: 'Одиниця швидкості' },
    options: {
      kb: 'КБ (1000 байтів)', mb: 'МБ (10⁶ байтів)', gb: 'ГБ (10⁹ байтів)', tb: 'ТБ (10¹² байтів)',
      kib: 'КіБ (1024 байти)', mib: 'МіБ (1024² байти)', gib: 'ГіБ (1024³ байти)', tib: 'ТіБ (1024⁴ байти)',
      kbit: 'Кбіт/с', mbit: 'Мбіт/с', gbit: 'Гбіт/с', mbyte: 'МБ/с',
    },
    results: RESULTS_UK,
    values: {
      'мс': 'мс', 'с': 'с', 'МБ': 'МБ', 'МиБ': 'МіБ', 'Мбит/с': 'Мбіт/с', 'МБ/с': 'МБ/с',
      'Размер файла должен быть больше нуля': 'Розмір файлу має бути більшим за нуль',
      'Скорость должна быть больше нуля': 'Швидкість має бути більшою за нуль',
    },
  },
};
