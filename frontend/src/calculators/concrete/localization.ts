import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается,
// это вернуло бы ручную регистрацию.
const RESULTS_EN = {
  'Объём бетона': 'Concrete volume',
  'Чистый объём': 'Net volume',
  'Запас': 'Allowance',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Объём бетона': 'Об’єм бетону',
  'Чистый объём': 'Чистий об’єм',
  'Запас': 'Запас',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Form des Betonierens',
      'length': 'Länge der Platte, m',
      'width': 'Breite der Platte, m',
      'thickness': 'Dicke der Platte, m',
      'perimeter': 'Länge des Streifens, m',
      'stripWidth': 'Breite des Streifens, m',
      'depth': 'Tiefe des Streifens, m',
      'sectionArea': 'Querschnittsfläche der Stütze, m²',
      'height': 'Höhe der Stütze, m',
      'count': 'Zahl der Stützen',
      'waste': 'Zuschlag, %',
    },
    options: {
      'slab': 'eine Platte',
      'strip': 'ein Streifen',
      'columns': 'Stützen',
    },
    results: {
      'Объём бетона': 'Betonvolumen',
      'Чистый объём': 'Nettovolumen',
      'Запас': 'Zuschlag',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' шт': ' Stk',
      ' кг': ' kg',
      'Запас не может быть отрицательным': 'Der Zuschlag kann nicht negativ sein',
      'Запас больше 50 % не рассчитывается': 'Ein Zuschlag über 50 % wird nicht gerechnet',
      'Все размеры ленты должны быть больше нуля': 'Alle Maße des Streifens müssen größer als null sein',
      'Сечение и высота должны быть больше нуля': 'Querschnittsfläche und Höhe müssen größer als null sein',
      'Количество столбов должно быть хотя бы одно': 'Es muss mindestens eine Stütze sein',
      'Все размеры плиты должны быть больше нуля': 'Alle Maße der Platte müssen größer als null sein',
    },
  },
  en: {
    fields: { mode: 'Pour shape', length: 'Slab length, m', width: 'Slab width, m', thickness: 'Slab thickness, m', perimeter: 'Strip length, m', stripWidth: 'Strip width, m', depth: 'Strip depth, m', sectionArea: 'Column section area, m²', height: 'Column height, m', count: 'Number of columns', waste: 'Allowance, %', },
    options: { slab: 'a slab', strip: 'a strip', columns: 'columns', },
    results: RESULTS_EN,
    values: {
      ' шт': ' pcs',
      ' кг': ' kg',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
      'Запас больше 50 % не рассчитывается': 'An allowance above 50% is not calculated',
      'Все размеры ленты должны быть больше нуля': 'Every strip dimension must be greater than zero',
      'Сечение и высота должны быть больше нуля': 'The section area and height must be greater than zero',
      'Количество столбов должно быть хотя бы одно': 'There must be at least one column',
      'Все размеры плиты должны быть больше нуля': 'Every slab dimension must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Форма заливки', length: 'Довжина плити, м', width: 'Ширина плити, м', thickness: 'Товщина плити, м', perimeter: 'Довжина стрічки, м', stripWidth: 'Ширина стрічки, м', depth: 'Глибина стрічки, м', sectionArea: 'Площа перерізу стовпа, м²', height: 'Висота стовпа, м', count: 'Кількість стовпів', waste: 'Запас, %', },
    options: { slab: 'плита', strip: 'стрічка', columns: 'стовпи', },
    results: RESULTS_UK,
    values: {
      ' шт': ' шт',
      ' кг': ' кг',
      'Запас не может быть отрицательным': 'Запас не може бути від’ємним',
      'Запас больше 50 % не рассчитывается': 'Запас понад 50 % не розраховується',
      'Все размеры ленты должны быть больше нуля': 'Усі розміри стрічки мають бути більшими за нуль',
      'Сечение и высота должны быть больше нуля': 'Переріз і висота мають бути більшими за нуль',
      'Количество столбов должно быть хотя бы одно': 'Стовпів має бути щонайменше один',
      'Все размеры плиты должны быть больше нуля': 'Усі розміри плити мають бути більшими за нуль',
    },
  },
  es: {
    fields: {
      "mode": "Forma del vertido",
      "length": "Largo de la losa, m",
      "width": "Ancho de la losa, m",
      "thickness": "Espesor de la losa, m",
      "perimeter": "Longitud de la zapata, m",
      "stripWidth": "Ancho de la zapata, m",
      "depth": "Profundidad de la zapata, m",
      "sectionArea": "Área de la sección del pilar, m²",
      "height": "Altura del pilar, m",
      "count": "Número de pilares",
      "waste": "Margen, %",
    },
    options: {
      "slab": "una losa",
      "strip": "una zapata corrida",
      "columns": "pilares",
    },
    results: {
      "Объём бетона": "Volumen de hormigón",
      "Чистый объём": "Volumen neto",
      "Запас": "Margen",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      " шт": " uds.",
      " кг": " kg",
      "Запас не может быть отрицательным": "El margen no puede ser negativo",
      "Запас больше 50 % не рассчитывается": "No se calcula un margen mayor del 50 %",
      "Все размеры ленты должны быть больше нуля": "Todas las dimensiones de la zapata deben ser mayores que cero",
      "Сечение и высота должны быть больше нуля": "El área de la sección y la altura deben ser mayores que cero",
      "Количество столбов должно быть хотя бы одно": "Debe haber al menos un pilar",
      "Все размеры плиты должны быть больше нуля": "Todas las dimensiones de la losa deben ser mayores que cero",
    },
  },
};
