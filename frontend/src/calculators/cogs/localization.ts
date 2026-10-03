import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
  de: {
    fields: {
      'beginInventory': 'Anfangsbestand, €',
      'purchases': 'Zukäufe im Zeitraum, €',
      'endInventory': 'Endbestand, €',
    },
    results: {
      'Себестоимость проданных товаров': 'Wareneinsatz',
      'Доступно к продаже': 'Zum Verkauf verfügbar',
      'Запас на начало': 'Anfangsbestand',
      'Закупки': 'Zukäufe',
      'Запас на конец': 'Endbestand',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Запас на начало не может быть отрицательным': 'Der Anfangsbestand kann nicht negativ sein',
      'Закупки не могут быть отрицательными': 'Die Zukäufe können nicht negativ sein',
      'Запас на конец не может быть отрицательным': 'Der Endbestand kann nicht negativ sein',
      'Запас на конец больше, чем было доступно к продаже': 'Der Endbestand übersteigt die zum Verkauf verfügbare Ware',
    },
  },
  en: {
    fields: {
      beginInventory: 'Opening inventory, ₽',
      purchases: 'Purchases during the period, ₽',
      endInventory: 'Closing inventory, ₽',
    },
    results: {
      'Себестоимость проданных товаров': 'Cost of goods sold',
      'Доступно к продаже': 'Goods available for sale',
      'Запас на начало': 'Opening inventory',
      'Закупки': 'Purchases',
      'Запас на конец': 'Closing inventory',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Запас на начало не может быть отрицательным': 'The opening inventory cannot be negative',
      'Закупки не могут быть отрицательными': 'Purchases cannot be negative',
      'Запас на конец не может быть отрицательным': 'The closing inventory cannot be negative',
      'Запас на конец больше, чем было доступно к продаже': 'The closing inventory exceeds the goods available for sale',
    },
  },
  uk: {
    fields: {
      beginInventory: 'Запас на початок періоду, ₽',
      purchases: 'Закупівлі за період, ₽',
      endInventory: 'Запас на кінець періоду, ₽',
    },
    results: {
      'Себестоимость проданных товаров': 'Собівартість проданих товарів',
      'Доступно к продаже': 'Доступно до продажу',
      'Запас на начало': 'Запас на початок',
      'Закупки': 'Закупівлі',
      'Запас на конец': 'Запас на кінець',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Запас на начало не может быть отрицательным': 'Запас на початок не може бути від’ємним',
      'Закупки не могут быть отрицательными': 'Закупівлі не можуть бути від’ємними',
      'Запас на конец не может быть отрицательным': 'Запас на кінець не може бути від’ємним',
      'Запас на конец больше, чем было доступно к продаже': 'Запас на кінець більший, ніж було доступно до продажу',
    },
  },
  es: {
    fields: {
      "beginInventory": "Existencia inicial, €",
      "purchases": "Compras del periodo, €",
      "endInventory": "Existencia final, €",
    },
    options: {},
    results: {
      "Себестоимость проданных товаров": "Coste de las mercancías vendidas",
      "Доступно к продаже": "Disponible para la venta",
      "Запас на начало": "Existencia inicial",
      "Закупки": "Compras",
      "Запас на конец": "Existencia final",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Запас на начало не может быть отрицательным": "La existencia inicial no puede ser negativa",
      "Закупки не могут быть отрицательными": "Las compras no pueden ser negativas",
      "Запас на конец не может быть отрицательным": "La existencia final no puede ser negativa",
      "Запас на конец больше, чем было доступно к продаже": "La existencia final supera a las mercancías disponibles para la venta",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {},
    "values": {}
  },
  "uk": {
    "fields": {},
    "values": {}
  },
  "de": {
    "fields": {},
    "values": {}
  },
  "es": {
    "fields": {},
    "values": {}
  }
};

export const localization: CalculatorLocalization = Object.fromEntries(
  Object.entries(contractOverrides).map(([locale, additions]) => {
    const key = locale as keyof typeof marketingScalarValues;
    const prior = previousLocalization[key];
    const nativeFields = Object.fromEntries(Object.entries(prior?.fields ?? {}).map(([name, label]) => [name, label.replace(/, [₽$₴€%]$/, '')]));
    return [locale, { ...prior, fields: { ...nativeFields, ...additions.fields }, values: { ...prior?.values, ...marketingScalarValues[key], ...additions.values } }];
  }),
);
