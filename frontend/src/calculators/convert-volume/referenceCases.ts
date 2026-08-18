import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений единиц, а не получены прогоном
// движка:
//   1 л = 1000 мл · 1 м³ = 1000 л · 1 галлон США = 3,785411784 л (точно, 231 дюйм³)
//   1 галлон брит. = 4,54609 л (точно) · 1 фут³ = 28,316846592 л (0,3048³)
export const volumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'литр в миллилитры: 1000',
    inputs: { value: 1, from: 'l', to: 'ml' },
    expectPrimary: '1 000,00 мл',
  },
  {
    name: 'кубический метр в литры: 1000',
    inputs: { value: 1, from: 'm3', to: 'l' },
    expectPrimary: '1 000,00 л',
  },
  {
    name: 'галлон США в литры: 3,785411784',
    inputs: { value: 1, from: 'galUS', to: 'l' },
    expectPrimary: '3,7854 л',
  },
  {
    name: 'британский галлон в литры: 4,54609',
    inputs: { value: 1, from: 'galUK', to: 'l' },
    expectPrimary: '4,5461 л',
  },
  {
    name: 'кубический фут в литры: 28,316846592',
    inputs: { value: 1, from: 'ft3', to: 'l' },
    expectPrimary: '28,3168 л',
  },
  {
    name: 'кварта США равна двум пинтам',
    inputs: { value: 1, from: 'qtUS', to: 'ptUS' },
    expectPrimary: '2,0000 пинта США',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'l', to: 'galUK' },
    expectPrimary: '0 гал. брит.',
  },
];
