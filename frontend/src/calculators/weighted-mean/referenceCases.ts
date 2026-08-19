import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   (90·3 + 75·4 + 60·2) / (3+4+2) = 690 / 9 = 76,6667
//   (4,5·2 + 3·1) / 3 = 12 / 3 = 4
//   равные веса дают обычное среднее: (10+20+30)/3 = 20
// Нулевая сумма весов и строка без пары отклоняются: делить не на что,
// а достроить недостающий вес значило бы придумать данные.
export const weightedMeanReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'три пары: 690 / 9',
    inputs: { pairs: '90 3\n75 4\n60 2' },
    expectPrimary: '76,6667',
    expectSecondary: [{ label: 'Сумма весов', value: '9' }, { label: 'Сумма произведений', value: '690' }],
  },
  {
    name: 'две пары, десятичная запятая внутри числа',
    inputs: { pairs: '4,5 2\n3 1' },
    expectPrimary: '4',
    expectSecondary: [{ label: 'Сумма весов', value: '3' }],
  },
  {
    name: 'равные веса дают обычное среднее',
    inputs: { pairs: '10 1\n20 1\n30 1' },
    expectPrimary: '20',
    expectSecondary: [{ label: 'Сумма весов', value: '3' }],
  },
  {
    name: 'нулевая сумма весов отклоняется',
    inputs: { pairs: '10 0\n20 0' },
    expectPrimary: '—',
  },
  {
    name: 'строка без второго числа отклоняется',
    inputs: { pairs: '10 2\n20' },
    expectPrimary: '—',
  },
];
