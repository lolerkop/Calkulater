import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Разбивка лестничного марша.
//
//   подступенков n = ⌈общий подъём / предельная высота ступени⌉
//   высота ступени h = общий подъём / n
//   проступей = n − 1          (верхняя площадка — не ступень)
//   длина марша = (n − 1) × проступь
//   шаг = 2h + b               формула удобства, норма примерно 0,60–0,65 м
//   угол = arctg(h / b)
//
// Число подступенков округляется ВВЕРХ и только вверх: округление вниз дало бы
// ступень выше предельной, а предел здесь — ограничение безопасности, а не
// пожелание. Высота ступени после этого пересчитывается обратно, поэтому все
// ступени выходят одинаковыми — разная высота ступеней в одном марше и есть
// самая частая причина спотыкания.
export const compute: CalcFunction = (inputs) => {
  const riseTotal = toNumber(inputs.rise_total);
  const tread = toNumber(inputs.tread);
  const maxRiser = toNumber(inputs.max_riser);
  const fail = (message: string) => ({
    primary: { label: 'Подступенков', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(riseTotal > 0)) return fail('Общий подъём должен быть больше нуля');
  if (!(tread > 0)) return fail('Проступь должна быть больше нуля');
  if (!(maxRiser > 0)) return fail('Предельная высота ступени должна быть больше нуля');

  const risers = ceilUnits(riseTotal / maxRiser);
  const riser = riseTotal / risers;
  const step = 2 * riser + tread;
  const angle = (Math.atan(riser / tread) * 180) / Math.PI;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Подступенков', value: `${fmtInt(risers)} шт` },
    secondary: [
      { label: 'Высота подступенка', value: q(riser, 'м') },
      { label: 'Проступей', value: `${fmtInt(risers - 1)} шт` },
      { label: 'Длина марша', value: q((risers - 1) * tread, 'м') },
      { label: 'Угол наклона', value: `${formatMeasure(angle, fmtNumber)}°` },
      { label: 'Формула удобства 2h + b', value: q(step, 'м') },
      {
        label: 'Оценка шага',
        value: step >= 0.6 && step <= 0.65 ? 'в норме' : 'вне нормы 0,60–0,65 м',
        accent: step >= 0.6 && step <= 0.65 ? 'green' as const : 'red' as const,
      },
    ],
  };
};
