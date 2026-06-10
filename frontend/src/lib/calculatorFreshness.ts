import type { CalculatorDef } from './types';
import { lastUpdated as currencyRatesUpdatedAt } from '../data/currencies';

export type CalculatorFreshness = {
  label: string;
  value: string;
  note: string;
};

const taxCalculatorIds = new Set(['income-tax-calculator', 'vat-calculator']);

export function calculatorFreshness(calculator: CalculatorDef): CalculatorFreshness {
  if (calculator.category === 'currency') {
    return {
      label: 'Курсы',
      value: currencyRatesUpdatedAt,
      note: 'Официальные справочные курсы обновляются при сборке сайта; коммерческий курс банка может отличаться.',
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
