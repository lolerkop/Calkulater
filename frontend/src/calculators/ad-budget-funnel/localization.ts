import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
};
