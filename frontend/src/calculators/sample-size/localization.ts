import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      confidence: 'Confidence level', margin: 'Margin of error, %',
      proportion: 'Expected proportion, %', population: 'Population size (0 — infinite)',
    },
    options: { '90': '90 %', '95': '95 %', '99': '99 %' },
    results: {
      'Размер выборки': 'Sample size', 'Без поправки на совокупность': 'Without finite population correction',
      'Критическое значение z': 'Critical z value', 'Предельная ошибка': 'Margin of error',
      'Доля от совокупности': 'Share of the population', 'Проверьте данные': 'Check the values',
    },
    values: {
      'чел': 'people',
      'Выберите доверительную вероятность из списка': 'Choose a confidence level from the list',
      'Предельная ошибка должна быть больше нуля': 'The margin of error must be greater than zero',
      'Ожидаемая доля задаётся от 0 до 100 процентов': 'The expected proportion runs from 0 to 100 per cent',
      'Объём совокупности не может быть отрицательным': 'The population size cannot be negative',
    },
  },
  uk: {
    fields: {
      confidence: 'Довірча ймовірність', margin: 'Гранична похибка, %',
      proportion: 'Очікувана частка, %', population: 'Обсяг сукупності (0 — нескінченна)',
    },
    options: { '90': '90 %', '95': '95 %', '99': '99 %' },
    results: {
      'Размер выборки': 'Розмір вибірки', 'Без поправки на совокупность': 'Без поправки на сукупність',
      'Критическое значение z': 'Критичне значення z', 'Предельная ошибка': 'Гранична похибка',
      'Доля от совокупности': 'Частка від сукупності', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'чел': 'осіб',
      'Выберите доверительную вероятность из списка': 'Оберіть довірчу ймовірність зі списку',
      'Предельная ошибка должна быть больше нуля': 'Гранична похибка має бути більшою за нуль',
      'Ожидаемая доля задаётся от 0 до 100 процентов': 'Очікувана частка задається від 0 до 100 відсотків',
      'Объём совокупности не может быть отрицательным': 'Обсяг сукупності не може бути від’ємним',
    },
  },
};
