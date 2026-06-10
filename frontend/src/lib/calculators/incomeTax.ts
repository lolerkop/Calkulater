import type { CalcFunction } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

// Калькулятор НДФЛ (Россия).
// Поддерживает прогрессивную шкалу 2025 года: 13% до 2,4 млн ₽ / год,
// 15% от 2,4 до 5 млн, 18% от 5 до 20 млн, 20% от 20 до 50 млн, 22% свыше.
// Для упрощённого режима пользователь может выбрать «фиксированная ставка»
// и вручную задать 13% / 15% / 30% (нерезидент).
const PROGRESSIVE_BRACKETS: { upTo: number; rate: number }[] = [
  { upTo: 2_400_000, rate: 0.13 },
  { upTo: 5_000_000, rate: 0.15 },
  { upTo: 20_000_000, rate: 0.18 },
  { upTo: 50_000_000, rate: 0.20 },
  { upTo: Infinity, rate: 0.22 },
];

function calcProgressiveTax(annualIncome: number): number {
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
  const amount = toNumber(inputs.amount);
  const period = toStr(inputs.period, 'month'); // month | year
  const mode = toStr(inputs.mode, 'progressive'); // progressive | fixed
  const fixedRate = toNumber(inputs.rate, 13);
  const direction = toStr(inputs.direction, 'gross'); // gross (с указанной начислено) | net (с указанной на руки)
  const incomeBeforePeriod = Math.max(0, toNumber(inputs.incomeBeforePeriod));
  const deductions = Math.max(0, toNumber(inputs.deductions));

  if (amount <= 0) {
    return {
      primary: { label: 'Налог', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите сумму больше нуля', accent: 'red' }],
    };
  }

  // Приведём сумму к годовой для расчёта прогрессивной ставки
  const annualMultiplier = period === 'year' ? 1 : 12;

  let gross: number;
  let net: number;
  let tax: number;

  if (mode === 'progressive') {
    if (direction === 'gross') {
      const taxableAmount = Math.max(0, amount - deductions);
      const usesCumulativeIncome = period === 'month' && incomeBeforePeriod > 0;
      const annualGross = usesCumulativeIncome
        ? incomeBeforePeriod + taxableAmount
        : taxableAmount * annualMultiplier;
      const annualTax = usesCumulativeIncome
        ? calcProgressiveTax(annualGross) - calcProgressiveTax(incomeBeforePeriod)
        : calcProgressiveTax(annualGross);
      gross = amount;
      tax = usesCumulativeIncome ? annualTax : annualTax / annualMultiplier;
      net = gross - tax;
    } else {
      // Обратный расчёт: подбираем начисленную сумму с учётом текущей
      // ступени прогрессивной шкалы и вычетов за выбранный период.
      const usesCumulativeIncome = period === 'month' && incomeBeforePeriod > 0;
      const taxForGross = (candidateGross: number) => {
        if (usesCumulativeIncome) {
          const taxableCurrent = Math.max(0, candidateGross - deductions);
          return calcProgressiveTax(incomeBeforePeriod + taxableCurrent)
            - calcProgressiveTax(incomeBeforePeriod);
        }

        const annualGross = candidateGross * annualMultiplier;
        const annualDeductions = deductions * annualMultiplier;
        return calcProgressiveTax(Math.max(0, annualGross - annualDeductions)) / annualMultiplier;
      };

      let lo = amount;
      let hi = Math.max(amount + deductions, amount * 2);
      while (hi - taxForGross(hi) < amount) hi *= 2;
      for (let i = 0; i < 60; i++) {
        const mid = (lo + hi) / 2;
        if (mid - taxForGross(mid) > amount) hi = mid;
        else lo = mid;
      }
      gross = (lo + hi) / 2;
      tax = taxForGross(gross);
      net = amount;
    }
  } else {
    const rate = fixedRate / 100;
    if (direction === 'gross') {
      gross = amount;
      tax = Math.max(0, gross - deductions) * rate;
      net = gross - tax;
    } else {
      net = amount;
      if (rate >= 1) {
        return {
          primary: { label: 'Налог', value: '—' },
          secondary: [{ label: 'Проверьте данные', value: 'Ставка должна быть меньше 100%', accent: 'red' }],
        };
      }
      gross = net <= deductions ? net : deductions + (net - deductions) / (1 - rate);
      tax = Math.max(0, gross - deductions) * rate;
    }
  }

  const effectiveRate = (tax / gross) * 100;
  const periodLabel = period === 'year' ? 'год' : 'мес.';

  return {
    primary: { label: `НДФЛ за ${periodLabel}`, value: fmtMoney(tax) },
    secondary: [
      { label: 'Начислено (до налога)', value: fmtMoney(gross) },
      { label: 'На руки (после налога)', value: fmtMoney(net), accent: 'green' },
      { label: 'Эффективная ставка', value: `${effectiveRate.toFixed(2)}%` },
      ...(deductions > 0 ? [{ label: 'Учтённые вычеты', value: fmtMoney(deductions) }] : []),
      ...(incomeBeforePeriod > 0 ? [{ label: 'Доход до периода', value: fmtMoney(incomeBeforePeriod) }] : []),
    ],
  };
};
