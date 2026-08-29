import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Поместится файлов": "Files that fit",
    "Точное частное": "Exact quotient",
    "Останется свободно": "Space left over",
    "Доступно под файлы": "Available for files",
    "Отдано под резерв": "Set aside as reserve",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Поместится файлов": "Файлів помістяться",
    "Точное частное": "Точна частка",
    "Останется свободно": "Залишиться вільно",
    "Доступно под файлы": "Доступно під файли",
    "Отдано под резерв": "Віддано під резерв",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'capacity': 'Kapazität des Datenträgers',
      'capacityUnit': 'Einheit der Kapazität',
      'fileSize': 'Dateigröße',
      'fileUnit': 'Einheit der Datei',
      'reserved': 'Reservierter Platz, %',
    },
    options: {
      'mb': 'MB (10⁶)',
      'gb': 'GB (10⁹)',
      'tb': 'TB (10¹²)',
      'mib': 'MiB (1024²)',
      'gib': 'GiB (1024³)',
      'tib': 'TiB (1024⁴)',
      'kb': 'KB (1000)',
      'kib': 'KiB (1024)',
    },
    results: {
      'Поместится файлов': 'Dateien, die hineinpassen',
      'Точное частное': 'Genauer Quotient',
      'Останется свободно': 'Bleibt frei',
      'Доступно под файлы': 'Für Dateien verfügbar',
      'Отдано под резерв': 'Als Reserve zurückgelegt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'ГБ': 'GB',
      'Ёмкость должна быть больше нуля': 'Die Kapazität muss größer als null sein',
      'Размер файла должен быть больше нуля': 'Die Dateigröße muss größer als null sein',
      'Резерв задаётся в диапазоне от 0 до 100 процентов': 'Die Reserve liegt im Bereich von 0 bis 100 Prozent',
    },
  },
  en: {
    fields: { capacity: "Drive capacity", capacityUnit: "Capacity unit", fileSize: "File size", fileUnit: "File unit", reserved: "Reserved space, %" },
    options: { mb: "MB (10⁶)", gb: "GB (10⁹)", tb: "TB (10¹²)", mib: "MiB (1024²)", gib: "GiB (1024³)", tib: "TiB (1024⁴)", kb: "KB (1000)", kib: "KiB (1024)" },
    results: RESULTS_EN,
    values: {
    "ГБ": "GB",
    "Ёмкость должна быть больше нуля": "The capacity must be greater than zero",
    "Размер файла должен быть больше нуля": "The file size must be greater than zero",
    "Резерв задаётся в диапазоне от 0 до 100 процентов": "Reserved space is set between 0 and 100 percent",
    },
  },
  uk: {
    fields: { capacity: "Ємність носія", capacityUnit: "Одиниця ємності", fileSize: "Розмір файлу", fileUnit: "Одиниця файлу", reserved: "Службовий резерв, %" },
    options: { mb: "МБ (10⁶)", gb: "ГБ (10⁹)", tb: "ТБ (10¹²)", mib: "МіБ (1024²)", gib: "ГіБ (1024³)", tib: "ТіБ (1024⁴)", kb: "КБ (1000)", kib: "КіБ (1024)" },
    results: RESULTS_UK,
    values: {
    "ГБ": "ГБ",
    "Ёмкость должна быть больше нуля": "Ємність має бути більшою за нуль",
    "Размер файла должен быть больше нуля": "Розмір файлу має бути більшим за нуль",
    "Резерв задаётся в диапазоне от 0 до 100 процентов": "Резерв задається в діапазоні від 0 до 100 відсотків",
    },
  },
};
