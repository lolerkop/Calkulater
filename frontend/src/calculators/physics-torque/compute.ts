import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Magnitude of r cross F, not its clockwise/counterclockwise direction.
// r is the distance to the application point; d = r sin(theta) is the moment arm.
const sinDegrees = (a: number): number => a === 0 || a === 180 ? 0 : a === 90 ? 1 : Math.sin(Math.min(a, 180 - a) * (Math.PI / 180));
const multiply = (a: number, b: number, c: number): number => a === 0 || b === 0 || c === 0 ? 0 : [(a * b) * c, a * (b * c), (a * c) * b].find(x => Number.isFinite(x) && x > 0) ?? NaN;
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Момент силы', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const force = read(inputs.force), radius = read(inputs.radius), angle = read(inputs.angle);
  if (![force, radius, angle].every(Number.isFinite)) return fail(INPUT);
  if (force < 0) return fail('Сила не может быть отрицательной');
  if (radius < 0) return fail('Расстояние до точки приложения силы не может быть отрицательным');
  if (angle < 0 || angle > 180) return fail('Угол должен лежать в диапазоне от 0 до 180 градусов');
  const sin = sinDegrees(angle), arm = radius * sin, torque = multiply(force, radius, sin);
  if (![sin, arm, torque].every(Number.isFinite) || (angle > 0 && angle < 180 && sin === 0) || (radius > 0 && sin > 0 && arm === 0)) return fail(RANGE);
  return { primary: { label: 'Момент силы', value: `${qty(torque)} Н·м` }, secondary: [
    { label: 'Плечо силы', value: `${qty(arm)} м` }, { label: 'Синус угла', value: qty(sin) },
  ] };
};
