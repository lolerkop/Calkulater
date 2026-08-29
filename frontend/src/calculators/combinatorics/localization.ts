import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Количество вариантов': 'Number of ways', 'Формула': 'Formula', 'Научная форма': 'Scientific form',
  'Порядок важен': 'Order matters', 'Повторения разрешены': 'Repetition allowed',
  'Размещений из тех же чисел': 'Permutations of the same numbers',
  'Сочетаний из тех же чисел': 'Combinations of the same numbers', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Количество вариантов': 'Кількість варіантів', 'Формула': 'Формула', 'Научная форма': 'Наукова форма',
  'Порядок важен': 'Порядок важливий', 'Повторения разрешены': 'Повторення дозволені',
  'Размещений из тех же чисел': 'Розміщень із тих самих чисел',
  'Сочетаний из тех же чисел': 'Сполучень із тих самих чисел', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gezählt wird',
      'repetition': 'Wiederholung erlauben',
      'n': 'Größe der Menge n',
      'k': 'Größe der Auswahl k',
    },
    options: {
      'combinations': 'Kombinationen',
      'permutations': 'Variationen',
      'no': 'Nein',
      'yes': 'Ja',
    },
    results: {
      'Количество вариантов': 'Zahl der Möglichkeiten',
      'Формула': 'Formel',
      'Научная форма': 'Wissenschaftliche Schreibweise',
      'Порядок важен': 'Reihenfolge zählt',
      'Повторения разрешены': 'Wiederholung erlaubt',
      'Размещений из тех же чисел': 'Variationen aus denselben Zahlen',
      'Сочетаний из тех же чисел': 'Kombinationen aus denselben Zahlen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'да': 'ja',
      'нет': 'nein',
      'Оба числа должны быть целыми и неотрицательными': 'Beide Zahlen müssen ganz und nicht negativ sein',
      'Числа больше тысячи выходят за практический предел расчёта': 'Zahlen über tausend liegen jenseits der praktischen Grenze dieser Rechnung',
      'Без повторений выборка не может быть больше множества': 'Ohne Wiederholung kann die Auswahl nicht größer als die Menge sein',
    },
  },
  en: {
    fields: { mode: 'What to count', repetition: 'Allow repetition', n: 'Set size n', k: 'Sample size k' },
    options: { combinations: 'combinations', permutations: 'permutations', no: 'No', yes: 'Yes' },
    results: RESULTS_EN,
    values: {
      'да': 'yes', 'нет': 'no',
      'Оба числа должны быть целыми и неотрицательными': 'Both numbers must be whole and non-negative',
      'Числа больше тысячи выходят за практический предел расчёта': 'Numbers above a thousand are beyond the practical limit here',
      'Без повторений выборка не может быть больше множества': 'Without repetition the sample cannot exceed the set',
    },
  },
  uk: {
    fields: { mode: 'Що рахуємо', repetition: 'Дозволити повторення', n: 'Розмір множини n', k: 'Розмір вибірки k' },
    options: { combinations: 'сполучення', permutations: 'розміщення', no: 'Ні', yes: 'Так' },
    results: RESULTS_UK,
    values: {
      'да': 'так', 'нет': 'ні',
      'Оба числа должны быть целыми и неотрицательными': 'Обидва числа мають бути цілими й невід’ємними',
      'Числа больше тысячи выходят за практический предел расчёта': 'Числа більші за тисячу виходять за практичну межу розрахунку',
      'Без повторений выборка не может быть больше множества': 'Без повторень вибірка не може бути більшою за множину',
    },
  },
};
