import { choice } from '../../lib/platform/financeWave11Input';
import { number, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';

// Результат сделки по криптовалюте.
//
// От расчёта доходности вложения отличается двумя вещами, без которых сделку не
// посчитать: направлением и комиссиями. В шорте прибыль даёт падение цены, а не
// рост, поэтому знак разности меняется. Комиссия берётся ДВАЖДЫ — на входе и на
// выходе, — и считается от оборота каждой стороны, а не от результата: биржа
// удерживает её и с убыточной сделки тоже.
//
// Плечо влияет только на вложенное: сама прибыль от него не меняется, меняется
// её отношение к собственным средствам.

const money = displayMoney;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const direction = choice(inputs.direction, ['long', 'short'], 'long');
  const entry = number(inputs.entry);
  const exit = number(inputs.exit);
  const qty = number(inputs.qty);
  const feePct = number(inputs.feePct);
  const leverage = number(inputs.leverage);

  const fail = (message: string) => ({
    primary: { label: 'Чистый результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (direction === null) return fail('Выберите корректный режим расчёта');
  if (entry === null || exit === null || qty === null || feePct === null || leverage === null) return fail('Введите корректные значения');
  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(exit > 0)) return fail('Цена выхода должна быть больше нуля');
  if (!(qty > 0)) return fail('Объём должен быть больше нуля');
  if (!(leverage > 0)) return fail('Плечо должно быть больше нуля');
  if (feePct < 0 || feePct > 100) return fail('Комиссия должна быть от 0 до 100%');

  const gross = direction === 'short' ? (entry - exit) * qty : (exit - entry) * qty;
  const entryNotional = entry * qty;
  const exitNotional = exit * qty;
  const fees = entryNotional * (feePct / 100) + exitNotional * (feePct / 100);
  if (feePct > 0 && fees === 0) return fail('Результат выходит за числовые пределы расчёта');
  const net = gross - fees;
  const invested = entryNotional / leverage;
  const positionReturn = (net / invested) * 100;
  const priceChange = ((exit - entry) / entry) * 100;
  if (!validOutput(invested, true) || ![entryNotional, exitNotional, gross, fees, net, positionReturn, priceChange].every(value => validOutput(value))) return fail('Результат выходит за числовые пределы расчёта');

  return {
    primary: {
      label: 'Чистый результат',
      value: money(net),
    },
    secondary: [
      { label: 'Результат до комиссий', value: money(gross) },
      { label: 'Комиссии', value: money(fees) },
      { label: 'Вложено', value: money(invested) },
      { label: 'Доходность позиции', value: percent(positionReturn), accent: (net >= 0 ? 'green' : 'red') as 'green' | 'red' },
      { label: 'Изменение цены', value: percent(priceChange) },
    ],
  };
};
