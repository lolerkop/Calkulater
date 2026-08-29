import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'CTR': 'CTR', 'Кликов на показы': 'Clicks to impressions',
  'Показов на один клик': 'Impressions per click', 'Цена клика': 'Cost per click',
  'Цена тысячи показов': 'Cost per thousand impressions', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'CTR': 'CTR', 'Кликов на показы': 'Кліків на покази',
  'Показов на один клик': 'Показів на один клік', 'Цена клика': 'Ціна кліку',
  'Цена тысячи показов': 'Ціна тисячі показів', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'clicks': 'Klicks',
      'impressions': 'Einblendungen',
      'cost': 'Kosten der Kampagne',
    },
    results: {
      'CTR': 'CTR',
      'Кликов на показы': 'Klicks zu Einblendungen',
      'Показов на один клик': 'Einblendungen je Klick',
      'Цена клика': 'Klickpreis',
      'Цена тысячи показов': 'Kosten je tausend Einblendungen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'на': 'von',
      '₽': '€',
      'Показов должно быть не меньше одного': 'Es muss mindestens eine Einblendung sein',
      'Кликов не может быть меньше нуля': 'Die Zahl der Klicks kann nicht negativ sein',
      'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды': 'Mehr Klicks als Einblendungen — die Zahlen stammen vermutlich aus verschiedenen Zeiträumen',
    },
  },
  en: {
    fields: { clicks: 'Clicks', impressions: 'Impressions', cost: 'Campaign spend' },
    results: RESULTS_EN,
    values: {
      'на': 'of', '₽': '$',
      'Показов должно быть не меньше одного': 'There must be at least one impression',
      'Кликов не может быть меньше нуля': 'Clicks cannot be negative',
      'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды':
        'More clicks than impressions — the figures are probably from different periods',
    },
  },
  uk: {
    fields: { clicks: 'Кліки', impressions: 'Покази', cost: 'Витрати кампанії' },
    results: RESULTS_UK,
    values: {
      'на': 'на', '₽': '₴',
      'Показов должно быть не меньше одного': 'Показів має бути щонайменше один',
      'Кликов не может быть меньше нуля': 'Кліків не може бути менше за нуль',
      'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды':
        'Кліків більше, ніж показів — імовірно, цифри взяті за різні періоди',
    },
  },
};
