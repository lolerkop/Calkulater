import { halfLifeContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { halfLifeCopyEn } from './copy.en';
import { halfLifeCopyUk } from './copy.uk';
import { halfLifeCopyDe } from './copy.de';
import { halfLifeCopyEs } from './copy.es';
import { halfLifeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "half-life",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: halfLifeCopyEn, uk: halfLifeCopyUk, de: halfLifeCopyDe, es: halfLifeCopyEs },
  referenceCases: halfLifeReferenceCases,
  publishedExample: { inputs: { mode: "remaining", n0: 100, half: 5730, t: 11460 }, expected: ["25 г"] },
  presentation: {
    id: "half-life",
    name: "Калькулятор периода полураспада",
    slug: "period-poluraspada",
    fullPath: "/physics/period-poluraspada/",
    category: "physics",
    icon: "atom",
    popularity: 29,
    isNew: false,
    shortDescription: "Остаток вещества по периоду полураспада или время до заданного остатка.",

    seoTitle: "Калькулятор периода полураспада — остаток и время",
    seoDescription: "Рассчитайте, сколько вещества останется через заданное время, или сколько ждать до нужного остатка по периоду полураспада.",
    h1: "Калькулятор периода полураспада",
    keywords: ["период полураспада", "радиоактивный распад", "остаток вещества", "среднее время жизни"],
    fields: [
      {
        name: 'mode', label: 'Что ищем', type: 'select', defaultValue: 'remaining',
        options: [
          { value: 'remaining', label: 'остаток через время' },
          { value: 'time', label: 'время до остатка' },
        ],
      },
      { name: 'n0', label: 'Исходное количество', unit: 'г', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'half', label: 'Период полураспада', unit: 'лет', type: 'number', defaultValue: 5730, min: 0, step: 1 },
      { name: 't', label: 'Прошло времени', unit: 'лет', type: 'number', defaultValue: 11460, min: 0, step: 1, showIf: { field: 'mode', equals: 'remaining' } },
      { name: 'left', label: 'Нужный остаток', unit: 'г', type: 'number', defaultValue: 50, min: 0, step: 1, showIf: { field: 'mode', equals: 'time' } },
    ],
    resultLabels: {
      "remaining": "Остаток", "time": "Время", "decayed": "Распалось",
      "fraction": "Осталось доли", "periods": "Периодов полураспада прошло",
      "mean": "Среднее время жизни",
    },




    ...halfLifeContractContent.ru,
    relatedCalculatorIds: ["convert-radiation", "photon-energy", "de-broglie"],
  },
};
