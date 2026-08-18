import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из U = I·R и P = U·I вручную:
//   12 / 2 = 6 Ом, P = 12·2 = 24 Вт
//   230 / 100 = 2,3 А, P = 230·2,3 = 529 Вт
//   0,5 · 470 = 235 В, P = 235·0,5 = 117,5 Вт
export const ohmsLawReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'зная напряжение и ток: 12 / 2 = 6 Ом',
    inputs: { mode: 'vi', voltage: 12, current: 2 },
    expectPrimary: '6,00 Ом',
    expectSecondary: [{ label: 'Мощность', value: '24,00 Вт' }],
  },
  {
    name: 'зная напряжение и сопротивление: 230 / 100 = 2,3 А',
    inputs: { mode: 'vr', voltage: 230, resistance: 100 },
    expectPrimary: '2,300 А',
    expectSecondary: [{ label: 'Мощность', value: '529,00 Вт' }],
  },
  {
    name: 'зная ток и сопротивление: 0,5 · 470 = 235 В',
    inputs: { mode: 'ir', current: 0.5, resistance: 470 },
    expectPrimary: '235,00 В',
    expectSecondary: [{ label: 'Мощность', value: '117,50 Вт' }],
  },
  {
    name: 'граница: нулевое напряжение обесточивает схему',
    inputs: { mode: 'vr', voltage: 0, resistance: 100 },
    expectPrimary: '0,000 А',
    expectSecondary: [{ label: 'Мощность', value: '0,00 Вт' }],
  },
  {
    name: 'недопустимо: нулевой ток не задаёт сопротивление',
    inputs: { mode: 'vi', voltage: 12, current: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевое сопротивление не задаёт ток',
    inputs: { mode: 'vr', voltage: 230, resistance: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: отрицательные значения',
    inputs: { mode: 'ir', current: -1, resistance: 470 },
    expectPrimary: '—',
  },
];
