import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "mode": "Stride length",
      "steps": "Steps",
      "height": "Height, cm",
      "stride": "Stride length, cm",
      "weight": "Body weight, kg",
      "kcalPerKgKm": "Kcal per kg per km",
    },
    options: { "height": "Estimate from height", "stride": "I know my stride" },
    results: {
      "Расстояние": "Distance",
      "Калории": "Calories",
      "Длина шага": "Stride length",
      "Шагов на километр": "Steps per kilometre",
      "Ккал на километр": "Kcal per kilometre",
      "Проверьте данные": "Check the values",
    },
    values: {
      "км": "km",
      "ккал": "kcal",
      "см": "cm",
      "Число шагов не может быть отрицательным": "The number of steps cannot be negative",
      "Вес должен быть больше нуля": "The weight must be greater than zero",
      "Расход на километр должен быть больше нуля": "The energy per kilometre must be greater than zero",
      "Рост должен быть от 120 до 230 см": "Height must be between 120 and 230 cm",
      "Длина шага должна быть больше нуля": "The stride length must be greater than zero",
      "Неизвестный режим": "Unknown mode",
    },
  },
  uk: {
    fields: {
      "mode": "Довжина кроку",
      "steps": "Кроки",
      "height": "Зріст, см",
      "stride": "Довжина кроку, см",
      "weight": "Вага тіла, кг",
      "kcalPerKgKm": "Ккал на кг на км",
    },
    options: { "height": "Оцінити за зростом", "stride": "Знаю свій крок" },
    results: {
      "Расстояние": "Відстань",
      "Калории": "Калорії",
      "Длина шага": "Довжина кроку",
      "Шагов на километр": "Кроків на кілометр",
      "Ккал на километр": "Ккал на кілометр",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "км": "км",
      "ккал": "ккал",
      "см": "см",
      "Число шагов не может быть отрицательным": "Кількість кроків не може бути від’ємною",
      "Вес должен быть больше нуля": "Вага має бути більшою за нуль",
      "Расход на километр должен быть больше нуля": "Витрата на кілометр має бути більшою за нуль",
      "Рост должен быть от 120 до 230 см": "Зріст має бути від 120 до 230 см",
      "Длина шага должна быть больше нуля": "Довжина кроку має бути більшою за нуль",
      "Неизвестный режим": "Невідомий режим",
    },
  },
};
