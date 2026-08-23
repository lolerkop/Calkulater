import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Кредит под залог жилья: сколько банк готов выдать сверх уже имеющегося долга.
//
// Предел считается от СТОИМОСТИ жилья по допустимой доле залога, а не от
// собственного капитала: банк смотрит на то, сколько всего долга висит на
// объекте. Поэтому доступная сумма — это предел минус текущий остаток, и она
// может оказаться нулём при полностью выбранном пределе.
//
// Доля залога вводится пользователем: у разных банков и разных программ она
// разная, и зашивать сюда «обычные 80 процентов» значило бы выдать чужое
// правило за расчёт.
const MONTHS = 12;
const PERCENT = 100;

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const balance = toNumber(inputs.balance);
  const ltv = toNumber(inputs.ltv);
  const rate = toNumber(inputs.rate);
  const years = toNumber(inputs.years);
  const fail = (message: string) => ({
    primary: { label: 'Доступная сумма', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(value > 0)) return fail('Стоимость жилья должна быть больше нуля');
  if (!(balance >= 0)) return fail('Остаток долга не может быть отрицательным');
  if (balance > value) return fail('Остаток долга не может превышать стоимость жилья');
  if (!(ltv > 0 && ltv <= PERCENT)) return fail('Доля залога задаётся от 0 до 100 процентов');
  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');

  const limit = (value * ltv) / PERCENT;
  const available = Math.max(0, limit - balance);
  const own = value - balance;
  const months = years * MONTHS;
  const monthlyRate = rate / PERCENT / MONTHS;
  const payment = monthlyRate > 0
    ? (available * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
    : available / months;

  return {
    primary: { label: 'Доступная сумма', value: `${formatMeasure(available, fmtNumber)} ₽` },
    secondary: [
      { label: 'Собственный капитал в жилье', value: `${formatMeasure(own, fmtNumber)} ₽` },
      { label: 'Предел по доле залога', value: `${formatMeasure(limit, fmtNumber)} ₽` },
      { label: 'Доля собственного капитала', value: `${formatMeasure((own / value) * PERCENT, fmtNumber)} %` },
      { label: 'Платёж по такому кредиту', value: `${formatMeasure(payment, fmtNumber)} ₽` },
    ],
  };
};
