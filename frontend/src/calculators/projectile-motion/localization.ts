import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Дальность': 'Range', 'Время полёта': 'Flight time', 'Высшая точка': 'Apex height',
  'Горизонтальная составляющая': 'Horizontal component', 'Вертикальная составляющая': 'Vertical component',
  'Время до высшей точки': 'Time to apex', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Дальность': 'Дальність', 'Время полёта': 'Час польоту', 'Высшая точка': 'Найвища точка',
  'Горизонтальная составляющая': 'Горизонтальна складова', 'Вертикальная составляющая': 'Вертикальна складова',
  'Время до высшей точки': 'Час до найвищої точки', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'v0': 'Anfangsgeschwindigkeit, m/s',
      'angle': 'Winkel zur Waagerechten, °',
      'h0': 'Abwurfhöhe, m',
    },
    results: {
      'Дальность': 'Wurfweite',
      'Время полёта': 'Flugzeit',
      'Высшая точка': 'Scheitelhöhe',
      'Горизонтальная составляющая': 'Waagerechte Komponente',
      'Вертикальная составляющая': 'Senkrechte Komponente',
      'Время до высшей точки': 'Zeit bis zum Scheitel',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м/с': 'm/s',
      'м': 'm',
      'с': 's',
      'Начальная скорость должна быть больше нуля': 'Die Anfangsgeschwindigkeit muss größer als null sein',
      'Угол должен быть от 0 до 90 градусов': 'Der Winkel muss zwischen 0 und 90 Grad liegen',
      'Высота броска не может быть отрицательной': 'Die Abwurfhöhe kann nicht negativ sein',
    },
  },
  en: {
    fields: { v0: 'Initial speed, m/s', angle: 'Angle to the horizon, °', h0: 'Launch height, m' },
    options: {},
    results: RESULTS_EN,
    values: {
      'м/с': 'm/s', 'м': 'm', 'с': 's',
      'Начальная скорость должна быть больше нуля': 'The initial speed must be greater than zero',
      'Угол должен быть от 0 до 90 градусов': 'The angle must be between 0 and 90 degrees',
      'Высота броска не может быть отрицательной': 'The launch height cannot be negative',
    },
  },
  uk: {
    fields: { v0: 'Початкова швидкість, м/с', angle: 'Кут до горизонту, °', h0: 'Висота кидка, м' },
    options: {},
    results: RESULTS_UK,
    values: {
      'м/с': 'м/с', 'м': 'м', 'с': 'с',
      'Начальная скорость должна быть больше нуля': 'Початкова швидкість має бути більшою за нуль',
      'Угол должен быть от 0 до 90 градусов': 'Кут має бути від 0 до 90 градусів',
      'Высота броска не может быть отрицательной': "Висота кидка не може бути від'ємною",
    },
  },
};
