import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Оборачиваемость запасов: СЕБЕСТОИМОСТЬ продаж ÷ средний запас.
//
// В числителе именно себестоимость, а не выручка. Запасы учитываются по
// себестоимости, и деление на них выручки добавило бы к обороту всю торговую
// наценку — показатель оказался бы завышен на её величину.
const DAYS_IN_YEAR = 365;
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const cogs = toNumber(inputs.cogs);
  const mode = toStr(inputs.mode, 'direct');
  const fail = (message: string) => ({
    primary: { label: 'Оборачиваемость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(cogs > 0)) return fail('Себестоимость продаж должна быть больше нуля');

  const average = mode === 'direct'
    ? toNumber(inputs.avgInventory)
    : (toNumber(inputs.beginInventory) + toNumber(inputs.endInventory)) / 2;
  if (!(average > 0)) return fail('Средний запас должен быть больше нуля');

  const turns = cogs / average;
  return {
    primary: { label: 'Оборачиваемость', value: `${fmtNumber(turns, 2)} раз` },
    secondary: [
      { label: 'Срок хранения', value: `${fmtNumber(DAYS_IN_YEAR / turns, 1)} дней` },
      { label: 'Средний запас', value: money(average) },
    ],
  };
};
