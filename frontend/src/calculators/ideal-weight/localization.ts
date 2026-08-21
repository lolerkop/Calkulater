import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "sex": "Sex", "height": "Height, cm" },
    options: { "male": "Male", "female": "Female" },
    results: {
      "Среднее по формулам": "Average of the formulas",
      "Девайн": "Devine", "Робинсон": "Robinson", "Миллер": "Miller", "Хамви": "Hamwi",
      "Здоровый диапазон по ИМТ, от": "Healthy BMI range, from",
      "Здоровый диапазон по ИМТ, до": "Healthy BMI range, to",
      "Проверьте данные": "Check the values",
    },
    values: {
      "кг": "kg",
      "Неизвестный пол": "Unknown sex",
      "Рост должен быть от 120 до 230 см": "Height must be between 120 and 230 cm",
      "Формулы выведены из статистики середины прошлого века и расходятся между собой на несколько килограммов. Диапазон по ИМТ шире и честнее любой точки.": "The formulas come from mid-twentieth-century statistics and disagree with each other by several kilograms. The BMI range is wider and more honest than any single point.",
    },
  },
  uk: {
    fields: { "sex": "Стать", "height": "Зріст, см" },
    options: { "male": "Чоловіча", "female": "Жіноча" },
    results: {
      "Среднее по формулам": "Середнє за формулами",
      "Девайн": "Девайн", "Робинсон": "Робінсон", "Миллер": "Міллер", "Хамви": "Хамві",
      "Здоровый диапазон по ИМТ, от": "Здоровий діапазон за ІМТ, від",
      "Здоровый диапазон по ИМТ, до": "Здоровий діапазон за ІМТ, до",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "кг": "кг",
      "Неизвестный пол": "Невідома стать",
      "Рост должен быть от 120 до 230 см": "Зріст має бути від 120 до 230 см",
      "Формулы выведены из статистики середины прошлого века и расходятся между собой на несколько килограммов. Диапазон по ИМТ шире и честнее любой точки.": "Формули виведені зі статистики середини минулого століття і розходяться між собою на кілька кілограмів. Діапазон за ІМТ ширший і чесніший за будь-яку точку.",
    },
  },
};
