import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, optionalNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave14Input';
import { formatStatistic } from '../../lib/platform/measurement';

// Отношение риска к прибыли по трём ценам сделки.
//
// Размер позиции здесь не выводится: три цены задают условные расстояния,
// а необязательный объём переводит их в деньги. Доля 100/(1+R) является
// порогом серии одинаковых исходов без расходов, не оценкой качества сделки.
// Неверный порядок цен отмечается предупреждением; исполнение не гарантируется.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const stat = (value: number) => formatStatistic(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const direction = choice(inputs.direction, ['long', 'short'], 'long');
  const entry = toNumber(inputs.entry);
  const stop = toNumber(inputs.stop);
  const target = toNumber(inputs.target);
  const qty = optionalNumber(inputs.qty);

  const fail = (message: string) => ({
    primary: { label: 'Отношение риск/прибыль', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (direction === null) return fail('Неизвестный режим расчёта');
  if (entry === null || stop === null || target === null || qty === null) return fail('Введите корректные числовые данные');

  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(stop > 0)) return fail('Цена стоп-приказа должна быть больше нуля');
  if (!(target > 0)) return fail('Целевая цена должна быть больше нуля');
  if (qty < 0) return fail('Объём не может быть отрицательным');

  const risk = Math.abs(entry - stop);
  const reward = Math.abs(target - entry);
  if (!(risk > 0)) return fail('Стоп не может совпадать с ценой входа');

  const ratio = reward / risk;
  const breakEven = (1 / (1 + ratio)) * 100;
  const cashRisk = risk * qty;
  const cashReward = reward * qty;
  if (![risk, reward, ratio, breakEven, cashRisk, cashReward].every(v => validOutput(v)) || (reward > 0 && ratio === 0) || breakEven <= 0 || (qty > 0 && cashRisk <= 0) || (qty > 0 && reward > 0 && cashReward === 0)) return fail('Результат вне допустимого диапазона');
  const consistent = direction === 'long' ? stop < entry && target > entry : stop > entry && target < entry;

  return {
    primary: { label: 'Отношение риск/прибыль', value: stat(ratio) },
    secondary: [
      { label: 'Риск на единицу', value: money(risk) },
      { label: 'Прибыль на единицу', value: money(reward) },
      ...(qty > 0 ? [
        { label: 'Риск в деньгах', value: money(cashRisk) },
        { label: 'Прибыль в деньгах', value: money(cashReward) },
      ] : []),
      {
        label: 'Безубыточная доля сделок',
        value: `${fmtNumber(breakEven, 2)}%`,
        accent: 'neutral' as const,
      },
      ...(consistent
        ? []
        : [{
            label: 'Внимание',
            value: direction === 'long'
              ? 'В лонге стоп ставится ниже входа, а цель выше'
              : 'В шорте стоп ставится выше входа, а цель ниже',
            accent: 'red' as const,
          }]),
    ],
  };
};
