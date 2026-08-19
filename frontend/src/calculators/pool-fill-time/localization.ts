import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Время наполнения": "Time to fill",
    "Часы и минуты": "Hours and minutes",
    "Всего минут": "Total minutes",
    "Объём чаши": "Pool volume",
    "Объём в литрах": "Volume in litres",
    "Расход": "Flow rate",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Время наполнения": "Час наповнення",
    "Часы и минуты": "Години та хвилини",
    "Всего минут": "Усього хвилин",
    "Объём чаши": "Об’єм чаші",
    "Объём в литрах": "Об’єм у літрах",
    "Расход": "Витрата",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: "Pool shape", volume: "Volume, m³", length: "Length, m", width: "Width, m", depth: "Depth, m", diameter: "Diameter, m", flow: "Flow rate", flowUnit: "Flow unit" },
    options: { volume: "known volume", rect: "rectangular", round: "round", lmin: "L/min", lhour: "L/h", m3hour: "m³/h" },
    results: RESULTS_EN,
    values: {
    "ч": "h",
    "мин": "min",
    "м³": "m³",
    "м³/ч": "m³/h",
    "Размеры чаши должны быть больше нуля": "The pool dimensions must be greater than zero",
    "Диаметр и глубина должны быть больше нуля": "The diameter and depth must be greater than zero",
    "Объём должен быть больше нуля": "The volume must be greater than zero",
    "Расход воды должен быть больше нуля": "The flow rate must be greater than zero",
    },
  },
  uk: {
    fields: { mode: "Форма чаші", volume: "Об’єм, м³", length: "Довжина, м", width: "Ширина, м", depth: "Глибина, м", diameter: "Діаметр, м", flow: "Витрата", flowUnit: "Одиниця витрати" },
    options: { volume: "відомий об’єм", rect: "прямокутна", round: "кругла", lmin: "л/хв", lhour: "л/год", m3hour: "м³/год" },
    results: RESULTS_UK,
    values: {
    "ч": "год",
    "мин": "хв",
    "м³": "м³",
    "м³/ч": "м³/год",
    "Размеры чаши должны быть больше нуля": "Розміри чаші мають бути більшими за нуль",
    "Диаметр и глубина должны быть больше нуля": "Діаметр і глибина мають бути більшими за нуль",
    "Объём должен быть больше нуля": "Об’єм має бути більшим за нуль",
    "Расход воды должен быть больше нуля": "Витрата води має бути більшою за нуль",
    },
  },
};
