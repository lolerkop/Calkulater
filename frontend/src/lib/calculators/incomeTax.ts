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
      const annualGross = amount * annualMultiplier;
      const annualTax = calcProgressiveTax(annualGross);
      gross = amount;
      tax = annualTax / annualMultiplier;
      net = gross - tax;
    } else {
      // Обратный расчёт: подбираем gross такой, что gross - tax(gross) = net
      // Бинарный поиск, т.к. функция монотонная.
      const targetAnnualNet = amount * annualMultiplier;
      let lo = targetAnnualNet;
      let hi = targetAnnualNet * 2;
      for (let i = 0; i < 60; i++) {
        const mid = (lo + hi) / 2;
        const t = calcProgressiveTax(mid);
        if (mid - t > targetAnnualNet) hi = mid;
        else lo = mid;
      }
      const annualGross = (lo + hi) / 2;
      const annualTax = calcProgressiveTax(annualGross);
      gross = annualGross / annualMultiplier;
      tax = annualTax / annualMultiplier;
      net = gross - tax;
    }
  } else {
    const rate = fixedRate / 100;
    if (direction === 'gross') {
      gross = amount;
      tax = gross * rate;
      net = gross - tax;
    } else {
      net = amount;
      gross = net / (1 - rate);
      tax = gross - net;
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
    ],
  };
};
