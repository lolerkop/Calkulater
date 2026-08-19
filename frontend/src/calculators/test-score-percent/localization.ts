import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Результат': 'Score', 'Правильных': 'Correct', 'Ошибок': 'Wrong',
  'Доля ошибок': 'Share of errors', 'Проходной балл': 'Pass mark', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Результат': 'Результат', 'Правильных': 'Правильних', 'Ошибок': 'Помилок',
  'Доля ошибок': 'Частка помилок', 'Проходной балл': 'Прохідний бал', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { correct: 'Correct answers', total: 'Questions in total', passMark: 'Pass mark, %' },
    results: RESULTS_EN,
    values: {
      'из': 'of', 'Тест сдан': 'Passed', 'Тест не сдан': 'Not passed',
      'Всего вопросов должно быть больше нуля': 'The number of questions must be greater than zero',
      'Число правильных ответов не может быть отрицательным': 'The number of correct answers cannot be negative',
      'Правильных ответов не может быть больше, чем вопросов': 'There cannot be more correct answers than questions',
    },
  },
  uk: {
    fields: { correct: 'Правильні відповіді', total: 'Усього питань', passMark: 'Прохідний бал, %' },
    results: RESULTS_UK,
    values: {
      'из': 'з', 'Тест сдан': 'Тест складено', 'Тест не сдан': 'Тест не складено',
      'Всего вопросов должно быть больше нуля': 'Кількість питань має бути більшою за нуль',
      'Число правильных ответов не может быть отрицательным': 'Кількість правильних відповідей не може бути від’ємною',
      'Правильных ответов не может быть больше, чем вопросов': 'Правильних відповідей не може бути більше, ніж питань',
    },
  },
};
