import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { compressionRatioCopyEn } from './copy.en';
import { compressionRatioCopyUk } from './copy.uk';
import { compressionRatioCopyDe } from './copy.de';
import { compressionRatioCopyEs } from './copy.es';
import { compressionRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "compression-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: compressionRatioCopyEn, uk: compressionRatioCopyUk, de: compressionRatioCopyDe, es: compressionRatioCopyEs },
  referenceCases: compressionRatioReferenceCases,
  publishedExample: { inputs: { displacement: 454.17, chamber: 45 }, expected: ["11,093"] },
  presentation: {
    id: "compression-ratio",
    name: "Калькулятор степени сжатия двигателя",
    slug: "stepen-szhatiya-dvigatelya",
    fullPath: "/automotive/stepen-szhatiya-dvigatelya/",
    category: "automotive",
    icon: "car",
    popularity: 36,
    isNew: false,
    shortDescription: "Степень сжатия по рабочему объёму цилиндра и камере сгорания.",
    seoTitle: "Калькулятор степени сжатия двигателя",
    seoDescription: "Рассчитайте степень сжатия по рабочему объёму одного цилиндра и объёму камеры сгорания.",
    h1: "Калькулятор степени сжатия двигателя",
    keywords: ["степень сжатия", "камера сгорания", "рабочий объём цилиндра", "форсирование двигателя"],
    fields: [
      { name: 'displacement', label: 'Рабочий объём цилиндра, см³', type: 'number', unit: "см³", defaultValue: 454.17, min: 0, step: 10 },
      { name: 'chamber', label: 'Объём камеры сгорания, см³', type: 'number', unit: "см³", defaultValue: 45, min: 0, step: 1 },
    ],
    resultLabels: {
      "cr": "Степень сжатия",
      "full": "Полный объём цилиндра",
      "chamber": "Объём камеры сгорания",
      "displacement": "Рабочий объём цилиндра",
      "ratioText": "Записью",
    },
    relatedCalculatorIds: ["engine-displacement", "fuel-consumption", "power-to-weight"],
    ...automotiveWave10ContractContent.ru,
  },
};
