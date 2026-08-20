import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Покупательная способность денег.
//
// Инфляция действует как сложный процент, а не как простой: 8 % за десять лет
// съедают не 80 % суммы, а около 54 %, потому что каждый год процент берётся
// от уже подешевевших денег. Именно эта разница и делает интуитивную оценку
// неверной, причём в обе стороны.
//
// Показаны обе стороны одного множителя: во что превратится покупательная
// способность сегодняшней суммы и сколько будущих денег понадобится, чтобы
// купить то же самое.

export const compute: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const rate = toNumber(inputs.ratePct) / 100;
  const years = toNumber(inputs.years);
  const fail = (message: string) => ({
    primary: { label: 'Покупательная способность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (1 + rate <= 0) return fail('Инфляция не может достигать минус ста процентов');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');

  const factor = Math.pow(1 + rate, years);
  if (!Number.isFinite(factor) || factor <= 0) return fail('Значение слишком велико для расчёта');

  const real = amount / factor;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Покупательная способность', value: money(real) },
    secondary: [
      { label: 'Столько же в будущих деньгах', value: money(amount * factor) },
      { label: 'Потеряно покупательной способности', value: money(amount - real) },
      { label: 'Доля потери', value: `${fmtNumber((1 - 1 / factor) * 100, 2)}%` },
      { label: 'Множитель цен', value: fmtNumber(factor, 4) },
    ],
  };
};
