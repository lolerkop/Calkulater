import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'sensitivity': 'Empfindlichkeit, dB/mW',
      'impedance': 'Impedanz, Ω',
      'power': 'Zugeführte Leistung, mW',
    },
    results: {
      'Звуковое давление': 'Schalldruckpegel',
      'Прибавка от мощности': 'Zugewinn durch die Leistung',
      'Напряжение на выходе': 'Ausgangsspannung',
      'Ток': 'Strom',
      'Импеданс': 'Impedanz',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'дБ': 'dB',
      'В': 'V',
      'мА': 'mA',
      'Ом': 'Ω',
      'Чувствительность должна быть больше нуля': 'Die Empfindlichkeit muss größer als null sein',
      'Импеданс должен быть больше нуля': 'Die Impedanz muss größer als null sein',
      'Подводимая мощность должна быть больше нуля': 'Die zugeführte Leistung muss größer als null sein',
    },
  },
  en: {
    fields: { sensitivity: 'Sensitivity, dB/mW', impedance: 'Impedance, Ω', power: 'Applied power, mW' },
    options: {},
    results: {
      'Звуковое давление': 'Sound pressure level', 'Прибавка от мощности': 'Gain from power',
      'Напряжение на выходе': 'Output voltage', 'Ток': 'Current', 'Импеданс': 'Impedance',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'дБ': 'dB', 'В': 'V', 'мА': 'mA', 'Ом': 'Ω',
      'Чувствительность должна быть больше нуля': 'The sensitivity must be greater than zero',
      'Импеданс должен быть больше нуля': 'The impedance must be greater than zero',
      'Подводимая мощность должна быть больше нуля': 'The applied power must be greater than zero',
    },
  },
  uk: {
    fields: { sensitivity: 'Чутливість, дБ/мВт', impedance: 'Імпеданс, Ом', power: 'Підведена потужність, мВт' },
    options: {},
    results: {
      'Звуковое давление': 'Звуковий тиск', 'Прибавка от мощности': 'Приріст від потужності',
      'Напряжение на выходе': 'Напруга на виході', 'Ток': 'Струм', 'Импеданс': 'Імпеданс',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'дБ': 'дБ', 'В': 'В', 'мА': 'мА', 'Ом': 'Ом',
      'Чувствительность должна быть больше нуля': 'Чутливість має бути більшою за нуль',
      'Импеданс должен быть больше нуля': 'Імпеданс має бути більшим за нуль',
      'Подводимая мощность должна быть больше нуля': 'Підведена потужність має бути більшою за нуль',
    },
  },
};
