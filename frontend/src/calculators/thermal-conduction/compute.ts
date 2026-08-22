import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Теплопередача через плоский слой.
//
//   Q = λ·A·ΔT / d        поток через слой, Вт
//   R = d / λ             термическое сопротивление, м²·К/Вт
//   U = 1 / R             коэффициент теплопередачи, Вт/(м²·К)
//   q = λ·ΔT / d          плотность потока, Вт/м²
//
// Считается ОДИН слой и только теплопроводность: конвекция у поверхностей и
// излучение сюда не входят, поэтому у тонкого стекла сопротивление выходит
// исчезающе малым — настоящее окно держит тепло приграничными плёнками воздуха
// и воздушной прослойкой стеклопакета, а не самим стеклом.
//
// Отличие от расчёта мощности отопления: там считается, сколько тепла нужно
// подать в помещение по его объёму, здесь — сколько уходит через конкретную
// конструкцию по её теплопроводности.
export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const thickness = toNumber(inputs.thickness);
  const k = toNumber(inputs.k);
  const dt = toNumber(inputs.dt);
  const fail = (message: string) => ({
    primary: { label: 'Тепловой поток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(k > 0)) return fail('Теплопроводность должна быть больше нуля');

  const resistance = thickness / k;
  const flux = (k * dt) / thickness;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Тепловой поток', value: q(flux * area, 'Вт') },
    secondary: [
      { label: 'Плотность потока', value: q(flux, 'Вт/м²') },
      { label: 'Сопротивление слоя', value: q(resistance, 'м²·К/Вт') },
      { label: 'Коэффициент теплопередачи', value: q(1 / resistance, 'Вт/(м²·К)') },
      { label: 'За сутки', value: q((flux * area * 24) / 1000, 'кВт·ч') },
    ],
  };
};
