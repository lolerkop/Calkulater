import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'windowWidth': 'Schienenbreite, cm',
      'fullness': 'Faltenverhältnis',
      'fabricWidth': 'Stoffbreite, cm',
      'height': 'Fertige Höhe, cm',
      'hem': 'Zugabe oben und unten, cm',
    },
    results: {
      'Ткани потребуется': 'Benötigter Stoff',
      'Полотнищ': 'Bahnen',
      'Ширина в сборке': 'Breite in Falten',
      'Длина отреза': 'Zuschnittlänge',
      'Коэффициент сборки': 'Faltenverhältnis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'см': 'cm',
      'шт': 'Stk',
      'Ширина карниза должна быть больше нуля': 'Die Schienenbreite muss größer als null sein',
      'Коэффициент сборки должен быть больше нуля': 'Das Faltenverhältnis muss größer als null sein',
      'Ширина полотна должна быть больше нуля': 'Die Stoffbreite muss größer als null sein',
      'Готовая высота должна быть больше нуля': 'Die fertige Höhe muss größer als null sein',
      'Припуск не может быть отрицательным': 'Die Zugabe kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      windowWidth: 'Track width, cm', fullness: 'Fullness ratio', fabricWidth: 'Fabric width, cm',
      height: 'Finished height, cm', hem: 'Top and bottom allowance, cm',
    },
    options: {},
    results: {
      'Ткани потребуется': 'Fabric needed', 'Полотнищ': 'Drops', 'Ширина в сборке': 'Gathered width',
      'Длина отреза': 'Cut length', 'Коэффициент сборки': 'Fullness ratio',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm', 'см': 'cm', 'шт': 'pcs',
      'Ширина карниза должна быть больше нуля': 'The track width must be greater than zero',
      'Коэффициент сборки должен быть больше нуля': 'The fullness ratio must be greater than zero',
      'Ширина полотна должна быть больше нуля': 'The fabric width must be greater than zero',
      'Готовая высота должна быть больше нуля': 'The finished height must be greater than zero',
      'Припуск не может быть отрицательным': 'The allowance cannot be negative',
    },
  },
  uk: {
    fields: {
      windowWidth: 'Ширина карниза, см', fullness: 'Коефіцієнт збірки', fabricWidth: 'Ширина полотна, см',
      height: 'Готова висота, см', hem: 'Припуск згори та знизу, см',
    },
    options: {},
    results: {
      'Ткани потребуется': 'Тканини потрібно', 'Полотнищ': 'Полотнищ', 'Ширина в сборке': 'Ширина в збірці',
      'Длина отреза': 'Довжина відрізу', 'Коэффициент сборки': 'Коефіцієнт збірки',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м': 'м', 'см': 'см', 'шт': 'шт',
      'Ширина карниза должна быть больше нуля': 'Ширина карниза має бути більшою за нуль',
      'Коэффициент сборки должен быть больше нуля': 'Коефіцієнт збірки має бути більшим за нуль',
      'Ширина полотна должна быть больше нуля': 'Ширина полотна має бути більшою за нуль',
      'Готовая высота должна быть больше нуля': 'Готова висота має бути більшою за нуль',
      'Припуск не может быть отрицательным': 'Припуск не може бути від’ємним',
    },
  },
};
