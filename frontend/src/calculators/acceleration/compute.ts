import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Равноускоренное движение по прямой.
//
//   a = (v − v₀) / t          ускорение
//   v = v₀ + a · t            конечная скорость (обращение той же связи)
//   s = (v₀ + v) / 2 · t      путь через среднюю скорость
//
// Путь берётся через СРЕДНЮЮ скорость, а не через v₀t + at²/2: при равномерном
// ускорении обе записи тождественны, но первая не требует знать ускорение и
// потому не теряет точность в режиме, где оно только что вычислено делением.
//
// Отрицательные значения здесь законны и осмысленны: торможение — это
// отрицательное ускорение, а движение назад — отрицательная скорость.
// Отклоняется только нулевое время: делить на него нечего.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'a');
  const v0 = toNumber(inputs.v0);
  const t = toNumber(inputs.t);

  const primaryLabel = mode === 'v' ? 'Конечная скорость' : 'Ускорение';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(t > 0)) return fail('Время должно быть больше нуля');

  const v = mode === 'v' ? v0 + toNumber(inputs.a) * t : toNumber(inputs.v);
  const acceleration = (v - v0) / t;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  const rows = [
    { label: 'Изменение скорости', value: q(v - v0, 'м/с') },
    { label: 'Пройденный путь', value: q(((v0 + v) / 2) * t, 'м') },
    { label: 'Время', value: q(t, 'с') },
  ];

  return mode === 'v'
    ? { primary: { label: 'Конечная скорость', value: q(v, 'м/с') }, secondary: rows }
    : { primary: { label: 'Ускорение', value: q(acceleration, 'м/с²') }, secondary: rows };
};
