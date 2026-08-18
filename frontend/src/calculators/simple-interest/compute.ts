import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber, toStr } from '../../lib/format';

// Простые проценты: процент начисляется только на первоначальную сумму.
//   проценты = сумма × ставка × срок / 100
//   ставка   = проценты × 100 / (сумма × срок)
// Второй режим — та же формула, решённая относительно ставки. Отдельного
// калькулятора он не требует: меняется одно неизвестное, а не задача.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'interest');
  const principal = toNumber(inputs.principal);
  const years = toNumber(inputs.years);

  const fail = (message: string) => ({
    primary: { label: mode === 'rate' ? 'Ставка' : 'Проценты', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (principal <= 0) return fail('Сумма должна быть больше нуля');
  if (years <= 0) return fail('Срок должен быть больше нуля');

  if (mode === 'rate') {
    const interest = toNumber(inputs.interest);
    const rate = (interest * 100) / (principal * years);
    return {
      primary: { label: 'Ставка', value: `${fmtNumber(rate, 2)} %` },
      secondary: [
        { label: 'Проценты за срок', value: fmtMoney(interest) },
        { label: 'Итоговая сумма', value: fmtMoney(principal + interest) },
        { label: 'Начальная сумма', value: fmtMoney(principal) },
      ],
    };
  }

  const rate = toNumber(inputs.rate);
  const interest = (principal * rate * years) / 100;

  return {
    primary: { label: 'Проценты', value: fmtMoney(interest) },
    secondary: [
      { label: 'Итоговая сумма', value: fmtMoney(principal + interest) },
      { label: 'Проценты за год', value: fmtMoney(interest / years) },
      { label: 'Начальная сумма', value: fmtMoney(principal) },
    ],
  };
};
