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
};
