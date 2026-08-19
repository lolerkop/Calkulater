import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Арендная доходность: валовая и чистая — это РАЗНЫЕ величины.
//
// Валовая считается от всей арендной платы, чистая — за вычетом годовых
// расходов. Смешивать их нельзя: валовые 6 % при заметных расходах легко
// оказываются чистыми 4 %, и сравнивать со ставкой по вкладу нужно именно
// чистую. Строка чистой доходности появляется только когда расходы заданы.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const rentMode = toStr(inputs.rentMode, 'annual');
  const costs = toNumber(inputs.annualCosts);
  const fail = (message: string) => ({
    primary: { label: 'Валовая доходность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');

  const annual = rentMode === 'annual' ? toNumber(inputs.annualRent) : toNumber(inputs.monthlyRent) * 12;
  if (annual < 0) return fail('Аренда не может быть отрицательной');
  if (costs > annual) return fail('Расходы не могут превышать арендную плату');

  const gross = (annual / price) * 100;
  const secondary = [{ label: 'Аренда за год', value: money(annual) }];
  if (costs > 0) {
    secondary.push({ label: 'Чистая доходность', value: percent(((annual - costs) / price) * 100) });
  }
  if (annual > 0) {
    secondary.push({ label: 'Окупаемость', value: `${fmtNumber(price / annual, 1)} лет` });
  }

  return { primary: { label: 'Валовая доходность', value: percent(gross) }, secondary };
};
