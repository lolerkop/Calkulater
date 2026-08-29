import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Rechenmodus',
    },
    options: {
      'fromAmount': 'Provision aus dem Betrag',
      'fromCommission': 'Betrag aus der Provision',
      'rate': 'Satz aus beidem',
    },
    results: {
      'Комиссия': 'Provision',
      'Сумма сделки': 'Geschäftsbetrag',
      'Ставка комиссии': 'Provisionssatz',
      'К получению': 'Auszahlung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Ставка комиссии должна быть больше нуля': 'Der Provisionssatz muss größer als null sein',
      'Сумма сделки должна быть больше нуля': 'Der Geschäftsbetrag muss größer als null sein',
    },
  },
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
