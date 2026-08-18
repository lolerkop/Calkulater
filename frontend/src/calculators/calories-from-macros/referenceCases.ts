import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную по коэффициентам Этуотера:
//   4·100 + 9·50 + 4·200 = 400 + 450 + 800 = 1650
//   доли: 400/1650 = 24,2424 % · 450/1650 = 27,2727 % · 800/1650 = 48,4848 %
//   4·150 + 9·70 + 4·250 = 600 + 630 + 1000 = 2230
//   4·100 = 400, доля белка 100 %
export const caloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный рацион 100/50/200 даёт 1 650 ккал',
    inputs: { protein: 100, fat: 50, carbs: 200 },
    expectPrimary: '1 650 ккал',
    expectSecondary: [
      { label: 'Из белков', value: '400 ккал · 24,24 %' },
      { label: 'Из жиров', value: '450 ккал · 27,27 %' },
      { label: 'Из углеводов', value: '800 ккал · 48,48 %' },
    ],
  },
  {
    name: 'крупный рацион 150/70/250 даёт 2 230 ккал',
    inputs: { protein: 150, fat: 70, carbs: 250 },
    expectPrimary: '2 230 ккал',
  },
  {
    name: 'граница: только белок даёт 400 ккал и долю 100 %',
    inputs: { protein: 100, fat: 0, carbs: 0 },
    expectPrimary: '400 ккал',
    expectSecondary: [{ label: 'Из белков', value: '400 ккал · 100,00 %' }],
  },
  {
    name: 'дробные граммы: 12,5 белка = 50 ккал',
    inputs: { protein: 12.5, fat: 0, carbs: 0 },
    expectPrimary: '50 ккал',
  },
  {
    name: 'домен: пустой рацион не имеет долей',
    inputs: { protein: 0, fat: 0, carbs: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Введите хотя бы один макронутриент' }],
  },
  {
    name: 'домен: отрицательные граммы считаются нулём, а не вычитаются',
    inputs: { protein: -50, fat: 10, carbs: 0 },
    expectPrimary: '90 ккал',
  },
];
