import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "ingredients": "Ingredients: name, quantity and price per line",
      "servings": "Servings",
    },
    options: {},
    results: {
      "Стоимость порции": "Cost per serving",
      "Стоимость всего": "Total cost",
      "Ингредиентов": "Ingredients",
      "Самый дорогой": "Most expensive",
      "Порций": "Servings",
      "Состав и стоимость": "Ingredients and cost",
      "Ингредиент": "Ingredient",
      "Количество": "Quantity",
      "Цена": "Price",
      "Стоимость": "Cost",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Число порций должно быть больше нуля": "The number of servings must be greater than zero",
      "Количество и цена не могут быть отрицательными": "Quantity and price cannot be negative",
      "Введите хотя бы один ингредиент": "Enter at least one ingredient",
    },
  },
  uk: {
    fields: {
      "ingredients": "Інгредієнти: назва, кількість і ціна в рядку",
      "servings": "Порцій",
    },
    options: {},
    results: {
      "Стоимость порции": "Вартість порції",
      "Стоимость всего": "Вартість усього",
      "Ингредиентов": "Інгредієнтів",
      "Самый дорогой": "Найдорожчий",
      "Порций": "Порцій",
      "Состав и стоимость": "Склад і вартість",
      "Ингредиент": "Інгредієнт",
      "Количество": "Кількість",
      "Цена": "Ціна",
      "Стоимость": "Вартість",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Число порций должно быть больше нуля": "Кількість порцій має бути більшою за нуль",
      "Количество и цена не могут быть отрицательными": "Кількість і ціна не можуть бути від'ємними",
      "Введите хотя бы один ингредиент": "Введіть хоча б один інгредієнт",
    },
  },
};
