import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'i1': 'Intensität im Ausgangsabstand',
      'd1': 'Ausgangsabstand',
      'd2': 'Neuer Abstand',
    },
    results: {
      'Интенсивность на новом расстоянии': 'Intensität im neuen Abstand',
      'Во сколько раз изменилась': 'Änderungsfaktor',
      'Отношение расстояний': 'Verhältnis der Abstände',
      'В процентах от исходной': 'In Prozent des Ausgangswerts',
      'Исходная интенсивность': 'Ausgangsintensität',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Исходная интенсивность должна быть больше нуля': 'Die Ausgangsintensität muss größer als null sein',
      'Исходное расстояние должно быть больше нуля': 'Der Ausgangsabstand muss größer als null sein',
      'Новое расстояние должно быть больше нуля': 'Der neue Abstand muss größer als null sein',
    },
  },
  en: {
    fields: {
      i1: 'Intensity at the original distance',
      d1: 'Original distance',
      d2: 'New distance',
    },
    options: {},
    results: {
      'Интенсивность на новом расстоянии': 'Intensity at the new distance',
      'Во сколько раз изменилась': 'Change factor',
      'Отношение расстояний': 'Distance ratio',
      'В процентах от исходной': 'Per cent of the original',
      'Исходная интенсивность': 'Original intensity',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Исходная интенсивность должна быть больше нуля': 'The original intensity must be greater than zero',
      'Исходное расстояние должно быть больше нуля': 'The original distance must be greater than zero',
      'Новое расстояние должно быть больше нуля': 'The new distance must be greater than zero',
    },
  },
  uk: {
    fields: {
      i1: 'Інтенсивність на початковій відстані',
      d1: 'Початкова відстань',
      d2: 'Нова відстань',
    },
    options: {},
    results: {
      'Интенсивность на новом расстоянии': 'Інтенсивність на новій відстані',
      'Во сколько раз изменилась': 'У скільки разів змінилася',
      'Отношение расстояний': 'Відношення відстаней',
      'В процентах от исходной': 'У відсотках від початкової',
      'Исходная интенсивность': 'Початкова інтенсивність',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Исходная интенсивность должна быть больше нуля': 'Початкова інтенсивність має бути більшою за нуль',
      'Исходное расстояние должно быть больше нуля': 'Початкова відстань має бути більшою за нуль',
      'Новое расстояние должно быть больше нуля': 'Нова відстань має бути більшою за нуль',
    },
  },
};
