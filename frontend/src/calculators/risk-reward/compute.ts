import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Отношение риска к прибыли по трём ценам сделки.
//
// Отличается от размера позиции тем, что не считает объём: там из допустимой
// потери выводится, СКОЛЬКО брать, здесь из трёх цен выводится, СТОИТ ЛИ брать.
// Объём — необязательная величина и влияет только на пересчёт в деньги.
//
// Главная строка — не само отношение, а безубыточная доля сделок: при R:R = 3
// достаточно выигрывать четверть сделок, чтобы не терять, и именно это число
// связывает отношение с торговой статистикой. 1/(1+R) — доля, при которой
// матожидание обращается в нуль.
//
// Расстояния берутся по модулю: в шорте стоп выше входа, а цель ниже, и знак
// разности зависит от направления, тогда как риск и прибыль — всегда величины.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const stat = (value: number) => formatStatistic(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const direction = toStr(inputs.direction, 'long');
  const entry = toNumber(inputs.entry);
  const stop = toNumber(inputs.stop);
  const target = toNumber(inputs.target);
  const qty = toNumber(inputs.qty);

  const fail = (message: string) => ({
    primary: { label: 'Отношение риск/прибыль', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(stop > 0)) return fail('Цена стоп-приказа должна быть больше нуля');
  if (!(target > 0)) return fail('Целевая цена должна быть больше нуля');
  if (!(qty > 0)) return fail('Объём должен быть больше нуля');

  const risk = Math.abs(entry - stop);
  const reward = Math.abs(target - entry);
  if (!(risk > 0)) return fail('Стоп не может совпадать с ценой входа');

  const ratio = reward / risk;
  const breakEven = (1 / (1 + ratio)) * 100;
  const consistent = direction === 'long' ? stop < entry && target > entry : stop > entry && target < entry;

  return {
    primary: { label: 'Отношение риск/прибыль', value: stat(ratio) },
    secondary: [
      { label: 'Риск на единицу', value: money(risk) },
      { label: 'Прибыль на единицу', value: money(reward) },
      { label: 'Риск в деньгах', value: money(risk * qty) },
      { label: 'Прибыль в деньгах', value: money(reward * qty) },
      {
        label: 'Безубыточная доля сделок',
        value: `${fmtNumber(breakEven, 2)}%`,
        accent: (ratio >= 1 ? 'green' : 'red') as 'green' | 'red',
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
