import type { CalculatorDef } from './types';
import { currencies, sourcesForCurrencies, type CurrencyCode } from '../data/currencies';

export type CalculatorFreshness = {
  label: string;
  value: string;
  note: string;
};

const taxCalculatorIds = new Set(['income-tax-calculator', 'vat-calculator']);
const fixedCurrencyPairs: Record<string, readonly CurrencyCode[]> = {
  'usd-to-eur': ['USD', 'EUR'],
  'usd-to-mdl': ['USD', 'MDL'],
  'eur-to-mdl': ['EUR', 'MDL'],
};

export function calculatorFreshness(calculator: CalculatorDef): CalculatorFreshness {
  if (calculator.id === 'currency-exchange-fee') {
    return {
      label: 'Методика',
      value: 'ручные данные',
      note: 'Формула использует введённые вами курс и комиссию; справочные курсы банков и дата их загрузки к этому расчёту не относятся.',
    };
  }
  if (calculator.category === 'currency') {
    const sources = sourcesForCurrencies(fixedCurrencyPairs[calculator.id] ?? currencies.map((currency) => currency.code));
    return {
      label: 'Курсы',
      value: sources.length === 1 ? sources[0].date
        : sources.map((source) => `${source.id.toUpperCase()} ${source.date}`).join('; '),
      note: 'Сохранённый набор справочных курсов: даты и источники отдельных валют указаны ниже. Коммерческий курс банка может отличаться.',
    };
  }

  if (taxCalculatorIds.has(calculator.id)) {
    return {
      label: 'Актуальность',
      value: 'проверяйте нормы',
      note: 'Налоговые правила, ставки и льготы могут меняться; сверяйте расчёт с официальными источниками.',
    };
  }

  if (calculator.category === 'finance') {
    return {
      label: 'Актуальность',
      value: 'справочно',
      note: 'Формулы подходят для предварительной оценки; условия банков, комиссий и договоров проверяйте отдельно.',
    };
  }

  if (calculator.category === 'building') {
    return {
      label: 'Точность',
      value: 'по замерам',
      note: 'Итог зависит от фактических размеров, материала, партии и запаса на подрезку.',
    };
  }

  if (calculator.category === 'sport') {
    return {
      label: 'Оценка',
      value: 'ориентир',
      note: 'Результат помогает прикинуть показатель, но не заменяет медицинскую или тренерскую оценку.',
    };
  }

  return {
    label: 'Методика',
    value: 'описана ниже',
    note: 'Проверьте даты и исходные данные перед применением результата в документах или планировании.',
  };
}
