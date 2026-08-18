import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    // Поле `mode` есть и у процентов, и у краски: без области видимости эта
    // подпись перетёрла бы их. Ключ локален, коллизия невозможна структурно.
    fields: { mode: 'Calculation mode' },
    options: {
      fromAmount: 'Commission from amount',
      fromCommission: 'Amount from commission',
      rate: 'Rate from both',
    },
    results: {
      'Комиссия': 'Commission', 'Сумма сделки': 'Deal amount', 'Ставка комиссии': 'Commission rate',
      'К получению': 'You receive', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Ставка комиссии должна быть больше нуля': 'The commission rate must be greater than zero',
      'Сумма сделки должна быть больше нуля': 'The deal amount must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Режим розрахунку' },
    options: {
      fromAmount: 'Комісія із суми',
      fromCommission: 'Сума з комісії',
      rate: 'Ставка з обох',
    },
    results: {
      'Комиссия': 'Комісія', 'Сумма сделки': 'Сума угоди', 'Ставка комиссии': 'Ставка комісії',
      'К получению': 'До отримання', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Ставка комиссии должна быть больше нуля': 'Ставка комісії має бути більшою за нуль',
      'Сумма сделки должна быть больше нуля': 'Сума угоди має бути більшою за нуль',
    },
  },
};
