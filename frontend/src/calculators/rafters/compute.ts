import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Длина стропила двускатной крыши.
//
//   заложение = пролёт / 2
//   длина     = √(заложение² + подъём²) + свес
//   угол      = arctg(подъём / заложение)
//
// Пролёт делится пополам потому, что стропило идёт от конька до стены, а не
// через весь дом. Свес прибавляется ПОСЛЕ гипотенузы: он продолжает ту же
// наклонную линию, и прибавлять его к пролёту — распространённая ошибка,
// удлиняющая заказ на десяток сантиметров на каждой стропилине.
//
// Уклон в процентах стоит рядом с углом, потому что кровельные материалы
// нормируются по уклону, а пилят стропила по углу.
export const compute: CalcFunction = (inputs) => {
  const span = toNumber(inputs.span);
  const rise = toNumber(inputs.rise);
  const overhang = toNumber(inputs.overhang);

  const fail = (message: string) => ({
    primary: { label: 'Длина стропила', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(span > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(rise > 0)) return fail('Подъём должен быть больше нуля');
  if (overhang < 0) return fail('Свес не может быть отрицательным');

  const run = span / 2;
  const num = (value: number) => formatMeasure(value, fmtNumber);

  return {
    primary: { label: 'Длина стропила', value: `${num(Math.hypot(run, rise) + overhang)} м` },
    secondary: [
      { label: 'Угол наклона', value: `${num((Math.atan(rise / run) * 180) / Math.PI)}°` },
      { label: 'Заложение', value: `${num(run)} м` },
      { label: 'Уклон', value: `${fmtNumber((rise / run) * 100, 2)}%` },
    ],
  };
};
