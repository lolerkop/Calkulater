import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from './numeric';

// Rounded approximation to exact R=N_A*k; retained for existing displayed examples.
const R = 8.314462618;
const PRESSURE = { pa: 1, kpa: 1000, atm: 101325 };
const VOLUME = { m3: 1, l: 0.001 };
const LABELS = { p: 'Давление', v: 'Объём', n: 'Количество вещества', t: 'Температура' };
export const compute: CalcFunction = inputs => {
  const solve = inputs.solve, pu = inputs.pressureUnit, vu = inputs.volumeUnit, tu = inputs.tempUnit;
  const validSolve = solve === 'p' || solve === 'v' || solve === 'n' || solve === 't';
  const label = validSolve ? LABELS[solve] : LABELS.p;
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!validSolve) return fail('Выберите поддерживаемый режим расчёта');
  if ((pu !== 'pa' && pu !== 'kpa' && pu !== 'atm') || (vu !== 'm3' && vu !== 'l') || (tu !== 'k' && tu !== 'c')) return fail('Выберите поддерживаемые единицы');
  const pf = PRESSURE[pu], vf = VOLUME[vu];
  const n = solve === 'n' ? 1 : readScalar(inputs.n);
  const p = solve === 'p' ? 1 : readScalar(inputs.p);
  const v = solve === 'v' ? 1 : readScalar(inputs.v);
  const rawT = solve === 't' ? 1 : readScalar(inputs.t);
  const t = solve === 't' ? 1 : tu === 'c' ? rawT + 273.15 : rawT;
  if (![n,p,v,rawT,t].every(Number.isFinite)) return fail('Введите конечные числа во все известные поля');
  if (!(n > 0)) return fail('Количество вещества должно быть больше нуля');
  if (!(p > 0)) return fail('Давление должно быть больше нуля');
  if (!(v > 0)) return fail('Объём должен быть больше нуля');
  if (t < 0) return fail('Температура не может быть ниже абсолютного нуля');
  if (solve === 'n' && !(t > 0)) return fail('Температура должна быть больше нуля');
  const kelvinOrResult = solve === 'p' ? positiveRatio([n,R,t],[v,vf,pf])
    : solve === 'v' ? positiveRatio([n,R,t],[p,pf,vf])
    : solve === 'n' ? positiveRatio([p,pf,v,vf],[R,t])
    : positiveRatio([p,pf,v,vf],[n,R]);
  const formalZero = (solve === 'p' || solve === 'v') && t === 0;
  if (!Number.isFinite(kelvinOrResult) || (kelvinOrResult === 0 && !formalZero)) return fail('Результат выходит за числовой диапазон; проверьте масштаб величин');
  const answer = solve === 't' && tu === 'c' ? kelvinOrResult - 273.15 : kelvinOrResult;
  if (!Number.isFinite(answer)) return fail('Результат выходит за числовой диапазон; проверьте масштаб величин');
  const qty = (x: number) => formatQuantity(x,fmtNumber);
  const unit = solve === 'p' ? (pu === 'pa' ? 'Па' : pu === 'kpa' ? 'кПа' : 'атм')
    : solve === 'v' ? (vu === 'm3' ? 'м³' : 'л') : solve === 'n' ? 'моль' : tu === 'c' ? '°C' : 'К';
  const secondary = [{ label: 'Газовая постоянная', value: '8,314463 Дж/(моль·К)' }];
  if (solve !== 't') secondary.push({ label: 'Температура', value: `${qty(t)} К` });
  if (formalZero) secondary.push({ label: 'Предел модели', value: '0 K — формальный предел уравнения, а не физическое состояние идеального газа' });
  return { primary: { label, value: `${qty(answer)} ${unit}` }, secondary };
};
