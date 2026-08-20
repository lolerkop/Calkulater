import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
};
