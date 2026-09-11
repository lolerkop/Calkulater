import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'equity': 'Eingesetzte Sicherheit, €',
      'leverage': 'Hebel, ×',
      'entry': 'Einstiegspreis, €',
      'maintenancePct': 'Erhaltungsmarge, %',
    },
    results: {
      'Размер позиции': 'Positionsgröße',
      'Единиц позиции': 'Gehaltene Einheiten',
      'Цена ликвидации': 'Liquidationspreis',
      'Падение до ликвидации': 'Rückgang bis zur Liquidation',
      'Залог': 'Eingesetzte Sicherheit',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Залог должен быть больше нуля': 'Die Sicherheit muss größer als null sein',
      'Плечо не может быть меньше единицы': 'Der Hebel kann nicht unter eins liegen',
      'Цена входа должна быть больше нуля': 'Der Einstiegspreis muss größer als null sein',
      'Поддерживающая маржа должна быть от нуля до ста процентов': 'Die Erhaltungsmarge muss zwischen null und hundert Prozent liegen',
    },
  },
  en: {
    fields: {
      equity: 'Margin posted, ₽',
      leverage: 'Leverage, ×',
      entry: 'Entry price, ₽',
      maintenancePct: 'Maintenance margin, %',
    },
    results: {
      'Размер позиции': 'Position size',
      'Единиц позиции': 'Units held',
      'Цена ликвидации': 'Liquidation price',
      'Падение до ликвидации': 'Drop to liquidation',
      'Залог': 'Margin posted',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Залог должен быть больше нуля': 'The margin must be greater than zero',
      'Плечо не может быть меньше единицы': 'Leverage cannot be below one',
      'Цена входа должна быть больше нуля': 'The entry price must be greater than zero',
      'Поддерживающая маржа должна быть от нуля до ста процентов': 'The maintenance margin must be between zero and one hundred per cent',
    },
  },
  uk: {
    fields: {
      equity: 'Застава, ₽',
      leverage: 'Плече, ×',
      entry: 'Ціна входу, ₽',
      maintenancePct: 'Підтримувальна маржа, %',
    },
    results: {
      'Размер позиции': 'Розмір позиції',
      'Единиц позиции': 'Одиниць позиції',
      'Цена ликвидации': 'Ціна ліквідації',
      'Падение до ликвидации': 'Падіння до ліквідації',
      'Залог': 'Застава',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Залог должен быть больше нуля': 'Застава має бути більшою за нуль',
      'Плечо не может быть меньше единицы': 'Плече не може бути меншим за одиницю',
      'Цена входа должна быть больше нуля': 'Ціна входу має бути більшою за нуль',
      'Поддерживающая маржа должна быть от нуля до ста процентов': 'Підтримувальна маржа має бути від нуля до ста відсотків',
    },
  },
  es: {
    fields: {
      "equity": "Garantía aportada, €",
      "leverage": "Apalancamiento, ×",
      "entry": "Precio de entrada, €",
      "maintenancePct": "Margen de mantenimiento, %",
    },
    options: {},
    results: {
      "Размер позиции": "Tamaño de la posición",
      "Единиц позиции": "Unidades en cartera",
      "Цена ликвидации": "Precio de liquidación",
      "Падение до ликвидации": "Caída hasta la liquidación",
      "Залог": "Garantía aportada",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Залог должен быть больше нуля": "La garantía debe ser mayor que cero",
      "Плечо не может быть меньше единицы": "El apalancamiento no puede ser menor que uno",
      "Цена входа должна быть больше нуля": "El precio de entrada debe ser mayor que cero",
      "Поддерживающая маржа должна быть от нуля до ста процентов": "El margen de mantenimiento debe estar entre cero y cien por ciento",
    },
  },
};
