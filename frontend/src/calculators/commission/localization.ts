import type { CalculatorLocalization } from '../../lib/platform/types';

const contractValues = {
  "en": {
    "Введите корректные значения": "Enter valid numerical values",
    "Выберите корректный режим расчёта": "Choose a valid calculation mode",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation"
  },
  "uk": {
    "Введите корректные значения": "Введіть коректні числові значення",
    "Выберите корректный режим расчёта": "Оберіть коректний режим розрахунку",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку"
  },
  "de": {
    "Введите корректные значения": "Gib gültige Zahlenwerte ein",
    "Выберите корректный режим расчёта": "Wähle einen gültigen Rechenmodus",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung"
  },
  "es": {
    "Введите корректные значения": "Introduce valores numéricos válidos",
    "Выберите корректный режим расчёта": "Elige un modo de cálculo válido",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo"
  }
} as const;

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
      ...contractValues.de,
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
      ...contractValues.en,
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
      ...contractValues.uk,
      'Ставка комиссии должна быть больше нуля': 'Ставка комісії має бути більшою за нуль',
      'Сумма сделки должна быть больше нуля': 'Сума угоди має бути більшою за нуль',
    },
  },
  es: {
    fields: {
      "mode": "Modo de cálculo",
      "a": "Valor A",
      "b": "Valor B",
    },
    options: {
      "fromAmount": "Comisión a partir del importe",
      "fromCommission": "Importe a partir de la comisión",
      "rate": "Tipo a partir de ambos",
    },
    results: {
      "Комиссия": "Comisión",
      "Сумма сделки": "Importe de la operación",
      "Ставка комиссии": "Tipo de comisión",
      "К получению": "A recibir",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      ...contractValues.es,
      "Ставка комиссии должна быть больше нуля": "El tipo de comisión debe ser mayor que cero",
      "Сумма сделки должна быть больше нуля": "El importe de la operación debe ser mayor que cero",
    },
  },
};
