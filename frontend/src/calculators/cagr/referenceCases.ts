import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную через натуральный логарифм, а не прогоном функции:
//   2^(1/5)   = e^(ln2 / 5)   = e^0,13862944 = 1,14869835 → 14,87 %
//   0,5^(1/4) = e^(ln0,5 / 4) = e^−0,17328680 = 0,84089642 → −15,91 %
//   1,5^(1/1) = 1,5 → 50,00 %
//   1^(1/3)   = 1 → 0,00 %
export const cagrReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'удвоение за 5 лет даёт 14,87 % в год',
    inputs: { begin: 100000, end: 200000, years: 5 },
    expectPrimary: '14,87 %',
    expectSecondary: [
      { label: 'Общий рост за срок', value: '100,00 %' },
      { label: 'Множитель', value: '2,000×' },
    ],
  },
  {
    name: 'один период: рост в полтора раза равен 50,00 %',
    inputs: { begin: 100, end: 150, years: 1 },
    expectPrimary: '50,00 %',
    expectSecondary: [{ label: 'Общий рост за срок', value: '50,00 %' }],
  },
  {
    name: 'падение вдвое за 4 года даёт −15,91 % в год',
    inputs: { begin: 200000, end: 100000, years: 4 },
    expectPrimary: '-15,91 %',
    expectSecondary: [{ label: 'Общий рост за срок', value: '-50,00 %' }],
  },
  {
    name: 'граница: без изменения стоимости рост нулевой',
    inputs: { begin: 100000, end: 100000, years: 3 },
    expectPrimary: '0,00 %',
    expectSecondary: [{ label: 'Множитель', value: '1,000×' }],
  },
  {
    name: 'домен: нулевая база не даёт отношения',
    inputs: { begin: 0, end: 100000, years: 5 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Начальная стоимость должна быть больше нуля' }],
  },
  {
    name: 'домен: нулевой срок обращает показатель степени в бесконечность',
    inputs: { begin: 100000, end: 200000, years: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Срок должен быть больше нуля' }],
  },
];
