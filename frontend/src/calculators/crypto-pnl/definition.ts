import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { cryptoPnlCopyEn } from './copy.en';
import { cryptoPnlCopyUk } from './copy.uk';
import { cryptoPnlCopyDe } from './copy.de';
import { cryptoPnlCopyEs } from './copy.es';
import { cryptoPnlReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "crypto-pnl",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...cryptoPnlCopyEn, ...contractContent.en }, uk: { ...cryptoPnlCopyUk, ...contractContent.uk }, de: { ...cryptoPnlCopyDe, ...contractContent.de }, es: { ...cryptoPnlCopyEs, ...contractContent.es } },
  referenceCases: cryptoPnlReferenceCases,
  publishedExample: {
    inputs: { direction: 'long', entry: 30000, exit: 34500, qty: 0.5, feePct: 0.1, leverage: 1 },
    expected: ["2 217,75 ₽"],
  },
  presentation: {
    id: "crypto-pnl",
    name: "Калькулятор прибыли криптовалюты",
    slug: "crypto-pnl",
    fullPath: "/finance/crypto-pnl/",
    category: "finance",
    icon: "trending-up",
    popularity: 43,
    isNew: false,
    shortDescription: "Результат сделки в лонг и в шорт с учётом комиссий на входе и выходе и плеча.",
    seoTitle: "Калькулятор прибыли криптовалюты — лонг и шорт",
    seoDescription: "Рассчитайте результат сделки по криптовалюте в лонг или шорт с учётом комиссий на входе и выходе, плеча и изменения цены.",
    h1: "Калькулятор прибыли криптовалюты",
    keywords: ["прибыль криптовалюты", "калькулятор сделки", "лонг и шорт", "комиссия биржи"],
    fields: [
      {
        name: 'direction', label: 'Направление сделки', type: 'select', defaultValue: 'long',
        options: [
          { value: 'long', label: 'лонг — заработок на росте' },
          { value: 'short', label: 'шорт — заработок на падении' },
        ],
      },
      { name: 'entry', label: 'Цена входа', unit: '₽', type: 'number', defaultValue: 30000, min: 0, step: 1 },
      { name: 'exit', label: 'Цена выхода', unit: '₽', type: 'number', defaultValue: 34500, min: 0, step: 1 },
      { name: 'qty', label: 'Объём, монет', type: 'number', defaultValue: 0.5, min: 0, step: 0.01 },
      { name: 'feePct', label: 'Комиссия одной стороны, %', type: 'number', defaultValue: 0.1, min: 0, max: 100, step: 0.001 },
      { name: 'leverage', label: 'Плечо', type: 'number', defaultValue: 1, min: 0, step: 1 },
    ],
    resultLabels: {
      "net": "Чистый результат",
      "gross": "Результат до комиссий",
      "fees": "Комиссии",
      "invested": "Вложено",
      "roi": "Доходность позиции",
      "change": "Изменение цены",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["roi", "market-cap", "percent-calculator"],
  },
};
