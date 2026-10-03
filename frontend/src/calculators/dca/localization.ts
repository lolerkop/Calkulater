import type { CalculatorLocalization } from '../../lib/platform/types';

const contractValues = {
  "en": {
    "Количество должно быть целым в допустимом диапазоне": "The count must be a whole number within the supported range",
    "Введите корректные значения": "Enter valid numerical values",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation",
    "Число месяцев не может превышать 12000": "The month count cannot exceed 12000"
  },
  "uk": {
    "Количество должно быть целым в допустимом диапазоне": "Кількість має бути цілим числом у допустимому діапазоні",
    "Введите корректные значения": "Введіть коректні числові значення",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку",
    "Число месяцев не может превышать 12000": "Кількість місяців не може перевищувати 12000"
  },
  "de": {
    "Количество должно быть целым в допустимом диапазоне": "Die Anzahl muss eine ganze Zahl im zulässigen Bereich sein",
    "Введите корректные значения": "Gib gültige Zahlenwerte ein",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung",
    "Число месяцев не может превышать 12000": "Die Monatszahl darf 12000 nicht überschreiten"
  },
  "es": {
    "Количество должно быть целым в допустимом диапазоне": "La cantidad debe ser un entero dentro del intervalo permitido",
    "Введите корректные значения": "Introduce valores numéricos válidos",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo",
    "Число месяцев не может превышать 12000": "El número de meses no puede superar 12000"
  }
} as const;

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'monthly': 'Monatlicher Beitrag',
      'months': 'Monate',
      'startPrice': 'Anfangspreis je Anteil',
      'priceGrowthPct': 'Monatliche Preisänderung, %',
    },
    results: {
      'Итоговая стоимость': 'Endwert',
      'Вложено всего': 'Insgesamt angelegt',
      'Куплено единиц': 'Gekaufte Anteile',
      'Средняя цена': 'Durchschnittlicher Preis',
      'Результат': 'Ergebnis',
      'Цена последней покупки': 'Preis des letzten Kaufs',
      'По месяцам': 'Monat für Monat',
      'Месяц': 'Monat',
      'Цена': 'Preis',
      'Куплено': 'Gekauft',
      'Накоплено': 'Angesammelt',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ...contractValues.de,
      'Показаны первые 12 месяцев расчёта.': 'Gezeigt werden die ersten 12 Monate der Rechnung.',
      '₽': '€',
      'Взнос должен быть больше нуля': 'Der Beitrag muss größer als null sein',
      'Число месяцев должно быть не меньше единицы': 'Die Zahl der Monate muss mindestens eins sein',
      'Число месяцев должно быть целым': 'Die Zahl der Monate muss eine ganze Zahl sein',
      'Начальная цена должна быть больше нуля': 'Der Anfangspreis muss größer als null sein',
      'Падение цены не может достигать ста процентов': 'Ein Preisrückgang kann hundert Prozent nicht erreichen',
    },
  },
  en: {
    fields: {
      "monthly": "Monthly contribution",
      "months": "Months",
      "startPrice": "Starting price per unit",
      "priceGrowthPct": "Monthly price change, %",
    },
    options: {},
    results: {
      "Итоговая стоимость": "Final value",
      "Вложено всего": "Total invested",
      "Куплено единиц": "Units bought",
      "Средняя цена": "Average price",
      "Результат": "Result",
      "Цена последней покупки": "Last purchase price",
      "По месяцам": "Month by month",
      "Месяц": "Month",
      "Цена": "Price",
      "Куплено": "Bought",
      "Накоплено": "Accumulated",
      "Проверьте данные": "Check the values",
    },
    values: {
      ...contractValues.en,
      "Показаны первые 12 месяцев расчёта.": "Showing the first 12 months of the calculation.",
      "₽": "$",
      "Взнос должен быть больше нуля": "The contribution must be greater than zero",
      "Число месяцев должно быть не меньше единицы": "The number of months must be at least one",
      "Число месяцев должно быть целым": "The number of months must be a whole number",
      "Начальная цена должна быть больше нуля": "The starting price must be greater than zero",
      "Падение цены не может достигать ста процентов": "A price drop cannot reach a hundred percent",
    },
  },
  uk: {
    fields: {
      "monthly": "Внесок на місяць",
      "months": "Місяців",
      "startPrice": "Початкова ціна за одиницю",
      "priceGrowthPct": "Зміна ціни на місяць, %",
    },
    options: {},
    results: {
      "Итоговая стоимость": "Підсумкова вартість",
      "Вложено всего": "Вкладено разом",
      "Куплено единиц": "Куплено одиниць",
      "Средняя цена": "Середня ціна",
      "Результат": "Результат",
      "Цена последней покупки": "Ціна останньої покупки",
      "По месяцам": "За місяцями",
      "Месяц": "Місяць",
      "Цена": "Ціна",
      "Куплено": "Куплено",
      "Накоплено": "Накопичено",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      ...contractValues.uk,
      "Показаны первые 12 месяцев расчёта.": "Показано перші 12 місяців розрахунку.",
      "₽": "₴",
      "Взнос должен быть больше нуля": "Внесок має бути більшим за нуль",
      "Число месяцев должно быть не меньше единицы": "Кількість місяців має бути щонайменше одиниця",
      "Число месяцев должно быть целым": "Кількість місяців має бути цілою",
      "Начальная цена должна быть больше нуля": "Початкова ціна має бути більшою за нуль",
      "Падение цены не может достигать ста процентов": "Падіння ціни не може сягати ста відсотків",
    },
  },
  es: {
    fields: {
      "monthly": "Aportación mensual",
      "months": "Meses",
      "startPrice": "Precio inicial por unidad",
      "priceGrowthPct": "Variación mensual del precio, %",
    },
    options: {},
    results: {
      "Итоговая стоимость": "Valor final",
      "Вложено всего": "Total invertido",
      "Куплено единиц": "Unidades compradas",
      "Средняя цена": "Precio medio",
      "Результат": "Resultado",
      "Цена последней покупки": "Precio de la última compra",
      "По месяцам": "Mes a mes",
      "Месяц": "Mes",
      "Цена": "Precio",
      "Куплено": "Compradas",
      "Накоплено": "Acumuladas",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      ...contractValues.es,
      "Показаны первые 12 месяцев расчёта.": "Se muestran los 12 primeros meses del cálculo.",
      "₽": "€",
      "Взнос должен быть больше нуля": "La aportación debe ser mayor que cero",
      "Число месяцев должно быть не меньше единицы": "El número de meses debe ser al menos uno",
      "Число месяцев должно быть целым": "El número de meses debe ser un número entero",
      "Начальная цена должна быть больше нуля": "El precio inicial debe ser mayor que cero",
      "Падение цены не может достигать ста процентов": "Una caída de precio no puede llegar al cien por cien",
    },
  },
};
