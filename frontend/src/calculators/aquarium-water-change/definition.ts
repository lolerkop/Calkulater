import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { aquariumWaterChangeCopyEn } from './copy.en';
import { aquariumWaterChangeCopyUk } from './copy.uk';
import { aquariumWaterChangeCopyDe } from './copy.de';
import { aquariumWaterChangeCopyEs } from './copy.es';
import { aquariumWaterChangeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'aquarium-water-change',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: aquariumWaterChangeCopyEn, uk: aquariumWaterChangeCopyUk, de: aquariumWaterChangeCopyDe, es: aquariumWaterChangeCopyEs },
  referenceCases: aquariumWaterChangeReferenceCases,
  publishedExample: {
    inputs: { volume: 240, changePct: 25, decorPct: 12 },
    expected: ['52,8 л'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'aquarium-water-change',
    name: 'Калькулятор подмены воды в аквариуме',
    slug: 'aquarium-water-change',
    fullPath: '/household/aquarium-water-change/',
    category: 'household',
    icon: 'droplets',
    popularity: 21,
    isNew: false,
    shortDescription: 'Объём воды для подмены с поправкой на грунт и декор.',
    seoTitle: 'Калькулятор подмены воды в аквариуме: объём в литрах',
    seoDescription:
      'Рассчитайте объём воды для подмены в аквариуме по паспортному объёму, доле подмены и доле, которую занимают грунт и декор.',
    h1: 'Калькулятор подмены воды в аквариуме',
    keywords: ['подмена воды аквариум', 'объём аквариума', 'чистый объём воды', 'уход за аквариумом'],
    fields: [
      { name: 'volume', label: 'Объём аквариума, л', type: 'number', defaultValue: 240, min: 0, step: 10 },
      { name: 'changePct', label: 'Доля подмены воды, %', type: 'number', defaultValue: 25, min: 0, max: 100, step: 5 },
      { name: 'decorPct', label: 'Доля грунта и декора, %', type: 'number', defaultValue: 12, min: 0, max: 99, step: 1 },
    ],
    resultLabels: {
      change: 'Объём подмены',
      net: 'Чистый объём воды',
      remain: 'Останется',
      volume: 'Объём аквариума',
    },
    relatedCalculatorIds: ['pool-fill-time', 'room-volume', 'solution-concentration'],
  },
};
