import type { CalcFunction } from '../types';
import { fmtMoney, fmtPct } from '../format';
import { number, optionalNumber } from '../platform/scalarInputDisplay';
import { choice } from '../platform/financeWave11Input';

// Калькулятор НДФЛ (Россия).
// Поддерживает прогрессивную шкалу 2025 года: 13% до 2,4 млн ₽ / год,
// 15% от 2,4 до 5 млн, 18% от 5 до 20 млн, 20% от 20 до 50 млн, 22% свыше.
// Для упрощённого режима пользователь может выбрать «фиксированная ставка»
// и вручную задать 13% / 15% / 30% (нерезидент).
export const PROGRESSIVE_BRACKETS: { upTo: number; rate: number }[] = [
  { upTo: 2_400_000, rate: 0.13 },
  { upTo: 5_000_000, rate: 0.15 },
  { upTo: 20_000_000, rate: 0.18 },
  { upTo: 50_000_000, rate: 0.20 },
  { upTo: Infinity, rate: 0.22 },
];

export function calcProgressiveTax(annualIncome: number): number {
  let remaining = annualIncome;
  let prevCap = 0;
  let tax = 0;
  for (const b of PROGRESSIVE_BRACKETS) {
    const slice = Math.min(remaining, b.upTo - prevCap);
    if (slice <= 0) break;
    tax += slice * b.rate;
    remaining -= slice;
    prevCap = b.upTo;
  }
  return tax;
}

export const calcIncomeTax: CalcFunction = (inputs) => {
  const amount = number(inputs.amount);
  const period = choice(inputs.period, ['month', 'year'], 'month');
  const mode = choice(inputs.mode, ['progressive', 'fixed'], 'progressive');
  const direction = choice(inputs.direction, ['gross', 'net'], 'gross');
  const incomeBeforePeriod = optionalNumber(inputs.incomeBeforePeriod);
  const deductions = optionalNumber(inputs.deductions);
  const fixedRate = mode === 'fixed' ? number(inputs.rate === undefined ? 13 : inputs.rate) : 13;
  const fail = (message: string) => ({
    primary: { label: 'Налог', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (period === null || mode === null || direction === null) return fail('Выберите корректный режим расчёта');
  if (amount === null || amount <= 0) return fail('Введите сумму больше нуля');
  if (incomeBeforePeriod === null || deductions === null || incomeBeforePeriod < 0 || deductions < 0) return fail('Введите корректные значения');
  if (fixedRate === null || fixedRate < 0 || fixedRate >= 100) return fail('Ставка должна быть от 0 до менее 100%');

  // Приведём сумму к годовой для расчёта прогрессивной ставки
  const annualMultiplier = period === 'year' ? 1 : 12;

  let gross: number;
  let net: number;
  let tax: number;

  // Integrate current taxable income across the remaining brackets directly.
  // Subtracting two huge cumulative taxes loses a small, valid current tax.
  const progressiveTaxFor = (current: number): number => {
    const multiplier = period === 'month' && incomeBeforePeriod === 0 ? 12 : 1;
    const prior = period === 'month' && incomeBeforePeriod > 0 ? incomeBeforePeriod : 0;
    let remaining = current;
    let taxAmount = 0;
    let lower = 0;
    for (const bracket of PROGRESSIVE_BRACKETS) {
      const cap = bracket.upTo / multiplier;
      const room = Math.max(0, cap - Math.max(prior, lower));
      const slice = Math.min(remaining, room);
      taxAmount += slice * bracket.rate;
      remaining -= slice;
      lower = cap;
      if (remaining <= 0) break;
    }
    return taxAmount;
  };
  const taxForGross = (value: number): number => {
    const taxable = Math.max(0, value - deductions);
    return mode === 'progressive' ? progressiveTaxFor(taxable) : taxable * (fixedRate / 100);
  };
  if (direction === 'gross') {
    gross = amount;
    tax = taxForGross(gross);
    net = gross - tax;
  } else {
    net = amount;
    if (mode === 'fixed') {
      gross = net <= deductions ? net : deductions + (net - deductions) / (1 - fixedRate / 100);
    } else {
      let lo = amount;
      let hi = amount / 0.78; // 22% is the largest marginal rate, even without deductions.
      if (!Number.isFinite(hi)) return fail('Результат выходит за числовые пределы расчёта');
      for (let i = 0; i < 60; i++) {
        const mid = lo + (hi - lo) / 2;
        if (mid - taxForGross(mid) > amount) hi = mid;
        else lo = mid;
      }
      gross = lo + (hi - lo) / 2;
    }
    tax = taxForGross(gross);
  }
  if (![gross, net, tax].every(Number.isFinite) || gross <= 0 || net <= 0 || tax < 0) return fail('Результат выходит за числовые пределы расчёта');

  const effectiveRate = (tax / gross) * 100;
  const periodLabel = period === 'year' ? 'год' : 'мес.';

  return {
    primary: { label: `НДФЛ за ${periodLabel}`, value: fmtMoney(tax) },
    secondary: [
      { label: 'Начислено (до налога)', value: fmtMoney(gross) },
      { label: 'На руки (после налога)', value: fmtMoney(net), accent: 'green' },
      { label: 'Эффективная ставка', value: fmtPct(effectiveRate, 2) },
      ...(deductions > 0 ? [{ label: 'Учтённые вычеты', value: fmtMoney(deductions) }] : []),
      ...(incomeBeforePeriod > 0 ? [{ label: 'Доход до периода', value: fmtMoney(incomeBeforePeriod) }] : []),
    ],
  };
};
