export const fieldLabels = {
  en: { mode: 'Calculation mode' },
  uk: { mode: 'Режим розрахунку' },
} as const;

export const optionLabels = {
  en: { fromAmount: 'Commission from amount', fromCommission: 'Amount from commission', rate: 'Rate from both' },
  uk: { fromAmount: 'Комісія із суми', fromCommission: 'Сума з комісії', rate: 'Ставка з обох' },
} as const;

export const resultPhrases = {
  en: {
    'Комиссия': 'Commission', 'Сумма сделки': 'Deal amount', 'Ставка комиссии': 'Commission rate',
    'К получению': 'You receive', 'Проверьте данные': 'Check the values',
  },
  uk: {
    'Комиссия': 'Комісія', 'Сумма сделки': 'Сума угоди', 'Ставка комиссии': 'Ставка комісії',
    'К получению': 'До отримання', 'Проверьте данные': 'Перевірте дані',
  },
} as const;

export const resultValues = {
  en: {
    'Ставка комиссии должна быть больше нуля': 'The commission rate must be greater than zero',
    'Сумма сделки должна быть больше нуля': 'The deal amount must be greater than zero',
  },
  uk: {
    'Ставка комиссии должна быть больше нуля': 'Ставка комісії має бути більшою за нуль',
    'Сумма сделки должна быть больше нуля': 'Сума угоди має бути більшою за нуль',
  },
} as const;
