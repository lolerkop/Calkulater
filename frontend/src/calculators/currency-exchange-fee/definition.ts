import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { exchangeFeeContractContent } from './contractContent';
import { currencyExchangeFeeCopyEn } from './copy.en';
import { currencyExchangeFeeCopyUk } from './copy.uk';
import { currencyExchangeFeeCopyDe } from './copy.de';
import { currencyExchangeFeeCopyEs } from './copy.es';
import { currencyExchangeFeeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "currency-exchange-fee",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: currencyExchangeFeeCopyEn, uk: currencyExchangeFeeCopyUk, de: currencyExchangeFeeCopyDe, es: currencyExchangeFeeCopyEs },
  referenceCases: currencyExchangeFeeReferenceCases,
  publishedExample: {
    inputs: { direction: 'sell', amount: 1000, rate: 2, feePct: 5, feeFixed: 20, spreadPct: 10 },
    expected: ["1 690,00 ₽"],
  },
  presentation: {
    id: "currency-exchange-fee",
    name: "Калькулятор стоимости обмена валюты",
    slug: "currency-exchange-fee",
    fullPath: "/currency/currency-exchange-fee/",
    category: "currency",
    icon: "wallet",
    popularity: 37,
    isNew: false,
    shortDescription: "Сколько на самом деле стоит обмен: спред, процент и фиксированный сбор вместе.",
    seoTitle: "Калькулятор стоимости обмена валюты со спредом",
    seoDescription: "Рассчитайте, сколько останется после обмена валюты с учётом спреда, процентной комиссии и фиксированного сбора при заданном курсе.",
    h1: "Калькулятор стоимости обмена валюты",
    keywords: ["стоимость обмена валюты", "спред обменника", "комиссия за обмен", "сколько теряется на обмене"],
    fields: [
      {
        name: 'direction', label: 'Что делаем', type: 'select', defaultValue: 'sell',
        options: [
          { value: 'sell', label: 'продаём валюту за рубли' },
          { value: 'buy', label: 'покупаем валюту за рубли' },
        ],
      },
      { name: 'amount', label: 'Сумма обмена', type: 'number', defaultValue: 1000, min: 0, step: 100 },
      { name: 'rate', label: 'Курс обмена', type: 'number', defaultValue: 92.5, min: 0, step: 0.01 },
      { name: 'spreadPct', label: 'Спред к курсу, %', type: 'number', defaultValue: 0.5, min: 0, max: 99, step: 0.1 },
      { name: 'feePct', label: 'Комиссия, %', type: 'number', defaultValue: 1.5, min: 0, max: 99, step: 0.1 },
      { name: 'feeFixed', label: 'Фиксированный сбор', type: 'number', defaultValue: 0, min: 0, step: 10, optional: true },
    ],
    resultLabels: {
      "received": "К получению",
      "effective": "Курс с учётом спреда",
      "ideal": "По номинальному курсу",
      "fee": "Комиссия",
      "spread": "Потери на спреде",
      "cost": "Полная стоимость обмена",
      "costPct": "Доля потерь",
    },
    relatedCalculatorIds: ["currency-converter", "commission", "percent-calculator"],
    ...exchangeFeeContractContent.ru,
  },
};
