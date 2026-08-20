import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "flour": "Flour, g",
      "ingredients": "Ingredients: name and percentage of flour per line",
    },
    options: {},
    results: {
      "Вес теста": "Dough weight",
      "Гидратация": "Hydration",
      "Мука": "Flour",
      "Ингредиентов": "Ingredients",
      "Ингредиенты по пекарским процентам": "Ingredients by baker's percentage",
      "Ингредиент": "Ingredient",
      "Процент": "Percentage",
      "Вес, г": "Weight, g",
      "Проверьте данные": "Check the values",
    },
    values: {
      "г": "g",
      "Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.":
        "Flour is always taken as 100%, so the percentages adding up to more than a hundred is normal.",
      "Вес муки должен быть больше нуля": "The flour weight must be greater than zero",
      "Процент не может быть отрицательным": "A percentage cannot be negative",
      "Введите хотя бы один ингредиент": "Enter at least one ingredient",
    },
  },
  uk: {
    fields: {
      "flour": "Борошно, г",
      "ingredients": "Інгредієнти: назва і відсоток від борошна в рядку",
    },
    options: {},
    results: {
      "Вес теста": "Вага тіста",
      "Гидратация": "Гідратація",
      "Мука": "Борошно",
      "Ингредиентов": "Інгредієнтів",
      "Ингредиенты по пекарским процентам": "Інгредієнти за пекарськими відсотками",
      "Ингредиент": "Інгредієнт",
      "Процент": "Відсоток",
      "Вес, г": "Вага, г",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.":
        "Борошно завжди дорівнює 100 %, тож сума відсотків понад сто — це норма.",
      "Вес муки должен быть больше нуля": "Вага борошна має бути більшою за нуль",
      "Процент не может быть отрицательным": "Відсоток не може бути від'ємним",
      "Введите хотя бы один ингредиент": "Введіть хоча б один інгредієнт",
    },
  },
};
