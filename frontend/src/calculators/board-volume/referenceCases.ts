import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную. Ловушка единиц: длина в метрах, сечение в
// миллиметрах, объём в кубометрах, поэтому миллиметры делятся на 1000 явно.
//   6 × 0,150 × 0,025 = 0,0225 м³; × 50 = 1,125 м³; в кубометре 1/0,0225 = 44,44
//   4 × 0,100 × 0,040 = 0,016 м³; × 20 = 0,32 м³; 1/0,016 = 62,50
//   1 × 0,010 × 0,010 = 0,0001 м³ — величина мала, но это не нуль.
export const boardVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '6 м × 150 × 25 мм, 50 штук',
    inputs: { length: 6, width: 150, thickness: 25, count: 50, pricePerM3: 0 },
    expectPrimary: '1,125 м³',
    expectSecondary: [{ label: 'Объём одной доски', value: '0,0225 м³' }, { label: 'Досок в кубометре', value: '44,44 шт' }],
  },
  {
    name: '4 м × 100 × 40 мм, 20 штук',
    inputs: { length: 4, width: 100, thickness: 40, count: 20, pricePerM3: 0 },
    expectPrimary: '0,32 м³',
    expectSecondary: [{ label: 'Объём одной доски', value: '0,016 м³' }, { label: 'Досок в кубометре', value: '62,50 шт' }],
  },
  {
    name: 'одна очень тонкая доска',
    inputs: { length: 1, width: 10, thickness: 10, count: 1, pricePerM3: 0 },
    expectPrimary: '0,0001 м³',
    expectSecondary: [{ label: 'Объём одной доски', value: '0,0001 м³' }],
  },
  {
    name: 'нулевая ширина отклоняется',
    inputs: { length: 6, width: 0, thickness: 25, count: 50, pricePerM3: 0 },
    expectPrimary: '—',
  },
];
