import type { CalcFunction } from '../../lib/types';
import { integer, text, validOutput } from './numeric';

// Counts are actual actions, not unique engaged people. Multiple actions per
// person permit a ratio above100%; reach and followers are explicit bases.
export const compute: CalcFunction = (inputs) => {
  const baseKind = inputs.base === undefined ? 'reach' : inputs.base;
  const fail = (message: string) => ({ primary: { label: 'Вовлечённость', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (baseKind !== 'reach' && baseKind !== 'followers') return fail('Неизвестная база расчёта');
  const engagements = integer(inputs.engagements), base = integer(baseKind === 'reach' ? inputs.reach : inputs.followers);
  if (engagements === null || base === null || !Number.isSafeInteger(engagements) || !Number.isSafeInteger(base)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (engagements < 0) return fail('Реакций не может быть отрицательное число');
  if (!(base > 0)) return fail('База должна быть больше нуля');
  const er = engagements / base * 100, per1000 = engagements / base * 1000;
  if (!validOutput(er, engagements > 0) || !validOutput(per1000, engagements > 0)) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'Вовлечённость', value: `${text(er)}%` }, secondary: [ { label: 'База расчёта', value: baseKind === 'reach' ? 'охват' : 'подписчики' }, { label: 'Реакций', value: text(engagements, 0) }, { label: 'Реакций на тысячу', value: text(per1000, 1) } ] };
};
