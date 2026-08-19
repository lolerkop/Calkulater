import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Площадь крыши по габаритам основания и уклону.
//
// Ключевой факт, который стоит знать до расчёта: у любой крыши постоянного
// уклона над одним и тем же основанием площадь одна и та же — S = основание / cos α.
// Односкатная, двускатная и вальмовая различаются не итогом, а тем, на сколько
// плоскостей он делится. Поэтому режим меняет разбивку, а не сумму.
//
// Угол переводится в радианы явно. При 90° косинус обращается в нуль: деления
// не существует, и такой ввод отклоняется, а не даёт бесконечность.

const m2 = (value: number): string => `${formatMeasure(value, fmtNumber)} м²`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'gable');
  const slopeMode = toStr(inputs.slopeMode, 'degrees');
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const fail = (message: string) => ({
    primary: { label: 'Площадь крыши', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0) || !(width > 0)) return fail('Размеры основания должны быть больше нуля');

  let angleDeg: number;
  if (slopeMode === 'percent') {
    const percent = toNumber(inputs.slopePercent);
    if (!(percent >= 0)) return fail('Уклон не может быть отрицательным');
    angleDeg = Math.atan(percent / 100) * (180 / Math.PI);
  } else {
    angleDeg = toNumber(inputs.angle);
  }
  if (!(angleDeg >= 0)) return fail('Уклон не может быть отрицательным');
  // Строго меньше 90°: при 90° скат вертикален, косинус нулевой и крыши нет.
  if (angleDeg >= 90) return fail('Уклон должен быть меньше 90 градусов');

  const cos = Math.cos((angleDeg * Math.PI) / 180);
  const plan = length * width;
  const total = plan / cos;

  const secondary: { label: string; value: string }[] = [];
  if (mode === 'shed') {
    secondary.push({ label: 'Скатов', value: '1' });
  } else if (mode === 'hip') {
    // Разбивка вальмовой крыши зависит от длины конька, которой здесь нет,
    // поэтому выводится только число плоскостей, а не площадь каждой.
    secondary.push({ label: 'Скатов', value: '4' });
  } else {
    secondary.push({ label: 'Площадь одного ската', value: m2(total / 2) });
    secondary.push({ label: 'Скатов', value: '2' });
  }
  secondary.push({ label: 'Площадь основания', value: m2(plan) });
  secondary.push({ label: 'Уклон', value: `${formatMeasure(angleDeg, fmtNumber)}°` });

  return { primary: { label: 'Площадь крыши', value: m2(total) }, secondary };
};
