import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Потребляемая мощность": "Power drawn",
    "Ток от батареи": "Current from the battery",
    "Потери": "Losses",
    "Полезная мощность": "Useful power",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Потребляемая мощность": "Спожита потужність",
    "Ток от батареи": "Струм від батареї",
    "Потери": "Втрати",
    "Полезная мощность": "Корисна потужність",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { outputPower: "Output power, W", efficiency: "Efficiency, %", batteryVoltage: "Battery voltage, V" },
    results: RESULTS_EN,
    values: {
    "Вт": "W",
    "А": "A",
    "Выходная мощность должна быть больше нуля": "The output power must be greater than zero",
    "КПД должен быть больше нуля": "The efficiency must be greater than zero",
    "КПД не может превышать сто процентов": "The efficiency cannot exceed one hundred percent",
    "Напряжение батареи должно быть больше нуля": "The battery voltage must be greater than zero",
    },
  },
  uk: {
    fields: { outputPower: "Вихідна потужність, Вт", efficiency: "ККД, %", batteryVoltage: "Напруга батареї, В" },
    results: RESULTS_UK,
    values: {
    "Вт": "Вт",
    "А": "А",
    "Выходная мощность должна быть больше нуля": "Вихідна потужність має бути більшою за нуль",
    "КПД должен быть больше нуля": "ККД має бути більшим за нуль",
    "КПД не может превышать сто процентов": "ККД не може перевищувати сто відсотків",
    "Напряжение батареи должно быть больше нуля": "Напруга батареї має бути більшою за нуль",
    },
  },
};
