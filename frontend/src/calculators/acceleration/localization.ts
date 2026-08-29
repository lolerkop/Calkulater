import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'v0': 'Anfangsgeschwindigkeit, m/s',
      'v': 'Endgeschwindigkeit, m/s',
      'a': 'Beschleunigung, m/s²',
      't': 'Zeit, s',
    },
    options: {
      'a': 'die Beschleunigung',
      'v': 'die Endgeschwindigkeit',
    },
    results: {
      'Ускорение': 'Beschleunigung',
      'Конечная скорость': 'Endgeschwindigkeit',
      'Изменение скорости': 'Geschwindigkeitsänderung',
      'Пройденный путь': 'Zurückgelegter Weg',
      'Время': 'Zeit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м/с²': 'm/s²',
      'м/с': 'm/s',
      'м': 'm',
      'с': 's',
      'Время должно быть больше нуля': 'Die Zeit muss größer als null sein',
    },
  },
  en: {
    fields: {
      mode: 'What to find',
      v0: 'Initial speed, m/s',
      v: 'Final speed, m/s',
      a: 'Acceleration, m/s²',
      t: 'Time, s',
    },
    options: {
      a: 'acceleration',
      v: 'final speed',
    },
    results: {
      'Ускорение': 'Acceleration',
      'Конечная скорость': 'Final speed',
      'Изменение скорости': 'Change in speed',
      'Пройденный путь': 'Distance travelled',
      'Время': 'Time',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с²': 'm/s²', 'м/с': 'm/s', 'м': 'm', 'с': 's',
      'Время должно быть больше нуля': 'The time must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти',
      v0: 'Початкова швидкість, м/с',
      v: 'Кінцева швидкість, м/с',
      a: 'Прискорення, м/с²',
      t: 'Час, с',
    },
    options: {
      a: 'прискорення',
      v: 'кінцева швидкість',
    },
    results: {
      'Ускорение': 'Прискорення',
      'Конечная скорость': 'Кінцева швидкість',
      'Изменение скорости': 'Зміна швидкості',
      'Пройденный путь': 'Пройдений шлях',
      'Время': 'Час',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с²': 'м/с²', 'м/с': 'м/с', 'м': 'м', 'с': 'с',
      'Время должно быть больше нуля': 'Час має бути більшим за нуль',
    },
  },
};
