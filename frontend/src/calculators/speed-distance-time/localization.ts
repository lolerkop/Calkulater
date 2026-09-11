import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Результат": "Result",
    "Скорость": "Speed",
    "Расстояние": "Distance",
    "Время": "Time",
    "Время в пути": "Travel time",
    "Минут на километр": "Minutes per kilometre",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Результат": "Результат",
    "Скорость": "Швидкість",
    "Расстояние": "Відстань",
    "Время": "Час",
    "Время в пути": "Час у дорозі",
    "Минут на километр": "Хвилин на кілометр",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'distance': 'Weg, km',
      'time': 'Zeit, Stunden',
      'speed': 'Geschwindigkeit, km/h',
    },
    options: {
      'speed': 'die Geschwindigkeit',
      'distance': 'der Weg',
      'time': 'die Zeit',
    },
    results: {
      'Результат': 'Ergebnis',
      'Скорость': 'Geschwindigkeit',
      'Расстояние': 'Weg',
      'Время': 'Zeit',
      'Время в пути': 'Fahrzeit',
      'Минут на километр': 'Minuten je Kilometer',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'км/ч': 'km/h',
      '(вычисляется)': '(wird berechnet)',
      'км': 'km',
      'ч': 'h',
      'мин': 'min',
      'Значения не могут быть отрицательными': 'Die Werte können nicht negativ sein',
      'Время должно быть больше нуля': 'Die Zeit muss größer als null sein',
      'Скорость должна быть больше нуля': 'Die Geschwindigkeit muss größer als null sein',
    },
  },
  en: {
    fields: { mode: "What to find", distance: "Distance, km", time: "Time, hours", speed: "Speed, km/h" },
    options: { speed: "speed", distance: "distance", time: "time" },
    results: RESULTS_EN,
    values: {
    "км/ч": "km/h",
    "(вычисляется)": "(computed)",
    "км": "km",
    "ч": "h",
    "мин": "min",
    "Значения не могут быть отрицательными": "The values cannot be negative",
    "Время должно быть больше нуля": "The time must be greater than zero",
    "Скорость должна быть больше нуля": "The speed must be greater than zero",
    },
  },
  uk: {
    fields: { mode: "Що знайти", distance: "Відстань, км", time: "Час, годин", speed: "Швидкість, км/год" },
    options: { speed: "швидкість", distance: "відстань", time: "час" },
    results: RESULTS_UK,
    values: {
    "км/ч": "км/год",
    "(вычисляется)": "(обчислюється)",
    "км": "км",
    "ч": "год",
    "мин": "хв",
    "Значения не могут быть отрицательными": "Значення не можуть бути від’ємними",
    "Время должно быть больше нуля": "Час має бути більшим за нуль",
    "Скорость должна быть больше нуля": "Швидкість має бути більшою за нуль",
    },
  },
  es: {
    fields: {
      "mode": "Qué hallar",
      "distance": "Distancia, km",
      "time": "Tiempo, horas",
      "speed": "Velocidad, km/h",
    },
    options: {
      "speed": "velocidad",
      "distance": "distancia",
      "time": "tiempo",
    },
    results: {
      "Результат": "Resultado",
      "Скорость": "Velocidad",
      "Расстояние": "Distancia",
      "Время": "Tiempo",
      "Время в пути": "Tiempo de viaje",
      "Минут на километр": "Minutos por kilómetro",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "км/ч": "km/h",
      "(вычисляется)": "(se calcula)",
      "км": "km",
      "ч": "h",
      "мин": "min",
      "Значения не могут быть отрицательными": "Los valores no pueden ser negativos",
      "Время должно быть больше нуля": "El tiempo debe ser mayor que cero",
      "Скорость должна быть больше нуля": "La velocidad debe ser mayor que cero",
    },
  },
};
