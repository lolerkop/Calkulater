import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную из формулы простых процентов:
//   100 000 × 8 × 3 / 100 = 24 000; итог 124 000; за год 8 000
//   обратно: 24 000 × 100 / (100 000 × 3) = 8 %
//   50 000 × 12 × 0,5 / 100 = 3 000
export const simpleInterestReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'начисление: 100 000 под 8 % на 3 года дают 24 000',
    inputs: { mode: 'interest', principal: 100000, rate: 8, years: 3 },
    expectPrimary: '24 000 ₽',
    expectSecondary: [{ label: 'Итоговая сумма', value: '124 000 ₽' }],
  },
  {
    name: 'проценты за год — треть от трёхлетних',
    inputs: { mode: 'interest', principal: 100000, rate: 8, years: 3 },
    expectPrimary: '24 000 ₽',
    expectSecondary: [{ label: 'Проценты за год', value: '8 000 ₽' }],
  },
  {
    name: 'обратный режим: 24 000 за 3 года дают ставку 8 %',
    inputs: { mode: 'rate', principal: 100000, interest: 24000, years: 3 },
    expectPrimary: '8,00 %',
    expectSecondary: [{ label: 'Итоговая сумма', value: '124 000 ₽' }],
  },
  {
    name: 'дробный срок: полгода под 12 % на 50 000 дают 3 000',
    inputs: { mode: 'interest', principal: 50000, rate: 12, years: 0.5 },
    expectPrimary: '3 000 ₽',
  },
  {
    name: 'граница: нулевая ставка не начисляет процентов',
    inputs: { mode: 'interest', principal: 100000, rate: 0, years: 3 },
    expectPrimary: '0 ₽',
  },
  {
    name: 'недопустимо: нулевой срок',
    inputs: { mode: 'interest', principal: 100000, rate: 8, years: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевая сумма',
    inputs: { mode: 'rate', principal: 0, interest: 24000, years: 3 },
    expectPrimary: '—',
  },
];
