import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Время работы": "Run time",
    "Часы и минуты": "Hours and minutes",
    "Полезная энергия": "Usable energy",
    "Полная энергия батареи": "Total battery energy",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Время работы": "Час роботи",
    "Часы и минуты": "Години та хвилини",
    "Полезная энергия": "Корисна енергія",
    "Полная энергия батареи": "Повна енергія батареї",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { capacity: "Capacity, Ah", voltage: "Voltage, V", load: "Load, W", dod: "Depth of discharge, %", efficiency: "Conversion efficiency, %" },
    results: RESULTS_EN,
    values: {
    "ч": "h",
    "мин": "min",
    "Вт·ч": "Wh",
    "Ёмкость должна быть больше нуля": "The capacity must be greater than zero",
    "Напряжение должно быть больше нуля": "The voltage must be greater than zero",
    "Мощность нагрузки должна быть больше нуля": "The load must be greater than zero",
    "Глубина разряда задаётся в диапазоне от 0 до 100 процентов": "Depth of discharge is set between 0 and 100 percent",
    "КПД задаётся в диапазоне от 0 до 100 процентов": "Efficiency is set between 0 and 100 percent",
    },
  },
  uk: {
    fields: { capacity: "Ємність, А·год", voltage: "Напруга, В", load: "Навантаження, Вт", dod: "Глибина розряду, %", efficiency: "ККД перетворення, %" },
    results: RESULTS_UK,
    values: {
    "ч": "год",
    "мин": "хв",
    "Вт·ч": "Вт·год",
    "Ёмкость должна быть больше нуля": "Ємність має бути більшою за нуль",
    "Напряжение должно быть больше нуля": "Напруга має бути більшою за нуль",
    "Мощность нагрузки должна быть больше нуля": "Потужність навантаження має бути більшою за нуль",
    "Глубина разряда задаётся в диапазоне от 0 до 100 процентов": "Глибина розряду задається в діапазоні від 0 до 100 відсотків",
    "КПД задаётся в диапазоне от 0 до 100 процентов": "ККД задається в діапазоні від 0 до 100 відсотків",
    },
  },
};
