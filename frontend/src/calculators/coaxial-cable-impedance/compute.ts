import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Волновое сопротивление коаксиального кабеля задаётся ТОЛЬКО геометрией и
// диэлектриком — ни длина, ни частота в него не входят. Это и есть причина,
// по которой пятидесятиомный кабель остаётся пятидесятиомным и на метре, и на
// сотне метров.
//
// Отношение диаметров печатается отдельно, потому что именно оно определяет
// сопротивление: 3,6 для полиэтилена даёт классические 50 Ом, 8,8 — 75 Ом.
// Коэффициент укорочения объясняет, почему отрезок кабеля «электрически» длиннее
// своей физической длины, и именно он нужен при нарезке четвертьволновых
// отрезков.
const K = 138;
const EPS0 = 8.8541878128e-12;
const C_LIGHT = 299792458;
const PF = 1e12;
const NS = 1e9;

export const compute: CalcFunction = (inputs) => {
  const inner = toNumber(inputs.dIn);
  const outer = toNumber(inputs.dOut);
  const permittivity = toNumber(inputs.eps);
  const fail = (message: string) => ({
    primary: { label: 'Волновое сопротивление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(inner > 0)) return fail('Диаметр жилы должен быть больше нуля');
  if (!(outer > 0)) return fail('Внешний диаметр должен быть больше нуля');
  if (!(permittivity >= 1)) return fail('Диэлектрическая проницаемость не может быть меньше единицы');
  if (!(outer > inner)) return fail('Внешний диаметр должен быть больше внутреннего');

  const ratio = outer / inner;
  const impedance = (K / Math.sqrt(permittivity)) * Math.log10(ratio);
  const capacitance = ((2 * Math.PI * EPS0 * permittivity) / Math.log(ratio)) * PF;
  const velocityFactor = 1 / Math.sqrt(permittivity);

  return {
    primary: { label: 'Волновое сопротивление', value: `${formatMeasure(impedance, fmtNumber)} Ом` },
    secondary: [
      { label: 'Ёмкость на метр', value: `${formatMeasure(capacitance, fmtNumber)} пФ/м` },
      { label: 'Коэффициент укорочения', value: formatMeasure(velocityFactor, fmtNumber) },
      { label: 'Задержка на метр', value: `${formatMeasure((1 / (velocityFactor * C_LIGHT)) * NS, fmtNumber)} нс/м` },
      { label: 'Отношение диаметров', value: formatMeasure(ratio, fmtNumber) },
    ],
  };
};
