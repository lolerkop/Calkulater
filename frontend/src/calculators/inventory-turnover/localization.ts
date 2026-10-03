import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
  de: {
    fields: {
      'cogs': 'Wareneinsatz im Zeitraum, €',
      'mode': 'Durchschnittlicher Bestand',
      'avgInventory': 'Durchschnittlicher Bestand, €',
      'beginInventory': 'Anfangsbestand, €',
      'endInventory': 'Endbestand, €',
    },
    options: {
      'direct': 'ist bekannt',
      'beginEnd': 'aus den Beständen rechnen',
    },
    results: {
      'Оборачиваемость': 'Umschlagshäufigkeit',
      'Срок хранения': 'Lagerdauer',
      'Средний запас': 'Durchschnittlicher Bestand',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'раз': 'mal',
      'дней': 'Tage',
      'Себестоимость продаж должна быть больше нуля': 'Der Wareneinsatz muss größer als null sein',
      'Средний запас должен быть больше нуля': 'Der durchschnittliche Bestand muss größer als null sein',
    },
  },
  en: {
    fields: {
      "cogs": "Cost of goods sold for the period, $",
      "mode": "Average inventory",
      "avgInventory": "Average inventory, $",
      "beginInventory": "Opening inventory, $",
      "endInventory": "Closing inventory, $",
    },
    options: {
      "direct": "is known",
      "beginEnd": "compute from balances",
    },
    results: {
      "Оборачиваемость": "Turnover",
      "Срок хранения": "Days on hand",
      "Средний запас": "Average inventory",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "раз": "times",
      "дней": "days",
      "Себестоимость продаж должна быть больше нуля": "The cost of goods sold must be greater than zero",
      "Средний запас должен быть больше нуля": "The average inventory must be greater than zero",
    },
  },
  uk: {
    fields: {
      "cogs": "Собівартість продажів за період, ₴",
      "mode": "Середній запас",
      "avgInventory": "Середній запас, ₴",
      "beginInventory": "Запас на початок, ₴",
      "endInventory": "Запас на кінець, ₴",
    },
    options: {
      "direct": "відомий",
      "beginEnd": "рахувати за залишками",
    },
    results: {
      "Оборачиваемость": "Оборотність",
      "Срок хранения": "Термін зберігання",
      "Средний запас": "Середній запас",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "раз": "разів",
      "дней": "днів",
      "Себестоимость продаж должна быть больше нуля": "Собівартість продажів має бути більшою за нуль",
      "Средний запас должен быть больше нуля": "Середній запас має бути більшим за нуль",
    },
  },
  es: {
    fields: {
      "cogs": "Coste de las mercancías vendidas del periodo, €",
      "mode": "Existencias medias",
      "avgInventory": "Existencias medias, €",
      "beginInventory": "Existencia inicial, €",
      "endInventory": "Existencia final, €",
    },
    options: {
      "direct": "se conocen",
      "beginEnd": "calcular a partir de los saldos",
    },
    results: {
      "Оборачиваемость": "Rotación",
      "Срок хранения": "Días de cobertura",
      "Средний запас": "Existencias medias",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "₽": "€",
      "раз": "veces",
      "дней": "días",
      "Себестоимость продаж должна быть больше нуля": "El coste de las mercancías vendidas debe ser mayor que cero",
      "Средний запас должен быть больше нуля": "Las existencias medias deben ser mayores que cero",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {
      "cogs": "Annual cost of goods sold"
    },
    "values": {
      "Выберите способ расчёта среднего запаса": "Select a method for average inventory",
      "Запасы не могут быть отрицательными": "Inventory balances cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "cogs": "Річна собівартість продажів"
    },
    "values": {
      "Выберите способ расчёта среднего запаса": "Виберіть спосіб розрахунку середнього запасу",
      "Запасы не могут быть отрицательными": "Запаси не можуть бути від’ємними"
    }
  },
  "de": {
    "fields": {
      "cogs": "Jährlicher Wareneinsatz"
    },
    "values": {
      "Выберите способ расчёта среднего запаса": "Wähle eine Methode für den Durchschnittsbestand",
      "Запасы не могут быть отрицательными": "Bestände dürfen nicht negativ sein"
    }
  },
  "es": {
    "fields": {
      "cogs": "Coste anual de las mercancías vendidas"
    },
    "values": {
      "Выберите способ расчёта среднего запаса": "Elige un método para las existencias medias",
      "Запасы не могут быть отрицательными": "Los saldos de existencias no pueden ser negativos"
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
