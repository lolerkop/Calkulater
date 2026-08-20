import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      species: 'Species and size',
      years: 'Age in years',
    },
    options: {
      cat: 'cat',
      'dog-small': 'small dog, up to 10 kg',
      'dog-large': 'large dog, over 25 kg',
    },
    results: {
      'Возраст в человеческих годах': 'Age in human years',
      'Возраст питомца, лет': 'Pet age, years',
      'Прибавка за каждый следующий год': 'Added per further year',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Выберите вид питомца из списка': 'Choose a species from the list',
      'Возраст должен быть больше нуля': 'The age must be greater than zero',
    },
  },
  uk: {
    fields: {
      species: 'Вид і розмір',
      years: 'Вік у роках',
    },
    options: {
      cat: 'кіт',
      'dog-small': 'малий собака, до 10 кг',
      'dog-large': 'великий собака, понад 25 кг',
    },
    results: {
      'Возраст в человеческих годах': 'Вік у людських роках',
      'Возраст питомца, лет': 'Вік тварини, років',
      'Прибавка за каждый следующий год': 'Додається за кожен наступний рік',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Выберите вид питомца из списка': 'Оберіть вид тварини зі списку',
      'Возраст должен быть больше нуля': 'Вік має бути більшим за нуль',
    },
  },
};
