import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
