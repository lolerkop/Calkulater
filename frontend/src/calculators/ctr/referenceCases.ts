import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из CTR = клики ÷ показы × 100:
//   1250 / 84000 = 0,01488095… → 1,488095 % · 37 / 1000 = 3,7 %
export const ctrReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '1250 кликов на 84 000 показов — 1,49 %',
    inputs: { clicks: 1250, impressions: 84000 },
    expectPrimary: '1,49%',
  },
  {
    name: '37 кликов на 1000 показов — ровно 3,7 %',
    inputs: { clicks: 37, impressions: 1000 },
    expectPrimary: '3,70%',
  },
  {
    name: 'с расходом появляется цена клика',
    inputs: { clicks: 1250, impressions: 84000, cost: 25000 },
    expectPrimary: '1,49%',
    expectSecondary: [{ label: 'Цена клика', value: '20,00 ₽' }],
  },
  {
    name: 'граница: ноль кликов даёт ноль процентов',
    inputs: { clicks: 0, impressions: 5000 },
    expectPrimary: '0,00%',
  },
  {
    name: 'граница: очень маленький CTR показывается четырьмя знаками',
    inputs: { clicks: 1, impressions: 1000000 },
    expectPrimary: '0,0001%',
  },
  {
    name: 'кликов больше показов — расчёт есть, но с предупреждением',
    inputs: { clicks: 120, impressions: 100 },
    expectPrimary: '120,00%',
    expectSecondary: [{
      label: 'Проверьте данные',
      value: 'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды',
    }],
  },
  {
    name: 'недопустимо: ноль показов',
    inputs: { clicks: 10, impressions: 0 },
    expectPrimary: '—',
  },
];
