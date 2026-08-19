import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "engagements": "Total engagements",
      "base": "Calculate from",
      "reach": "Post reach",
      "followers": "Followers",
    },
    options: {
      "reach": "reach",
      "followers": "follower count",
    },
    results: {
      "Вовлечённость": "Engagement rate",
      "База расчёта": "Base used",
      "Реакций": "Engagements",
      "Реакций на тысячу": "Engagements per thousand",
      "Проверьте данные": "Check the values",
    },
    values: {
      "охват": "reach",
      "подписчики": "followers",
      "Реакций не может быть отрицательное число": "The number of engagements cannot be negative",
      "База должна быть больше нуля": "The base must be greater than zero",
    },
  },
  uk: {
    fields: {
      "engagements": "Реакцій усього",
      "base": "Рахувати від",
      "reach": "Охоплення публікації",
      "followers": "Підписників",
    },
    options: {
      "reach": "охоплення",
      "followers": "кількості підписників",
    },
    results: {
      "Вовлечённость": "Залученість",
      "База расчёта": "База розрахунку",
      "Реакций": "Реакцій",
      "Реакций на тысячу": "Реакцій на тисячу",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "охват": "охоплення",
      "подписчики": "підписники",
      "Реакций не может быть отрицательное число": "Кількість реакцій не може бути від’ємною",
      "База должна быть больше нуля": "База має бути більшою за нуль",
    },
  },
};
