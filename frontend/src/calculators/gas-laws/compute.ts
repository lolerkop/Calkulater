import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from './numeric';

const LABELS = { p2: 'Давление p₂', v2: 'Объём V₂', t2: 'Температура T₂' };
const UNITS = { p2: 'кПа', v2: 'л', t2: 'К' };
// A fixed positive amount of ideal gas, absolute pressures and Kelvin temperatures.
// The computed field is ignored; it is read-only in the form.
export const compute: CalcFunction = inputs => {
  const mode = inputs.mode;
  const validMode = mode === 'p2' || mode === 'v2' || mode === 't2';
  const label = validMode ? LABELS[mode] : LABELS.p2;
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!validMode) return fail('Выберите поддерживаемый режим расчёта');
  const p1 = readScalar(inputs.p1), v1 = readScalar(inputs.v1), t1 = readScalar(inputs.t1);
  let p2 = mode === 'p2' ? 1 : readScalar(inputs.p2);
  let v2 = mode === 'v2' ? 1 : readScalar(inputs.v2);
  let t2 = mode === 't2' ? 1 : readScalar(inputs.t2);
  if (![p1,v1,t1,p2,v2,t2].every(Number.isFinite)) return fail('Введите конечные числа во все известные поля');
  if (![p1,v1,t1,p2,v2,t2].every(x => x > 0)) return fail('Абсолютное давление, объём и температура в кельвинах должны быть больше нуля');
  const value = mode === 'p2' ? positiveRatio([p1,v1,t2],[t1,v2])
    : mode === 'v2' ? positiveRatio([p1,v1,t2],[t1,p2])
    : positiveRatio([p2,v2,t1],[p1,v1]);
  if (mode === 'p2') p2 = value; else if (mode === 'v2') v2 = value; else t2 = value;
  const state1 = positiveRatio([p1,v1],[t1]);
  const state2 = positiveRatio([p2,v2],[t2]);
  if (![value,state1,state2].every(x => Number.isFinite(x) && x > 0)) return fail('Результат выходит за числовой диапазон; проверьте масштаб величин');
  const q = (n: number, unit: string) => `${formatQuantity(n,fmtNumber)} ${unit}`;
  return { primary: { label, value: q(value,UNITS[mode]) }, secondary: [
    { label: 'Состояние 1: p·V/T', value: q(state1,'кПа·л/К') },
    { label: 'Состояние 2: p·V/T', value: q(state2,'кПа·л/К') },
    { label: 'Первое состояние', value: `${q(p1,'кПа')} · ${q(v1,'л')} · ${q(t1,'К')}` },
  ] };
};
