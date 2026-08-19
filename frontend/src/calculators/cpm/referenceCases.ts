import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из CPM = бюджет ÷ показы × 1000:
//   45 000 / 1 200 000 × 1000 = 37,5 · 900 / 15 000 × 1000 = 60
//   обратно: 30 000 / 250 × 1000 = 120 000 показов
export const cpmReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'бюджет 45 000 на 1 200 000 показов — CPM 37,50',
    inputs: { mode: 'cpm', cost: 45000, impressions: 1200000 },
    expectPrimary: '37,50 ₽',
  },
  {
    name: 'бюджет 900 на 15 000 показов — CPM 60',
    inputs: { mode: 'cpm', cost: 900, impressions: 15000 },
    expectPrimary: '60,00 ₽',
  },
  {
    name: 'обратный режим: сколько показов даст бюджет 30 000 при CPM 250',
    inputs: { mode: 'impressions', cost: 30000, cpm: 250 },
    expectPrimary: '120 000',
  },
  {
    name: 'режим бюджета: 1 000 000 показов при CPM 37,5',
    inputs: { mode: 'cost', impressions: 1000000, cpm: 37.5 },
    expectPrimary: '37 500,00 ₽',
  },
  {
    name: 'граница: нулевой бюджет даёт нулевой CPM',
    inputs: { mode: 'cpm', cost: 0, impressions: 15000 },
    expectPrimary: '0,00 ₽',
  },
  {
    name: 'недопустимо: ноль показов',
    inputs: { mode: 'cpm', cost: 900, impressions: 0 },
    expectPrimary: '—',
  },
];
