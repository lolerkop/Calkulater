import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "n": "Number of trials",
      "k": "Number of successes",
      "p": "Probability of success in one trial",
      "mode": "What to calculate",
    },
    options: {
      "exactly": "exactly k successes",
      "atMost": "at most k successes",
      "atLeast": "at least k successes",
    },
    results: {
      "Вероятность ровно k": "Probability of exactly k",
      "Вероятность не более k": "Probability of at most k",
      "Вероятность не менее k": "Probability of at least k",
      "В процентах": "As a percentage",
      "Не более k": "At most k",
      "Не менее k": "At least k",
      "Число сочетаний": "Number of combinations",
      "Математическое ожидание": "Expected value",
      "Стандартное отклонение": "Standard deviation",
      "Вероятность": "Probability",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Число испытаний и успехов должно быть целым": "Trials and successes must be whole numbers",
      "Число испытаний должно быть больше нуля": "The number of trials must be greater than zero",
      "Число успехов не может быть отрицательным": "The number of successes cannot be negative",
      "Число успехов не может превышать число испытаний": "Successes cannot exceed the number of trials",
      "Вероятность успеха должна быть от 0 до 1": "The probability of success must be between 0 and 1",
    },
  },
  uk: {
    fields: {
      "n": "Кількість випробувань",
      "k": "Кількість успіхів",
      "p": "Імовірність успіху в одному випробуванні",
      "mode": "Що рахуємо",
    },
    options: {
      "exactly": "рівно k успіхів",
      "atMost": "не більше k успіхів",
      "atLeast": "не менше k успіхів",
    },
    results: {
      "Вероятность ровно k": "Імовірність рівно k",
      "Вероятность не более k": "Імовірність не більше k",
      "Вероятность не менее k": "Імовірність не менше k",
      "В процентах": "У відсотках",
      "Не более k": "Не більше k",
      "Не менее k": "Не менше k",
      "Число сочетаний": "Кількість сполучень",
      "Математическое ожидание": "Математичне сподівання",
      "Стандартное отклонение": "Стандартне відхилення",
      "Вероятность": "Імовірність",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Число испытаний и успехов должно быть целым": "Кількість випробувань і успіхів має бути цілою",
      "Число испытаний должно быть больше нуля": "Кількість випробувань має бути більшою за нуль",
      "Число успехов не может быть отрицательным": "Кількість успіхів не може бути від'ємною",
      "Число успехов не может превышать число испытаний": "Кількість успіхів не може перевищувати кількість випробувань",
      "Вероятность успеха должна быть от 0 до 1": "Імовірність успіху має бути від 0 до 1",
    },
  },
};
