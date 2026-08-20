import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Куб. Всё выводится из ребра, поэтому обратные режимы сначала восстанавливают
// ребро, а дальше расчёт общий: a = ∛V и a = √(S/6).
//
// В обратных режимах первичный результат — РЕБРО, а не объём. Величина, которую
// посетитель только что ввёл сам, ответом не является, и показывать её крупным
// числом значило бы выдать вопрос за решение.
//
// Диагоналей у куба две разных, и их легко перепутать: диагональ грани a√2
// лежит в плоскости стороны, а диагональ куба a√3 идёт через тело от вершины к
// противоположной. Поэтому обе подписаны явно.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'side');
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const fail = (message: string) => ({
    primary: { label: 'Объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let a = 0;
  if (mode === 'volume') {
    const volume = toNumber(inputs.volume);
    if (!(volume > 0)) return fail('Объём должен быть больше нуля');
    a = Math.cbrt(volume);
  } else if (mode === 'area') {
    const area = toNumber(inputs.area);
    if (!(area > 0)) return fail('Площадь поверхности должна быть больше нуля');
    a = Math.sqrt(area / 6);
  } else {
    a = toNumber(inputs.side);
    if (!(a > 0)) return fail('Ребро должно быть больше нуля');
  }
  if (!Number.isFinite(a)) return fail('Значение слишком велико для расчёта');

  const volume = a * a * a;
  const area = 6 * a * a;
  const rows = [
    { label: 'Площадь поверхности', value: `${dim(area)} ${unit}²` },
    { label: 'Диагональ куба', value: `${dim(a * Math.sqrt(3))} ${unit}` },
    { label: 'Диагональ грани', value: `${dim(a * Math.SQRT2)} ${unit}` },
    { label: 'Сумма рёбер', value: `${dim(12 * a)} ${unit}` },
  ];

  return mode === 'side'
    ? { primary: { label: 'Объём', value: `${dim(volume)} ${unit}³` }, secondary: rows }
    : {
        primary: { label: 'Ребро', value: `${dim(a)} ${unit}` },
        secondary: [{ label: 'Объём', value: `${dim(volume)} ${unit}³` }, ...rows],
      };
};
