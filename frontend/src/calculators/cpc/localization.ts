import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'cost': 'Werbebudget, €',
      'clicks': 'Erhaltene Klicks',
      'impressions': 'Einblendungen, 0 wenn unbekannt',
    },
    results: {
      'Цена клика (CPC)': 'Klickpreis (CPC)',
      'Кликов': 'Klicks',
      'Бюджет': 'Budget',
      'CPM': 'CPM',
      'Кликабельность': 'Klickrate',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Das Budget muss größer als null sein',
      'Число кликов должно быть больше нуля': 'Die Zahl der Klicks muss größer als null sein',
      'Кликов не может быть больше, чем показов': 'Es kann nicht mehr Klicks als Einblendungen geben',
    },
  },
  en: {
    fields: {
      cost: 'Advertising budget, ₽',
      clicks: 'Clicks received',
      impressions: 'Impressions, 0 if unknown',
    },
    results: {
      'Цена клика (CPC)': 'Cost per click (CPC)',
      'Кликов': 'Clicks',
      'Бюджет': 'Budget',
      'CPM': 'CPM',
      'Кликабельность': 'Click-through rate',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Бюджет должен быть больше нуля': 'The budget must be greater than zero',
      'Число кликов должно быть больше нуля': 'The number of clicks must be greater than zero',
      'Кликов не может быть больше, чем показов': 'There cannot be more clicks than impressions',
    },
  },
  uk: {
    fields: {
      cost: 'Рекламний бюджет, ₽',
      clicks: 'Отримано кліків',
      impressions: 'Покази, 0 якщо невідомі',
    },
    results: {
      'Цена клика (CPC)': 'Ціна кліка (CPC)',
      'Кликов': 'Кліків',
      'Бюджет': 'Бюджет',
      'CPM': 'CPM',
      'Кликабельность': 'Клікабельність',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Бюджет має бути більшим за нуль',
      'Число кликов должно быть больше нуля': 'Кількість кліків має бути більшою за нуль',
      'Кликов не может быть больше, чем показов': 'Кліків не може бути більше, ніж показів',
    },
  },
};
