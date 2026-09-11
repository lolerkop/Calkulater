import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'flour': 'Mehl, g',
      'ingredients': 'Zutaten: Name und Prozent des Mehls je Zeile',
    },
    results: {
      'Вес теста': 'Teiggewicht',
      'Гидратация': 'Hydratation',
      'Мука': 'Mehl',
      'Ингредиентов': 'Zutaten',
      'Ингредиенты по пекарским процентам': 'Zutaten nach Bäckerprozenten',
      'Ингредиент': 'Zutat',
      'Процент': 'Prozent',
      'Вес, г': 'Gewicht, g',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Нужны название и процент в строке:': 'In der Zeile werden Name und Prozent gebraucht:',
      'Процент должен быть числом в строке:': 'Der Prozentwert muss eine Zahl sein, in der Zeile:',
      'г': 'g',
      'Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.': 'Das Mehl gilt immer als 100 %, dass die Prozentwerte zusammen über hundert liegen, ist deshalb der Normalfall.',
      'Вес муки должен быть больше нуля': 'Das Mehlgewicht muss größer als null sein',
      'Процент не может быть отрицательным': 'Ein Prozentwert kann nicht negativ sein',
      'Введите хотя бы один ингредиент': 'Trage mindestens eine Zutat ein',
    },
  },
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
      "Нужны название и процент в строке:": "Name and percentage are required on the line:",
      "Процент должен быть числом в строке:": "The percentage must be a number on the line:",
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
      "Нужны название и процент в строке:": "Потрібні назва і відсоток у рядку:",
      "Процент должен быть числом в строке:": "Відсоток має бути числом у рядку:",
      "Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.":
        "Борошно завжди дорівнює 100 %, тож сума відсотків понад сто — це норма.",
      "Вес муки должен быть больше нуля": "Вага борошна має бути більшою за нуль",
      "Процент не может быть отрицательным": "Відсоток не може бути від'ємним",
      "Введите хотя бы один ингредиент": "Введіть хоча б один інгредієнт",
    },
  },
  es: {
    fields: {
      "flour": "Harina, g",
      "ingredients": "Ingredientes: nombre y porcentaje de la harina por línea",
    },
    options: {},
    results: {
      "Вес теста": "Peso de la masa",
      "Гидратация": "Hidratación",
      "Мука": "Harina",
      "Ингредиентов": "Ingredientes",
      "Ингредиенты по пекарским процентам": "Ingredientes en porcentaje de panadero",
      "Ингредиент": "Ingrediente",
      "Процент": "Porcentaje",
      "Вес, г": "Peso, g",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Нужны название и процент в строке:": "Hacen falta un nombre y un porcentaje en la línea:",
      "Процент должен быть числом в строке:": "El porcentaje debe ser un número en la línea:",
      "г": "g",
      "Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.": "La harina se toma siempre como 100 %, así que es normal que los porcentajes sumen más de cien.",
      "Вес муки должен быть больше нуля": "El peso de la harina debe ser mayor que cero",
      "Процент не может быть отрицательным": "Un porcentaje no puede ser negativo",
      "Введите хотя бы один ингредиент": "Introduce al menos un ingrediente",
    },
  },
};
