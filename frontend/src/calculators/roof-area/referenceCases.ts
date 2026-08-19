import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную. Угол переводится в радианы явно.
//   двускатная: S = 2 × (L × W/2) / cos a = 2 × (10 × 4) / cos 30° = 92,376 м²
//   односкатная: S = L × W / cos a = 24 / cos 15° = 24,847 м²
//   нулевой уклон законен и даёт площадь основания 80 м²
//   90° отклоняется: косинус обращается в нуль, деления не существует.
export const roofAreaReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'двускатная 10×8 при 30°',
    inputs: { mode: 'gable', length: 10, width: 8, slopeMode: 'degrees', angle: 30 },
    expectPrimary: '92,376 м²',
    expectSecondary: [{ label: 'Площадь одного ската', value: '46,188 м²' }],
  },
  {
    name: 'односкатная 6×4 при 15°',
    inputs: { mode: 'shed', length: 6, width: 4, slopeMode: 'degrees', angle: 15 },
    expectPrimary: '24,847 м²',
  },
  {
    name: 'нулевой уклон даёт площадь основания',
    inputs: { mode: 'gable', length: 10, width: 8, slopeMode: 'degrees', angle: 0 },
    expectPrimary: '80 м²',
  },
  {
    name: 'угол 90° отклоняется',
    inputs: { mode: 'gable', length: 10, width: 8, slopeMode: 'degrees', angle: 90 },
    expectPrimary: '—',
  },
];
