import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'q1': 'Erste Ladung, nC',
      'q2': 'Zweite Ladung, nC',
      'r': 'Abstand, cm',
    },
    results: {
      'Сила взаимодействия': 'Kraft zwischen den Ladungen',
      'Характер': 'Art',
      'Напряжённость поля первого заряда': 'Feldstärke der ersten Ladung',
      'Потенциальная энергия': 'Potentielle Energie',
      'Расстояние': 'Abstand',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Н': 'N',
      'В/м': 'V/m',
      'Дж': 'J',
      'см': 'cm',
      'притяжение': 'Anziehung',
      'отталкивание': 'Abstoßung',
      'Расстояние должно быть больше нуля': 'Der Abstand muss größer als null sein',
      'Первый заряд не может быть нулевым': 'Die erste Ladung kann nicht null sein',
      'Второй заряд не может быть нулевым': 'Die zweite Ladung kann nicht null sein',
    },
  },
  en: {
    fields: { q1: 'First charge, nC', q2: 'Second charge, nC', r: 'Distance, cm' },
    options: {},
    results: {
      'Сила взаимодействия': 'Force between the charges', 'Характер': 'Type',
      'Напряжённость поля первого заряда': 'Field strength of the first charge',
      'Потенциальная энергия': 'Potential energy', 'Расстояние': 'Distance',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'В/м': 'V/m', 'Дж': 'J', 'см': 'cm',
      'притяжение': 'attraction', 'отталкивание': 'repulsion',
      'Расстояние должно быть больше нуля': 'The distance must be greater than zero',
      'Первый заряд не может быть нулевым': 'The first charge cannot be zero',
      'Второй заряд не может быть нулевым': 'The second charge cannot be zero',
    },
  },
  uk: {
    fields: { q1: 'Перший заряд, нКл', q2: 'Другий заряд, нКл', r: 'Відстань, см' },
    options: {},
    results: {
      'Сила взаимодействия': 'Сила взаємодії', 'Характер': 'Характер',
      'Напряжённость поля первого заряда': 'Напруженість поля першого заряду',
      'Потенциальная энергия': 'Потенціальна енергія', 'Расстояние': 'Відстань',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'В/м': 'В/м', 'Дж': 'Дж', 'см': 'см',
      'притяжение': 'притягання', 'отталкивание': 'відштовхування',
      'Расстояние должно быть больше нуля': 'Відстань має бути більшою за нуль',
      'Первый заряд не может быть нулевым': 'Перший заряд не може бути нульовим',
      'Второй заряд не может быть нулевым': 'Другий заряд не може бути нульовим',
    },
  },
};
