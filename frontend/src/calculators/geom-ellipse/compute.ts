import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic, lengthSymbol } from '../../lib/platform/measurement';

// Эллипс по полуосям. Площадь точна: S = πab.
//
// Периметр эллипса в элементарных функциях не выражается — он требует
// эллиптического интеграла, — поэтому берётся приближение Рамануджана
// π[3(a+b) − √((3a+b)(a+3b))]. Его погрешность ниже 10⁻⁵ % при умеренном
// сжатии, то есть меньше, чем разница в отображаемых разрядах, и подпись
// честно называет источник.
//
// Эксцентриситет считается от БОЛЬШЕЙ полуоси, поэтому полуоси сортируются:
// иначе при b > a под корнем оказалось бы отрицательное число.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const a0 = toNumber(inputs.a);
  const b0 = toNumber(inputs.b);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(a0 > 0) || !(b0 > 0)) return fail('Обе полуоси должны быть больше нуля');

  const a = Math.max(a0, b0);
  const b = Math.min(a0, b0);
  const perimeter = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  const c = Math.sqrt(a * a - b * b);

  return {
    primary: { label: 'Площадь', value: `${dim(Math.PI * a * b)} ${unit}²` },
    secondary: [
      { label: 'Периметр (Рамануджан)', value: `${dim(perimeter)} ${unit}` },
      { label: 'Эксцентриситет', value: formatStatistic(c / a, fmtNumber) },
      { label: 'Расстояние между фокусами', value: `${dim(2 * c)} ${unit}` },
      { label: 'Большая полуось', value: `${dim(a)} ${unit}` },
      { label: 'Малая полуось', value: `${dim(b)} ${unit}` },
    ],
  };
};
