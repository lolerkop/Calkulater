import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity, formatStatistic } from '../../lib/platform/measurement';

// Делитель напряжения на двух резисторах:
//
//   Uout = Uin · R₂/(R₁ + R₂),  I = Uin/(R₁ + R₂),  P = I²·R
//
// Доля определяется ТОЛЬКО отношением плеч, а не их номиналами: 10 к и 4,7 к
// делят так же, как 100 к и 47 к. Номиналы решают другое — ток, а значит
// рассеиваемую мощность и то, насколько делитель просядет под нагрузкой.
//
// Отсюда главное ограничение, названное прямо: формула верна для делителя БЕЗ
// нагрузки. Как только к нижнему плечу подключено что-то с сопротивлением
// одного порядка, оно становится третьим резистором, и выходное напряжение
// падает ниже расчётного. Делитель годится как опора для входа с высоким
// сопротивлением, но не как источник питания.
//
// Ток и мощности показываются в миллиамперах и милливаттах: в делителе на
// килоомах это доли миллиампера, и амперы с ваттами дали бы ряд нулей.
export const compute: CalcFunction = (inputs) => {
  const vin = toNumber(inputs.vin);
  const r1 = toNumber(inputs.r1);
  const r2 = toNumber(inputs.r2);
  const fail = (message: string) => ({
    primary: { label: 'Выходное напряжение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(r1 > 0)) return fail('Верхнее сопротивление должно быть больше нуля');
  if (!(r2 > 0)) return fail('Нижнее сопротивление должно быть больше нуля');

  const total = r1 + r2;
  const current = vin / total;
  const vout = (vin * r2) / total;
  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Выходное напряжение', value: `${formatMeasure(vout, fmtNumber)} В` },
    secondary: [
      { label: 'Ток через делитель', value: q(current * 1000, 'мА') },
      { label: 'Доля от входного', value: `${formatStatistic((r2 / total) * 100, fmtNumber)} %` },
      { label: 'Мощность верхнего плеча', value: q(current * current * r1 * 1000, 'мВт') },
      { label: 'Мощность нижнего плеча', value: q(current * current * r2 * 1000, 'мВт') },
    ],
  };
};
