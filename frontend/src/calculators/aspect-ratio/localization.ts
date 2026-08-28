import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Соотношение сторон': 'Aspect ratio', 'Десятичное отношение': 'Decimal ratio',
  'Наибольший общий делитель': 'Greatest common divisor', 'Ближайшее распространённое': 'Nearest common ratio',
  'Всего пикселей': 'Total pixels', 'Высота': 'Height', 'Ширина': 'Width',
  'Точное значение': 'Exact value', 'Разрешение': 'Resolution', 'Соотношение': 'Ratio',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Соотношение сторон': 'Співвідношення сторін', 'Десятичное отношение': 'Десяткове відношення',
  'Наибольший общий делитель': 'Найбільший спільний дільник', 'Ближайшее распространённое': 'Найближче поширене',
  'Всего пикселей': 'Усього пікселів', 'Высота': 'Висота', 'Ширина': 'Ширина',
  'Точное значение': 'Точне значення', 'Разрешение': 'Роздільність', 'Соотношение': 'Співвідношення',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to calculate', width: 'Width, px', height: 'Height, px',
      ratioW: 'Ratio width', ratioH: 'Ratio height', known: 'Known side', side: 'Known side value, px',
    },
    options: {
      reduce: 'ratio from a resolution', side: 'missing side from a ratio',
      width: 'width', height: 'height',
    },
    results: RESULTS_EN,
    values: {
      'пикс': 'px',
      'Обе стороны должны быть больше нуля': 'Both sides must be greater than zero',
      'Обе части соотношения должны быть больше нуля': 'Both parts of the ratio must be greater than zero',
      'Известная сторона должна быть больше нуля': 'The known side must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що обчислити', width: 'Ширина, пікс', height: 'Висота, пікс',
      ratioW: 'Ширина співвідношення', ratioH: 'Висота співвідношення', known: 'Відома сторона', side: 'Значення відомої сторони, пікс',
    },
    options: {
      reduce: 'співвідношення з роздільності', side: 'відсутня сторона зі співвідношення',
      width: 'ширина', height: 'висота',
    },
    results: RESULTS_UK,
    values: {
      'пикс': 'пікс',
      'Обе стороны должны быть больше нуля': 'Обидві сторони мають бути більшими за нуль',
      'Обе части соотношения должны быть больше нуля': 'Обидві частини співвідношення мають бути більшими за нуль',
      'Известная сторона должна быть больше нуля': 'Відома сторона має бути більшою за нуль',
    },
  },
  de: {
      fields: {
        'mode': 'Was berechnet werden soll',
        'width': 'Breite, px',
        'height': 'Höhe, px',
        'ratioW': 'Verhältnis Breite',
        'ratioH': 'Verhältnis Höhe',
        'known': 'Bekannte Seite',
        'side': 'Wert der bekannten Seite, px',
      },
      options: {
        'reduce': 'Verhältnis aus einer Auflösung',
        'side': 'fehlende Seite aus einem Verhältnis',
        'width': 'Breite',
        'height': 'Höhe',
      },
      results: {
        'Соотношение сторон': 'Seitenverhältnis',
        'Десятичное отношение': 'Dezimales Verhältnis',
        'Наибольший общий делитель': 'Größter gemeinsamer Teiler',
        'Ближайшее распространённое': 'Nächstes gängiges Verhältnis',
        'Всего пикселей': 'Pixel insgesamt',
        'Высота': 'Höhe',
        'Ширина': 'Breite',
        'Точное значение': 'Exakter Wert',
        'Разрешение': 'Auflösung',
        'Соотношение': 'Verhältnis',
        'Проверьте данные': 'Prüfe die Werte',
      },
      values: {
        'пикс': 'px',
        'Обе стороны должны быть больше нуля': 'Beide Seiten müssen größer als null sein',
        'Обе части соотношения должны быть больше нуля': 'Beide Teile des Verhältnisses müssen größer als null sein',
        'Известная сторона должна быть больше нуля': 'Die bekannte Seite muss größer als null sein',
      },
  },
};
