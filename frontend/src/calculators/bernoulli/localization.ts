import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'p1': 'Druck im Querschnitt 1, kPa',
      'v1': 'Geschwindigkeit im Querschnitt 1, m/s',
      'h1': 'Höhe des Querschnitts 1, m',
      'v2': 'Geschwindigkeit im Querschnitt 2, m/s',
      'h2': 'Höhe des Querschnitts 2, m',
      'rho': 'Dichte des Mediums, kg/m³',
    },
    results: {
      'Давление во втором сечении': 'Druck im zweiten Querschnitt',
      'Изменение давления': 'Druckänderung',
      'Динамический напор в первом сечении': 'Staudruck im ersten Querschnitt',
      'Динамический напор во втором сечении': 'Staudruck im zweiten Querschnitt',
      'Полный напор': 'Gesamthöhe',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кПа': 'kPa',
      'Плотность должна быть больше нуля': 'Die Dichte muss größer als null sein',
      'Скорость не может быть отрицательной': 'Die Geschwindigkeit kann nicht negativ sein',
      'Давление в первом сечении не может быть отрицательным': 'Der Druck im ersten Querschnitt kann nicht negativ sein',
      'При таких данных давление во втором сечении отрицательно': 'Bei diesen Werten wird der Druck im zweiten Querschnitt negativ',
    },
  },
  en: {
    fields: {
      p1: 'Pressure at section 1, kPa', v1: 'Speed at section 1, m/s', h1: 'Height of section 1, m',
      v2: 'Speed at section 2, m/s', h2: 'Height of section 2, m', rho: 'Fluid density, kg/m³',
    },
    options: {},
    results: {
      'Давление во втором сечении': 'Pressure at section 2', 'Изменение давления': 'Pressure change',
      'Динамический напор в первом сечении': 'Dynamic head at section 1',
      'Динамический напор во втором сечении': 'Dynamic head at section 2',
      'Полный напор': 'Total head', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кПа': 'kPa',
      'Плотность должна быть больше нуля': 'The density must be greater than zero',
      'Скорость не может быть отрицательной': 'The speed cannot be negative',
      'Давление в первом сечении не может быть отрицательным': 'The pressure at section 1 cannot be negative',
      'При таких данных давление во втором сечении отрицательно': 'With these values the pressure at section 2 comes out negative',
    },
  },
  uk: {
    fields: {
      p1: 'Тиск у першому перерізі, кПа', v1: 'Швидкість у першому перерізі, м/с', h1: 'Висота першого перерізу, м',
      v2: 'Швидкість у другому перерізі, м/с', h2: 'Висота другого перерізу, м', rho: 'Густина рідини, кг/м³',
    },
    options: {},
    results: {
      'Давление во втором сечении': 'Тиск у другому перерізі', 'Изменение давления': 'Зміна тиску',
      'Динамический напор в первом сечении': 'Динамічний напір у першому перерізі',
      'Динамический напор во втором сечении': 'Динамічний напір у другому перерізі',
      'Полный напор': 'Повний напір', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кПа': 'кПа',
      'Плотность должна быть больше нуля': 'Густина має бути більшою за нуль',
      'Скорость не может быть отрицательной': 'Швидкість не може бути відʼємною',
      'Давление в первом сечении не может быть отрицательным': 'Тиск у першому перерізі не може бути відʼємним',
      'При таких данных давление во втором сечении отрицательно': 'За таких даних тиск у другому перерізі відʼємний',
    },
  },
};
