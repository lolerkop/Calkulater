import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Расход энергии': 'Energy used', 'В сутки': 'Per day', 'За 30 дней': 'Over 30 days',
  'Мощность': 'Power', 'Стоимость за период': 'Cost for the period',
  'Стоимость за 30 дней': 'Cost over 30 days', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Расход энергии': 'Витрата енергії', 'В сутки': 'За добу', 'За 30 дней': 'За 30 днів',
  'Мощность': 'Потужність', 'Стоимость за период': 'Вартість за період',
  'Стоимость за 30 дней': 'Вартість за 30 днів', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'power': 'Leistung des Geräts',
      'powerUnit': 'Einheit der Leistung',
      'hoursPerDay': 'Stunden am Tag',
      'days': 'Zahl der Tage',
      'tariff': 'Tarif je kWh',
    },
    options: {
      'w': 'Watt (W)',
      'kw': 'Kilowatt (kW)',
    },
    results: {
      'Расход энергии': 'Energieverbrauch',
      'В сутки': 'Am Tag',
      'За 30 дней': 'Über 30 Tage',
      'Мощность': 'Leistung',
      'Стоимость за период': 'Kosten im Zeitraum',
      'Стоимость за 30 дней': 'Kosten über 30 Tage',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кВт·ч': 'kWh',
      'кВт': 'kW',
      '₽': '€',
      'Мощность должна быть больше нуля': 'Die Leistung muss größer als null sein',
      'Часов в сутки может быть от 0 до 24': 'Die Stunden am Tag müssen zwischen 0 und 24 liegen',
      'Число дней должно быть больше нуля': 'Die Zahl der Tage muss größer als null sein',
    },
  },
  en: {
    fields: {
      power: 'Appliance power', powerUnit: 'Power unit', hoursPerDay: 'Hours per day',
      days: 'Number of days', tariff: 'Tariff per kWh',
    },
    options: { w: 'watts (W)', kw: 'kilowatts (kW)' },
    results: RESULTS_EN,
    values: {
      'кВт·ч': 'kWh', 'кВт': 'kW', '₽': '$',
      'Мощность должна быть больше нуля': 'The power must be greater than zero',
      'Часов в сутки может быть от 0 до 24': 'Hours per day must be between 0 and 24',
      'Число дней должно быть больше нуля': 'The number of days must be greater than zero',
    },
  },
  uk: {
    fields: {
      power: 'Потужність приладу', powerUnit: 'Одиниця потужності', hoursPerDay: 'Годин на добу',
      days: 'Кількість днів', tariff: 'Тариф за кВт·год',
    },
    options: { w: 'вати (Вт)', kw: 'кіловати (кВт)' },
    results: RESULTS_UK,
    values: {
      'кВт·ч': 'кВт·год', 'кВт': 'кВт', '₽': '₴',
      'Мощность должна быть больше нуля': 'Потужність має бути більшою за нуль',
      'Часов в сутки может быть от 0 до 24': 'Годин на добу може бути від 0 до 24',
      'Число дней должно быть больше нуля': 'Кількість днів має бути більшою за нуль',
    },
  },
};
