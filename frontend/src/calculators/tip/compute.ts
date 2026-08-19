import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Чаевые и деление счёта на компанию.
//
// Процент задаёт посетитель: нормы различаются от страны к стране и от
// заведения к заведению, и подставлять «принято двадцать» значило бы выдавать
// местный обычай за расчёт.
//
// Округление вверх пересчитывает и итог: если каждый кладёт целое число рублей,
// на столе окажется больше, чем счёт с чаевыми, и показать старую сумму было бы
// неправдой. Обслуживание, уже включённое в счёт, не вычитается — это видимое
// решение посетителя, а не догадка калькулятора.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const bill = toNumber(inputs.bill);
  const percent = toNumber(inputs.tipPercent);
  const people = Math.round(toNumber(inputs.people));
  const roundUp = inputs.roundPerPerson === 'yes';

  const fail = (message: string) => ({
    primary: { label: 'Итого к оплате', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(bill > 0)) return fail('Сумма счёта должна быть больше нуля');
  if (percent < 0) return fail('Процент чаевых не может быть отрицательным');
  if (!(people >= 1)) return fail('Человек должно быть не меньше одного');

  const tip = (bill * percent) / 100;
  const plain = bill + tip;
  const perPerson = roundUp ? Math.ceil(plain / people) : plain / people;
  const total = roundUp ? perPerson * people : plain;

  const secondary = [
    { label: 'Чаевые', value: money(tip) },
    { label: 'Счёт без чаевых', value: money(bill) },
  ];

  if (people > 1) {
    secondary.push({ label: 'С человека', value: money(perPerson) });
    secondary.push({ label: 'Человек', value: fmtInt(people) });
  }
  if (roundUp && total > plain) {
    secondary.push({ label: 'Сверх счёта из-за округления', value: money(total - plain) });
  }

  return {
    primary: { label: 'Итого к оплате', value: money(total) },
    secondary,
  };
};
