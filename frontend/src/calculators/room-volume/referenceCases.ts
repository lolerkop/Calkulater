import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   5 × 4 × 2,7 = 54,00 м³; пол 20,00 м²; периметр 2×(5+4) = 18,00 м;
//   стены 18 × 2,7 = 48,60 м²
//   20 м² × 2,7 = 54,00 м³ — тот же объём другим путём
//   3 × 3 × 2,5 = 22,50 м³; пол 9,00 м²; периметр 12,00 м; стены 30,00 м²
export const roomVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'по размерам: 5 × 4 × 2,7 даёт 54,00 м³',
    inputs: { mode: 'dimensions', length: 5, width: 4, height: 2.7 },
    expectPrimary: '54,00 м³',
    expectSecondary: [
      { label: 'Площадь пола', value: '20,00 м²' },
      { label: 'Периметр', value: '18,00 м' },
      { label: 'Площадь стен', value: '48,60 м²' },
    ],
  },
  {
    name: 'по площади: те же 20 м² при 2,7 м дают тот же объём',
    inputs: { mode: 'area', area: 20, height: 2.7 },
    expectPrimary: '54,00 м³',
    expectSecondary: [{ label: 'Площадь пола', value: '20,00 м²' }],
  },
  {
    name: 'малая комната 3 × 3 × 2,5 даёт 22,50 м³',
    inputs: { mode: 'dimensions', length: 3, width: 3, height: 2.5 },
    expectPrimary: '22,50 м³',
    expectSecondary: [
      { label: 'Периметр', value: '12,00 м' },
      { label: 'Площадь стен', value: '30,00 м²' },
    ],
  },
  {
    name: 'граница: режим площади не показывает стен, их не из чего считать',
    inputs: { mode: 'area', area: 15, height: 3 },
    expectPrimary: '45,00 м³',
    expectSecondary: [{ label: 'Высота', value: '3,00 м' }],
  },
  {
    name: 'домен: нулевая высота не даёт объёма',
    inputs: { mode: 'dimensions', length: 5, width: 4, height: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Высота должна быть больше нуля' }],
  },
  {
    name: 'домен: нулевая ширина не даёт площади пола',
    inputs: { mode: 'dimensions', length: 5, width: 0, height: 2.7 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Длина и ширина должны быть больше нуля' }],
  },
];
