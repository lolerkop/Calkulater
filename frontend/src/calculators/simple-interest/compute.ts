import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Простые проценты: процент начисляется только на первоначальную сумму.
//   проценты = сумма × ставка × срок / 100
//   ставка   = проценты × 100 / (сумма × срок)
// Второй режим — та же формула, решённая относительно ставки. Отдельного
// калькулятора он не требует: меняется одно неизвестное, а не задача.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'interest' : inputs.mode;
  const principal = numericInput(inputs.principal);
  const years = numericInput(inputs.years);

  const fail = (message: string) => ({
    primary: { label: mode === 'rate' ? 'Ставка' : 'Проценты', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'interest' && mode !== 'rate') return fail('Выберите корректный режим расчёта.');
  if (![principal, years].every(Number.isFinite)) return fail('Введите конечные числовые значения.');
  if (principal <= 0) return fail('Сумма должна быть больше нуля');
  if (years <= 0) return fail('Срок должен быть больше нуля');

  if (mode === 'rate') {
    const interest = numericInput(inputs.interest);
    if (!Number.isFinite(interest)) return fail('Введите конечные числовые значения.');
    if (interest < 0) return fail('Проценты не могут быть отрицательными.');
    const rate = ((interest / principal) / years) * 100;
    const total = principal + interest;
    if (![rate, total].every(Number.isFinite) || (interest > 0 && rate === 0)) return fail('Результат вне допустимого диапазона');
    return {
      primary: { label: 'Ставка', value: `${preciseNumber(rate, 2)} %` },
      secondary: [
        { label: 'Проценты за срок', value: money(interest) },
        { label: 'Итоговая сумма', value: money(total) },
        { label: 'Начальная сумма', value: money(principal) },
      ],
    };
  }

  const rate = numericInput(inputs.rate);
  if (!Number.isFinite(rate)) return fail('Введите конечные числовые значения.');
  if (rate < 0) return fail('Ставка не может быть отрицательной.');
  // Scaling before multiplying avoids an unnecessary large intermediate;
  // tiny rates scale after the product so division by 100 cannot erase them.
  const annualInterest = rate < 1 ? (principal * rate) / 100 : principal * (rate / 100);
  const interest = annualInterest * years;
  const total = principal + interest;
  if (![annualInterest, interest, total].every(Number.isFinite)
    || (rate > 0 && (annualInterest === 0 || interest === 0))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Проценты', value: money(interest) },
    secondary: [
      { label: 'Итоговая сумма', value: money(total) },
      { label: 'Проценты за год', value: money(annualInterest) },
      { label: 'Начальная сумма', value: money(principal) },
    ],
  };
};

function numericInput(value: unknown): number {
  return typeof value === 'number' || typeof value === 'string' ? toNumber(value, NaN) : NaN;
}

function preciseNumber(value: number, digits: number): string {
  return value !== 0 && Math.abs(value) < 1e-7 ? formatQuantity(value, fmtNumber) : fmtNumber(value, digits);
}

function money(value: number): string {
  return value !== 0 && Math.abs(value) < 1e-7 ? `${formatQuantity(value, fmtNumber)} ₽` : fmtMoney(value);
}
