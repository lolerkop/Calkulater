import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'value': 'Wert',
      'from': 'Von Einheit',
      'to': 'Nach Einheit',
    },
    options: {
      'mm': 'Millimeter (mm)',
      'cm': 'Zentimeter (cm)',
      'm': 'Meter (m)',
      'km': 'Kilometer (km)',
      'in': 'Zoll (in)',
      'ft': 'Fuß (ft)',
      'yd': 'Yard (yd)',
      'mi': 'Meile (mi)',
      'nmi': 'Seemeile (nmi)',
    },
    results: {
      'Результат': 'Ergebnis',
      'Исходное значение': 'Ausgangswert',
      'Соотношение': 'Verhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Выберите единицы из списка': 'Wähle Einheiten aus der Liste',
      'Введите конечное число': 'Trage eine endliche Zahl ein',
      'Результат вне допустимого диапазона': 'Das Ergebnis liegt außerhalb des zulässigen Bereichs',
      'мм': 'mm',
      'см': 'cm',
      'м': 'm',
      'км': 'km',
      'дюйм': 'in',
      'фут': 'ft',
      'ярд': 'yd',
      'миля': 'mi',
      'мор. миля': 'nmi',
    },
  },
  en: {
    fields: { value: 'Value', from: 'From unit', to: 'To unit' },
    options: {
      mm: 'Millimetre (mm)', cm: 'Centimetre (cm)', m: 'Metre (m)', km: 'Kilometre (km)',
      in: 'Inch (in)', ft: 'Foot (ft)', yd: 'Yard (yd)', mi: 'Mile (mi)', nmi: 'Nautical mile (nmi)',
    },
    results: { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' },
    values: {
      'Выберите единицы из списка': 'Choose units from the list',
      'Введите конечное число': 'Enter a finite number',
      'Результат вне допустимого диапазона': 'The result is outside the supported range',
      'мм': 'mm', 'см': 'cm', 'м': 'm', 'км': 'km',
      'дюйм': 'in', 'фут': 'ft', 'ярд': 'yd', 'миля': 'mi', 'мор. миля': 'nmi',
    },
  },
  uk: {
    fields: { value: 'Значення', from: 'З одиниці', to: 'В одиницю' },
    options: {
      mm: 'Міліметр (мм)', cm: 'Сантиметр (см)', m: 'Метр (м)', km: 'Кілометр (км)',
      in: 'Дюйм (in)', ft: 'Фут (ft)', yd: 'Ярд (yd)', mi: 'Миля (mi)', nmi: 'Морська миля (nmi)',
    },
    results: { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' },
    values: {
      'Выберите единицы из списка': 'Оберіть одиниці зі списку',
      'Введите конечное число': 'Введіть скінченне число',
      'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
      'мм': 'мм', 'см': 'см', 'м': 'м', 'км': 'км',
      'дюйм': 'дюйм', 'фут': 'фут', 'ярд': 'ярд', 'миля': 'миля', 'мор. миля': 'мор. миля',
    },
  },
};
