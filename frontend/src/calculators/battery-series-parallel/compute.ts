import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Сборка аккумуляторов: что даёт последовательное и параллельное соединение.
//
//   напряжение = напряжение ячейки × число последовательных
//   ёмкость    = ёмкость ячейки    × число параллельных
//   энергия    = напряжение × ёмкость
//
// Последовательное соединение складывает НАПРЯЖЕНИЯ, параллельное —
// ЁМКОСТИ, и перепутать их дорого: сборка 4S3P и сборка 3S4P из тех же
// двенадцати ячеек дают 14,8 В при 10,2 А·ч и 11,1 В при 13,6 А·ч. Энергия
// у них одинакова, а вот подойдут они разным устройствам.
//
// Схема обязана сходиться с числом ячеек: последовательных × параллельных
// должно равняться общему количеству. Расхождение означает ошибку в схеме,
// а не необычную сборку, и молча пересчитывать его нельзя.
export const compute: CalcFunction = (inputs) => {
  const cells = Math.floor(toNumber(inputs.cells));
  const cellVoltage = toNumber(inputs.cellVoltage);
  const cellCapacity = toNumber(inputs.cellCapacity);
  const series = Math.floor(toNumber(inputs.series));
  const parallel = Math.floor(toNumber(inputs.parallel));

  const fail = (message: string) => ({
    primary: { label: 'Напряжение сборки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(cells >= 1)) return fail('Ячеек должно быть не меньше одной');
  if (!(cellVoltage > 0)) return fail('Напряжение ячейки должно быть больше нуля');
  if (!(cellCapacity > 0)) return fail('Ёмкость ячейки должна быть больше нуля');
  if (!(series >= 1) || !(parallel >= 1)) return fail('Число групп должно быть не меньше одной');
  if (series * parallel !== cells) return fail('Последовательных × параллельных должно равняться числу ячеек');

  const voltage = cellVoltage * series;
  const capacity = cellCapacity * parallel;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Напряжение сборки', value: q(voltage, 'В') },
    secondary: [
      { label: 'Ёмкость сборки', value: q(capacity, 'А·ч') },
      { label: 'Энергия', value: q(voltage * capacity, 'Вт·ч') },
      { label: 'Ячеек', value: fmtNumber(cells, 0) },
    ],
  };
};
