import type { CalculatorLocalization, CalculatorLocaleBundle, TranslatedLocale } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

const previousLocalization: CalculatorLocalization = {
  de: {
    fields: {
      'budget': 'Werbebudget, €',
      'cpc': 'Klickpreis, €',
      'crPct': 'Konversionsrate, %',
      'aov': 'Durchschnittlicher Bestellwert, €',
    },
    results: {
      'Ожидаемая выручка': 'Erwarteter Umsatz',
      'Кликов': 'Klicks',
      'Заказов': 'Bestellungen',
      'ROAS': 'ROAS',
      'Цена заказа': 'Kosten je Bestellung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Das Budget muss größer als null sein',
      'Цена клика должна быть больше нуля': 'Der Klickpreis muss größer als null sein',
      'Конверсия должна быть больше нуля и не больше ста процентов': 'Die Konversionsrate muss über null und höchstens hundert Prozent betragen',
      'Средний чек должен быть больше нуля': 'Der durchschnittliche Bestellwert muss größer als null sein',
    },
  },
  en: {
    fields: {
      budget: 'Advertising budget, ₽',
      cpc: 'Cost per click, ₽',
      crPct: 'Conversion rate, %',
      aov: 'Average order value, ₽',
    },
    results: {
      'Ожидаемая выручка': 'Expected revenue',
      'Кликов': 'Clicks',
      'Заказов': 'Orders',
      'ROAS': 'ROAS',
      'Цена заказа': 'Cost per order',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Бюджет должен быть больше нуля': 'The budget must be greater than zero',
      'Цена клика должна быть больше нуля': 'The cost per click must be greater than zero',
      'Конверсия должна быть больше нуля и не больше ста процентов': 'The conversion rate must be above zero and at most one hundred per cent',
      'Средний чек должен быть больше нуля': 'The average order value must be greater than zero',
    },
  },
  uk: {
    fields: {
      budget: 'Рекламний бюджет, ₽',
      cpc: 'Ціна кліка, ₽',
      crPct: 'Конверсія, %',
      aov: 'Середній чек, ₽',
    },
    results: {
      'Ожидаемая выручка': 'Очікувана виручка',
      'Кликов': 'Кліків',
      'Заказов': 'Замовлень',
      'ROAS': 'ROAS',
      'Цена заказа': 'Ціна замовлення',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Бюджет должен быть больше нуля': 'Бюджет має бути більшим за нуль',
      'Цена клика должна быть больше нуля': 'Ціна кліка має бути більшою за нуль',
      'Конверсия должна быть больше нуля и не больше ста процентов': 'Конверсія має бути більшою за нуль і не більшою за сто відсотків',
      'Средний чек должен быть больше нуля': 'Середній чек має бути більшим за нуль',
    },
  },
  es: {
    fields: {
      "budget": "Presupuesto publicitario, €",
      "cpc": "Coste por clic, €",
      "crPct": "Tasa de conversión, %",
      "aov": "Ticket medio, €",
    },
    options: {},
    results: {
      "Ожидаемая выручка": "Ingresos previstos",
      "Кликов": "Clics",
      "Заказов": "Pedidos",
      "ROAS": "ROAS",
      "Цена заказа": "Coste por pedido",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Бюджет должен быть больше нуля": "El presupuesto debe ser mayor que cero",
      "Цена клика должна быть больше нуля": "El coste por clic debe ser mayor que cero",
      "Конверсия должна быть больше нуля и не больше ста процентов": "La tasa de conversión debe ser mayor que cero y como mucho cien por ciento",
      "Средний чек должен быть больше нуля": "El ticket medio debe ser mayor que cero",
    },
  },
};

const contractOverrides: Record<TranslatedLocale, CalculatorLocaleBundle> = {
  "en": {
    "fields": {},
    "values": {
      "Конверсия должна быть от нуля до ста процентов": "Conversion must be between zero and one hundred percent"
    }
  },
  "uk": {
    "fields": {},
    "values": {
      "Конверсия должна быть от нуля до ста процентов": "Конверсія має бути від нуля до ста відсотків"
    }
  },
  "de": {
    "fields": {},
    "values": {
      "Конверсия должна быть от нуля до ста процентов": "Die Konversion muss zwischen null und hundert Prozent liegen"
    }
  },
  "es": {
    "fields": {},
    "values": {
      "Конверсия должна быть от нуля до ста процентов": "La conversión debe estar entre cero y cien por ciento"
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
