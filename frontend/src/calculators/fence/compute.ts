import { measure as displayMeasure, read, integer, finite, INPUT, RANGE, INTEGER, mul, quotient, decimal, ceilDecimal } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length);
  const span = read(inputs.span);
  const height = read(inputs.height);
  const rails = integer(inputs.rails);
  const gates = integer(inputs.gates);
  const fail = (message: string) => ({
    primary: { label: 'Столбов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(length,span,height)) return fail(INPUT);
  if (!finite(rails,gates)) return fail(INTEGER);
  if (!(length > 0)) return fail('Длина забора должна быть больше нуля');
  if (!(span > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(height > 0)) return fail('Высота должна быть больше нуля');
  if (!Number.isInteger(rails) || rails < 1 || rails > 5) return fail('Лаг должно быть от одной до пяти');
  if (!Number.isInteger(gates) || gates < 0) return fail('Число проёмов не может быть отрицательным');

  const sections = ceilDecimal(decimal(length),decimal(span));
  if (!Number.isFinite(sections) || sections > Number.MAX_SAFE_INTEGER - 1 - gates) return fail(RANGE);
  const posts = sections + 1 + gates;
  const railMeters = mul(sections,span,rails);
  const area = mul(length,height);
  const actualStep = quotient([length],[sections]);
  if (!finite(railMeters,area,actualStep)) return fail(RANGE);
  const measure = (x: number) => displayMeasure(x);

  return {
    primary: { label: 'Столбов', value: fmtNumber(posts, 0) },
    secondary: [
      { label: 'Секций', value: fmtNumber(sections, 0) },
      { label: 'Метров лаг', value: measure(railMeters) },
      { label: 'Площадь зашивки', value: `${measure(area)} м²` },
      { label: 'Пролёт', value: `${measure(span)} м` },
      { label: 'Фактический шаг столбов', value: `${measure(actualStep)} м` },
    ],
  };
};
