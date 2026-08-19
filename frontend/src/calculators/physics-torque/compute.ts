import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatQuantity, sinDegrees } from '../../lib/platform/measurement';

// Момент силы: τ = F · r · sin θ.
//
// Это расчёт физической величины, а не перевод единиц: конвертер момента живёт
// отдельной страницей и только меняет масштаб уже известного числа.
//
// Угол приходит в ГРАДУСАХ, а Math.sin принимает РАДИАНЫ: перевод сделан явно.
// При нулевом угле сила направлена вдоль рычага и момента не создаёт — синус
// обязан дать РОВНО нуль, а не машинный остаток.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const force = toNumber(inputs.force);
  const radius = toNumber(inputs.radius);
  const angle = toNumber(inputs.angle);
  const fail = (message: string) => ({
    primary: { label: 'Момент силы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(force >= 0)) return fail('Сила не может быть отрицательной');
  if (!(radius >= 0)) return fail('Плечо не может быть отрицательным');
  if (!(angle >= 0) || angle > 180) return fail('Угол должен лежать в диапазоне от 0 до 180 градусов');

  const sin = sinDegrees(angle);
  return {
    primary: { label: 'Момент силы', value: `${qty(force * radius * sin)} Н·м` },
    secondary: [
      { label: 'Плечо силы', value: `${qty(radius * sin)} м` },
      { label: 'Синус угла', value: qty(sin) },
    ],
  };
};
