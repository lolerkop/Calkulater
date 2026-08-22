import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Резонанс LC-контура: f = 1 / (2π√(LC)).
//
// Индуктивность в микрогенри, ёмкость в нанофарадах — так их печатают на
// корпусах и в схемах; генри и фарады пришлось бы записывать показательной
// формой, которую поле ввода не принимает.
//
// В формулу входит только ПРОИЗВЕДЕНИЕ L·C, поэтому 100 мкГн с 100 нФ и
// 10 мкГн с 1000 нФ дают одну и ту же частоту. Различает их волновое
// сопротивление √(L/C): именно оно определяет, какой ток пойдёт в контуре и
// какое напряжение на нём поднимется, и потому вынесено отдельной строкой.
const MICRO = 1e-6;
const NANO = 1e-9;
const KILO = 1000;

export const compute: CalcFunction = (inputs) => {
  const microHenry = toNumber(inputs.l);
  const nanoFarad = toNumber(inputs.c);
  const fail = (message: string) => ({
    primary: { label: 'Резонансная частота', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(microHenry > 0)) return fail('Индуктивность должна быть больше нуля');
  if (!(nanoFarad > 0)) return fail('Ёмкость должна быть больше нуля');

  const l = microHenry * MICRO;
  const c = nanoFarad * NANO;
  const freq = 1 / (2 * Math.PI * Math.sqrt(l * c));
  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Резонансная частота', value: q(freq, 'Гц') },
    secondary: [
      { label: 'В килогерцах', value: q(freq / KILO, 'кГц') },
      { label: 'Период', value: q(1 / freq, 'с') },
      { label: 'Волновое сопротивление', value: q(Math.sqrt(l / c), 'Ом') },
      { label: 'Индуктивность', value: `${formatMeasure(microHenry, fmtNumber)} мкГн` },
    ],
  };
};
