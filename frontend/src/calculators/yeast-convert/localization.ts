import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Amount in the recipe, g', from: 'What the recipe lists', to: 'What you have' },
    options: { fresh: 'fresh compressed', active: 'active dry', instant: 'instant' },
    results: {
      'Нужно дрожжей': 'Yeast needed', 'В пересчёте на прессованные': 'As fresh compressed',
      'Сухие активные': 'Active dry', 'Быстродействующие': 'Instant',
      'Соотношение': 'Ratio', 'Проверьте данные': 'Check the values',
    },
    values: {
      'г': 'g',
      'Выберите вид дрожжей из списка': 'Choose a yeast type from the list',
      'Масса должна быть больше нуля': 'The amount must be greater than zero',
      'Выберите разные виды дрожжей': 'Choose two different yeast types',
    },
  },
  uk: {
    fields: { value: 'Маса за рецептом, г', from: 'Що вказано в рецепті', to: 'Що є в наявності' },
    options: { fresh: 'пресовані', active: 'сухі активні', instant: 'швидкодіючі' },
    results: {
      'Нужно дрожжей': 'Потрібно дріжджів', 'В пересчёте на прессованные': 'У перерахунку на пресовані',
      'Сухие активные': 'Сухі активні', 'Быстродействующие': 'Швидкодіючі',
      'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'г': 'г',
      'Выберите вид дрожжей из списка': 'Оберіть вид дріжджів зі списку',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Выберите разные виды дрожжей': 'Оберіть різні види дріжджів',
    },
  },
};
