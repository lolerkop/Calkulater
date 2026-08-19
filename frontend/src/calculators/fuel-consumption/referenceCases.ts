import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из л/100 км = литры ÷ километры × 100:
//   42 / 560 × 100 = 7,5 · 560 / 42 = 13,333…
//   55,4 / 623 × 100 = 8,89245… · 800 / 100 × 7,5 = 60 литров
export const fuelConsumptionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '42 литра на 560 км — это 7,5 л/100 км',
    inputs: { mode: 'measure', litres: 42, distance: 560 },
    expectPrimary: '7,50 л/100 км',
    expectSecondary: [{ label: 'Километров на литр', value: '13,33 км/л' }],
  },
  {
    name: '55,4 литра на 623 км — это 8,89 л/100 км',
    inputs: { mode: 'measure', litres: 55.4, distance: 623 },
    expectPrimary: '8,89 л/100 км',
  },
  {
    name: 'режим километров на литр: 42 литра на 560 км',
    inputs: { mode: 'kml', litres: 42, distance: 560 },
    expectPrimary: '13,33 км/л',
  },
  {
    name: 'сколько топлива нужно: 800 км при 7,5 л/100 км',
    inputs: { mode: 'need', distance: 800, consumption: 7.5 },
    expectPrimary: '60,00 л',
  },
  {
    name: 'граница: 10 литров на 100 км — ровно 10 в обе стороны',
    inputs: { mode: 'measure', litres: 10, distance: 100 },
    expectPrimary: '10,00 л/100 км',
    expectSecondary: [{ label: 'Километров на литр', value: '10,00 км/л' }],
  },
  {
    name: 'недопустимо: нулевой пробег',
    inputs: { mode: 'measure', litres: 42, distance: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевой расход в режиме потребности',
    inputs: { mode: 'need', distance: 800, consumption: 0 },
    expectPrimary: '—',
  },
];
