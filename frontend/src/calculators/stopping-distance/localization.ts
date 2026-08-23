import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { speed: 'Speed, km/h', reaction: 'Reaction time, s', mu: 'Friction coefficient', grade: 'Road gradient, %' },
    options: {},
    results: {
      'Полный остановочный путь': 'Total stopping distance', 'Путь за время реакции': 'Reaction distance',
      'Тормозной путь': 'Braking distance', 'Замедление': 'Deceleration',
      'Время торможения': 'Braking time', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm', 'м/с²': 'm/s²', 'с': 's',
      'Скорость должна быть больше нуля': 'The speed must be greater than zero',
      'Время реакции не может быть отрицательным': 'The reaction time cannot be negative',
      'Коэффициент сцепления должен быть больше нуля': 'The friction coefficient must be greater than zero',
      'Спуск круче сцепления: остановиться торможением невозможно':
        'The descent is steeper than the grip: braking cannot stop the car',
    },
  },
  uk: {
    fields: { speed: 'Швидкість, км/год', reaction: 'Час реакції, с', mu: 'Коефіцієнт зчеплення', grade: 'Ухил дороги, %' },
    options: {},
    results: {
      'Полный остановочный путь': 'Повний зупинковий шлях', 'Путь за время реакции': 'Шлях за час реакції',
      'Тормозной путь': 'Гальмівний шлях', 'Замедление': 'Сповільнення',
      'Время торможения': 'Час гальмування', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м': 'м', 'м/с²': 'м/с²', 'с': 'с',
      'Скорость должна быть больше нуля': 'Швидкість має бути більшою за нуль',
      'Время реакции не может быть отрицательным': 'Час реакції не може бути від’ємним',
      'Коэффициент сцепления должен быть больше нуля': 'Коефіцієнт зчеплення має бути більшим за нуль',
      'Спуск круче сцепления: остановиться торможением невозможно':
        'Спуск крутіший за зчеплення: зупинитися гальмуванням неможливо',
    },
  },
};
