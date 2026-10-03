import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
  de: {
    fields: {
      'price': 'Warenpreis, €',
      'commissionPct': 'Provision der Plattform, %',
      'acquiringPct': 'Zahlungsabwicklung, %',
      'logistics': 'Versand je Paket, €',
      'storage': 'Lagerung je Paket, €',
      'cost': 'Wareneinsatz, €',
    },
    results: {
      'Выплата продавцу': 'Auszahlung an den Verkäufer',
      'Комиссия площадки': 'Provision der Plattform',
      'Эквайринг': 'Zahlungsabwicklung',
      'Логистика': 'Versand',
      'Хранение': 'Lagerung',
      'Удержано всего': 'Insgesamt einbehalten',
      'Доля удержаний': 'Anteil am Preis',
      'Прибыль': 'Gewinn',
      'Рентабельность к цене': 'Rendite auf den Preis',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Цена товара должна быть больше нуля': 'Der Warenpreis muss größer als null sein',
      'Ставка удержания не может быть отрицательной': 'Ein Abzugssatz kann nicht negativ sein',
      'Сумма не может быть отрицательной': 'Ein Betrag kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      "price": "Item price, $",
      "commissionPct": "Platform commission, %",
      "acquiringPct": "Card processing, %",
      "logistics": "Shipping per parcel, $",
      "storage": "Storage per parcel, $",
      "cost": "Cost of goods, $",
    },
    options: {},
    results: {
      "Выплата продавцу": "Seller payout",
      "Комиссия площадки": "Platform commission",
      "Эквайринг": "Card processing",
      "Логистика": "Shipping",
      "Хранение": "Storage",
      "Удержано всего": "Total deducted",
      "Доля удержаний": "Share of the price",
      "Прибыль": "Profit",
      "Рентабельность к цене": "Return on price",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Цена товара должна быть больше нуля": "The item price must be greater than zero",
      "Ставка удержания не может быть отрицательной": "A deduction rate cannot be negative",
      "Сумма не может быть отрицательной": "An amount cannot be negative",
    },
  },
  uk: {
    fields: {
      "price": "Ціна товару, ₴",
      "commissionPct": "Комісія майданчика, %",
      "acquiringPct": "Еквайринг, %",
      "logistics": "Логістика за відправлення, ₴",
      "storage": "Зберігання за відправлення, ₴",
      "cost": "Собівартість товару, ₴",
    },
    options: {},
    results: {
      "Выплата продавцу": "Виплата продавцю",
      "Комиссия площадки": "Комісія майданчика",
      "Эквайринг": "Еквайринг",
      "Логистика": "Логістика",
      "Хранение": "Зберігання",
      "Удержано всего": "Утримано всього",
      "Доля удержаний": "Частка утримань",
      "Прибыль": "Прибуток",
      "Рентабельность к цене": "Рентабельність до ціни",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Цена товара должна быть больше нуля": "Ціна товару має бути більшою за нуль",
      "Ставка удержания не может быть отрицательной": "Ставка утримання не може бути від'ємною",
      "Сумма не может быть отрицательной": "Сума не може бути від'ємною",
    },
  },
  es: {
    fields: {
      "price": "Precio del artículo, €",
      "commissionPct": "Comisión de la plataforma, %",
      "acquiringPct": "Pasarela de pago, %",
      "logistics": "Envío por paquete, €",
      "storage": "Almacenaje por paquete, €",
      "cost": "Coste de la mercancía, €",
    },
    options: {},
    results: {
      "Выплата продавцу": "Liquidación al vendedor",
      "Комиссия площадки": "Comisión de la plataforma",
      "Эквайринг": "Pasarela de pago",
      "Логистика": "Envío",
      "Хранение": "Almacenaje",
      "Удержано всего": "Total descontado",
      "Доля удержаний": "Proporción sobre el precio",
      "Прибыль": "Beneficio",
      "Рентабельность к цене": "Rentabilidad sobre el precio",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "₽": "€",
      "Цена товара должна быть больше нуля": "El precio del artículo debe ser mayor que cero",
      "Ставка удержания не может быть отрицательной": "Un tipo de descuento no puede ser negativo",
      "Сумма не может быть отрицательной": "Un importe no puede ser negativo",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {},
    "values": {
      "Ставка удержания должна быть от нуля до ста процентов": "Each deduction rate must be between zero and one hundred percent"
    }
  },
  "uk": {
    "fields": {},
    "values": {
      "Ставка удержания должна быть от нуля до ста процентов": "Кожна ставка утримання має бути від нуля до ста відсотків"
    }
  },
  "de": {
    "fields": {},
    "values": {
      "Ставка удержания должна быть от нуля до ста процентов": "Jeder Abzugssatz muss zwischen null und hundert Prozent liegen"
    }
  },
  "es": {
    "fields": {},
    "values": {
      "Ставка удержания должна быть от нуля до ста процентов": "Cada tipo de deducción debe estar entre cero y cien por ciento"
    }
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
