import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'diag': 'Diagonale, Zoll',
      'ratio': 'Seitenverhältnis',
      'lines': 'Zeilen der Auflösung',
    },
    options: {
      '16:9': '16:9',
      '21:9': '21:9',
      '4:3': '4:3',
    },
    results: {
      'Комфортное расстояние по THX': 'Angenehmer Abstand nach THX',
      'Комфортное по SMPTE': 'Angenehm nach SMPTE',
      'Ширина экрана': 'Bildschirmbreite',
      'Высота экрана': 'Bildschirmhöhe',
      'Дальше этого пиксели не различить': 'Ab hier sind Pixel nicht mehr zu unterscheiden',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'см': 'cm',
      'Выберите пропорцию экрана из списка': 'Wähle ein Seitenverhältnis aus der Liste',
      'Диагональ должна быть больше нуля': 'Die Diagonale muss größer als null sein',
      'Число строк разрешения должно быть больше нуля': 'Die Zahl der Auflösungszeilen muss größer als null sein',
    },
  },
  en: {
    fields: { diag: 'Diagonal, inches', ratio: 'Screen ratio', lines: 'Resolution lines' },
    options: { '16:9': '16:9', '21:9': '21:9', '4:3': '4:3' },
    results: {
      'Комфортное расстояние по THX': 'Comfortable distance by THX',
      'Комфортное по SMPTE': 'Comfortable by SMPTE',
      'Ширина экрана': 'Screen width', 'Высота экрана': 'Screen height',
      'Дальше этого пиксели не различить': 'Beyond this pixels are indistinguishable',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm', 'см': 'cm',
      'Выберите пропорцию экрана из списка': 'Choose a screen ratio from the list',
      'Диагональ должна быть больше нуля': 'The diagonal must be greater than zero',
      'Число строк разрешения должно быть больше нуля': 'The number of resolution lines must be greater than zero',
    },
  },
  uk: {
    fields: { diag: 'Діагональ, дюймів', ratio: 'Пропорції екрана', lines: 'Рядків роздільності' },
    options: { '16:9': '16:9', '21:9': '21:9', '4:3': '4:3' },
    results: {
      'Комфортное расстояние по THX': 'Комфортна відстань за THX',
      'Комфортное по SMPTE': 'Комфортна за SMPTE',
      'Ширина экрана': 'Ширина екрана', 'Высота экрана': 'Висота екрана',
      'Дальше этого пиксели не различить': 'Далі цього пікселі не розрізнити',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м': 'м', 'см': 'см',
      'Выберите пропорцию экрана из списка': 'Оберіть пропорцію екрана зі списку',
      'Диагональ должна быть больше нуля': 'Діагональ має бути більшою за нуль',
      'Число строк разрешения должно быть больше нуля': 'Кількість рядків роздільності має бути більшою за нуль',
    },
  },
};
