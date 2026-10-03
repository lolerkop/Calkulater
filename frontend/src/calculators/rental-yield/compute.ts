import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, optionalNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave14Input';

// Арендная доходность: валовая и чистая — это РАЗНЫЕ величины.
//
// Валовая считается от всей арендной платы, чистая — за вычетом годовых
// расходов. Смешивать их нельзя: валовые 6 % при заметных расходах легко
// оказываются чистыми 4 %. Это только денежный поток, без сопоставления
// риска, налогов и ликвидности со вкладом. Окупаемость всегда валовая.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const rentMode = choice(inputs.rentMode, ['annual', 'monthly'], 'annual');
  const costs = optionalNumber(inputs.annualCosts);
  const fail = (message: string) => ({
    primary: { label: 'Валовая доходность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (rentMode === null) return fail('Неизвестный режим расчёта');
  const rent = toNumber(inputs[rentMode === 'annual' ? 'annualRent' : 'monthlyRent']);
  if (price === null || costs === null || rent === null) return fail('Введите корректные числовые данные');
  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');

  const annual = rentMode === 'annual' ? rent : rent * 12;
  if (annual < 0) return fail('Аренда не может быть отрицательной');
  if (costs < 0) return fail('Годовые расходы не могут быть отрицательными');

  const gross = (annual / price) * 100;
  const net = (annual - costs) / price * 100;
  const payback = annual > 0 ? price / annual : null;
  if (![annual, gross, net].every(v => validOutput(v)) || (rent > 0 && gross === 0) || (payback !== null && !validOutput(payback, true))) return fail('Результат вне допустимого диапазона');
  const secondary = [{ label: 'Аренда за год', value: money(annual) }];
  if (costs > 0) {
    secondary.push({ label: 'Чистая доходность', value: percent(net) });
  }
  if (annual > 0) {
    secondary.push({ label: 'Простая валовая окупаемость', value: `${fmtNumber(payback!, 1)} лет` });
  }

  return { primary: { label: 'Валовая доходность', value: percent(gross) }, secondary };
};
