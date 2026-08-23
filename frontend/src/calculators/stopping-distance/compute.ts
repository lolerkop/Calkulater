import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Остановочный путь = путь за время реакции + тормозной путь.
//
// Первое слагаемое линейно по скорости, второе КВАДРАТИЧНО: вдвое быстрее —
// вчетверо длиннее торможение. Именно поэтому «немного превысил» на трассе
// стоит дороже, чем кажется.
//
// Уклон знаковый: спуск вычитается из сцепления, подъём прибавляется. Если
// спуск круче сцепления, замедления не будет вовсе — машина не остановится, и
// такой набор отвергается по существу, а не как край диапазона.
const G = 9.80665;
const KMH_IN_MS = 3.6;
const PERCENT = 100;

export const compute: CalcFunction = (inputs) => {
  const speed = toNumber(inputs.speed);
  const reaction = toNumber(inputs.reaction);
  const mu = toNumber(inputs.mu);
  const grade = toNumber(inputs.grade);
  const fail = (message: string) => ({
    primary: { label: 'Полный остановочный путь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
  if (!(reaction >= 0)) return fail('Время реакции не может быть отрицательным');
  if (!(mu > 0)) return fail('Коэффициент сцепления должен быть больше нуля');
  const effective = mu + grade / PERCENT;
  if (!(effective > 0)) return fail('Спуск круче сцепления: остановиться торможением невозможно');

  const v = speed / KMH_IN_MS;
  const decel = G * effective;
  const reactionDistance = v * reaction;
  const braking = (v * v) / (2 * decel);

  return {
    primary: { label: 'Полный остановочный путь', value: `${formatMeasure(reactionDistance + braking, fmtNumber)} м` },
    secondary: [
      { label: 'Путь за время реакции', value: `${formatMeasure(reactionDistance, fmtNumber)} м` },
      { label: 'Тормозной путь', value: `${formatMeasure(braking, fmtNumber)} м` },
      { label: 'Замедление', value: `${formatMeasure(decel, fmtNumber)} м/с²` },
      { label: 'Время торможения', value: `${formatMeasure(v / decel, fmtNumber)} с` },
    ],
  };
};
