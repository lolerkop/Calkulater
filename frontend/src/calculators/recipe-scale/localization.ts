import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "ingredients": "Ingredients: name and quantity per line",
      "fromServings": "Servings in the recipe",
      "toServings": "Servings needed",
    },
    options: {},
    results: {
      "Коэффициент": "Scaling factor",
      "Ингредиентов": "Ingredients",
      "Было всего": "Original total",
      "Стало всего": "Scaled total",
      "Порций было": "Servings before",
      "Порций стало": "Servings after",
      "Пересчёт ингредиентов": "Scaled ingredients",
      "Ингредиент": "Ingredient",
      "Было": "Before",
      "Стало": "After",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Исходное число порций должно быть больше нуля": "The original number of servings must be greater than zero",
      "Нужное число порций должно быть больше нуля": "The required number of servings must be greater than zero",
      "Количество не может быть отрицательным": "Quantity cannot be negative",
      "Введите хотя бы один ингредиент": "Enter at least one ingredient",
    },
  },
  uk: {
    fields: {
      "ingredients": "Інгредієнти: назва і кількість у рядку",
      "fromServings": "Порцій у рецепті",
      "toServings": "Порцій потрібно",
    },
    options: {},
    results: {
      "Коэффициент": "Коефіцієнт",
      "Ингредиентов": "Інгредієнтів",
      "Было всего": "Було разом",
      "Стало всего": "Стало разом",
      "Порций было": "Порцій було",
      "Порций стало": "Порцій стало",
      "Пересчёт ингредиентов": "Перерахунок інгредієнтів",
      "Ингредиент": "Інгредієнт",
      "Было": "Було",
      "Стало": "Стало",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Исходное число порций должно быть больше нуля": "Початкова кількість порцій має бути більшою за нуль",
      "Нужное число порций должно быть больше нуля": "Потрібна кількість порцій має бути більшою за нуль",
      "Количество не может быть отрицательным": "Кількість не може бути від'ємною",
      "Введите хотя бы один ингредиент": "Введіть хоча б один інгредієнт",
    },
  },
};
