import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Уклон: подъём на заложение.
//
//   уклон, %   = подъём / заложение × 100
//   угол, °    = arctg(подъём / заложение)
//   длина      = √(подъём² + заложение²)
//
// Проценты и градусы — не одно и то же, и путаница между ними стоит дорого.
// Уклон 100 % — это 45°, а не «предельно круто»; уклон 15 % — всего 8,5°.
// Поэтому оба числа показаны рядом: нормативы на пандусы задаются в процентах,
// а инструмент на стройке чаще показывает градусы.
//
// Длина наклона нужна отдельно: именно её, а не заложение, покупают в погонных
// метрах, когда речь о поручне, обшивке или кабеле вдоль ската.
export const compute: CalcFunction = (inputs) => {
  const rise = toNumber(inputs.rise);
  const run = toNumber(inputs.run);

  const fail = (message: string) => ({
    primary: { label: 'Уклон', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (run === 0) return fail('Заложение не может быть нулевым');

  const ratio = rise / run;

  return {
    primary: { label: 'Уклон', value: `${fmtNumber(ratio * 100, 2)}%` },
    secondary: [
      { label: 'Угол', value: `${formatMeasure((Math.atan(ratio) * 180) / Math.PI, fmtNumber)}°` },
      { label: 'Отношение', value: formatStatistic(ratio, fmtNumber) },
      { label: 'Длина наклона', value: `${formatMeasure(Math.hypot(rise, run), fmtNumber)} м` },
    ],
  };
};
