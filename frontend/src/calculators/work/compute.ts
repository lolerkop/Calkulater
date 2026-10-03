import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Work of one constant force through a net displacement, angle in degrees.
// Only exactly 90 degrees has a zero cosine; nearby angles retain their sign.
const cosDegrees = (a: number): number => a === 90 ? 0 : a === 0 ? 1 : a === 180 ? -1 : Math.sin((90 - a) * (Math.PI / 180));
const multiply = (a: number, b: number, c: number): number => a === 0 || b === 0 || c === 0 ? 0 : [(a * b) * c, a * (b * c), (a * c) * b].find(x => Number.isFinite(x) && x !== 0) ?? NaN;
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 's' ? 'Перемещение' : 'Работа';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'W' && mode !== 's') return fail(MODE);
  const force = read(inputs.F), angle = read(inputs.angleDeg), supplied = read(mode === 'W' ? inputs.s : inputs.W);
  if (![force, angle, supplied].every(Number.isFinite)) return fail(INPUT);
  if (force < 0) return fail('Сила не может быть отрицательной');
  if (angle < 0 || angle > 180) return fail('Угол должен лежать в диапазоне от 0 до 180 градусов');
  const cos = cosDegrees(angle);
  let distance: number, work: number;
  if (mode === 'W') {
    distance = supplied;
    if (distance < 0) return fail('Перемещение не может быть отрицательным');
    work = multiply(force, distance, cos);
  } else {
    work = supplied;
    if (!(force > 0)) return fail('Сила должна быть больше нуля, иначе перемещение не определено');
    if (cos === 0) return fail('При прямом угле сила работы не совершает, и перемещение из неё не выводится');
    if (work !== 0 && Math.sign(work) !== Math.sign(cos)) return fail('Знак работы должен соответствовать углу: длина перемещения неотрицательна');
    distance = work === 0 ? 0 : [(work / force) / cos, (work / cos) / force, work / (force * cos)].find(x => Number.isFinite(x) && x > 0) ?? NaN;
  }
  if (![distance, work, cos].every(Number.isFinite)) return fail(RANGE);
  return { primary: { label, value: mode === 'W' ? `${qty(work)} Дж` : `${qty(distance)} м` }, secondary: [
    { label: 'Работа', value: `${qty(work)} Дж` }, { label: 'Сила', value: `${qty(force)} Н` }, { label: 'Перемещение', value: `${qty(distance)} м` }, { label: 'Косинус угла', value: qty(cos) },
  ] };
};
