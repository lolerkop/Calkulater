import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Прогиб балки на двух опорах.
//
// Две схемы дают разные формулы И разный смысл единицы нагрузки: при
// равномерной нагрузка распределена и задаётся в килоньютонах НА МЕТР, при
// сосредоточенной это одна сила в килоньютонах. Поэтому подпись поля нагрузки
// меняется вместе с режимом — иначе число вводили бы не в той размерности.
//
// Жёсткость EI собирается из модуля упругости в гигапаскалях и момента инерции
// сечения в сантиметрах в четвёртой степени: именно так их печатают в
// справочниках сортамента, и переводить их руками — лишний источник ошибки.
const GPA = 1e9;
const CM4 = 1e-8;
const KN = 1000;
const M_IN_MM = 1000;
const DEFLECTION_LIMIT = 250;

export const compute: CalcFunction = (inputs) => {
  const scheme = toStr(inputs.scheme, 'uniform');
  const load = toNumber(inputs.load);
  const span = toNumber(inputs.span);
  const e = toNumber(inputs.e);
  const inertia = toNumber(inputs.inertia);
  const fail = (message: string) => ({
    primary: { label: 'Прогиб', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (scheme !== 'uniform' && scheme !== 'point') return fail('Выберите схему нагружения из списка');
  if (!(load > 0)) return fail('Нагрузка должна быть больше нуля');
  if (!(span > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(e > 0)) return fail('Модуль упругости должен быть больше нуля');
  if (!(inertia > 0)) return fail('Момент инерции сечения должен быть больше нуля');

  const ei = e * GPA * inertia * CM4;
  const metres = scheme === 'uniform'
    ? (5 * load * KN * Math.pow(span, 4)) / (384 * ei)
    : (load * KN * Math.pow(span, 3)) / (48 * ei);
  const mm = metres * M_IN_MM;

  return {
    primary: { label: 'Прогиб', value: `${formatMeasure(mm, fmtNumber)} мм` },
    secondary: [
      { label: 'Относительный прогиб', value: `1/${formatMeasure((span * M_IN_MM) / mm, fmtNumber)}` },
      { label: 'Жёсткость EI', value: `${formatQuantity(ei, fmtNumber)} Н·м²` },
      { label: 'Пролёт', value: `${formatMeasure(span, fmtNumber)} м` },
      { label: 'Предел 1/250', value: `${formatMeasure((span * M_IN_MM) / DEFLECTION_LIMIT, fmtNumber)} мм` },
    ],
  };
};
