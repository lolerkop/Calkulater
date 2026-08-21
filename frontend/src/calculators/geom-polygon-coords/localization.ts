import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "points": "Vertices: x and y per line, in order" },
    options: {},
    results: {
      "Площадь": "Area",
      "Периметр": "Perimeter",
      "Вершин": "Vertices",
      "Центроид X": "Centroid X",
      "Центроид Y": "Centroid Y",
      "Обход": "Winding",
      "Проверьте данные": "Check the values",
    },
    values: {
      "против часовой": "counter-clockwise",
      "по часовой": "clockwise",
      "Нужны две координаты в строке:": "Two coordinates are required on the line:",
      "Координаты должны быть числами в строке:": "Coordinates must be numbers on the line:",
      "Нужно не меньше трёх вершин": "At least three vertices are required",
      "Вершины лежат на одной прямой: многоугольника нет": "The vertices are collinear, so there is no polygon",
    },
  },
  uk: {
    fields: { "points": "Вершини: x і y у рядку, за порядком обходу" },
    options: {},
    results: {
      "Площадь": "Площа",
      "Периметр": "Периметр",
      "Вершин": "Вершин",
      "Центроид X": "Центроїд X",
      "Центроид Y": "Центроїд Y",
      "Обход": "Напрямок обходу",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "против часовой": "проти годинникової",
      "по часовой": "за годинниковою",
      "Нужны две координаты в строке:": "Потрібні дві координати в рядку:",
      "Координаты должны быть числами в строке:": "Координати мають бути числами в рядку:",
      "Нужно не меньше трёх вершин": "Потрібно щонайменше три вершини",
      "Вершины лежат на одной прямой: многоугольника нет": "Вершини лежать на одній прямій, тож багатокутника немає",
    },
  },
};
