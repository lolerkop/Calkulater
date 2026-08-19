import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Механическая работа: W = F · s · cos θ.
//
// Угол приходит в ГРАДУСАХ, а Math.cos принимает РАДИАНЫ. Перевод сделан явно
// и в одном месте: подстановка градусов напрямую дала бы правдоподобное, но
// неверное число.
//
// Косинус прямого угла в плавающей арифметике равен не нулю, а 6,1·10⁻¹⁷.
// Оставить его как есть значило бы показать работу 3·10⁻¹⁵ Дж там, где верный
// ответ — ровно ноль, поэтому пренебрежимо малый косинус обнуляется.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

const cosDegrees = (degrees: number): number => {
  const value = Math.cos((degrees * Math.PI) / 180);
  return Math.abs(value) < 1e-12 ? 0 : value;
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'W');
  const force = toNumber(inputs.F);
  const angleDeg = toNumber(inputs.angleDeg);
  const cos = cosDegrees(angleDeg);
  const fail = (message: string) => ({
    primary: { label: 'Работа', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (force < 0) return fail('Сила не может быть отрицательной');

  let distance = 0;
  let work = 0;
  let primaryLabel = 'Работа';
  if (mode === 'W') {
    distance = toNumber(inputs.s);
    if (distance < 0) return fail('Перемещение не может быть отрицательным');
    work = force * distance * cos;
  } else {
    work = toNumber(inputs.W);
    if (work < 0) return fail('Работа не может быть отрицательной');
    if (!(force > 0)) return fail('Сила должна быть больше нуля, иначе перемещение не определено');
    if (cos === 0) return fail('При прямом угле сила работы не совершает, и перемещение из неё не выводится');
    distance = work / (force * cos);
    primaryLabel = 'Перемещение';
  }

  return {
    primary: { label: primaryLabel, value: mode === 'W' ? `${qty(work)} Дж` : `${qty(distance)} м` },
    secondary: [
      { label: 'Работа', value: `${qty(work)} Дж` },
      { label: 'Сила', value: `${qty(force)} Н` },
      { label: 'Перемещение', value: `${qty(distance)} м` },
      { label: 'Косинус угла', value: qty(cos) },
    ],
  };
};
