import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Рабочий объём: V = π/4 · D² · S · n.
//
// Диаметр и ход задаются в миллиметрах, потому что именно так их печатают в
// каталогах и на блоке цилиндров; кубические миллиметры переводятся в
// кубические сантиметры делением на тысячу. Отношение хода к диаметру выведено
// отдельной строкой: оно отличает длинноходный мотор от короткоходного лучше,
// чем сам объём, и объясняет разный характер двух двигателей одного литража.
//
// Цилиндры — целое число: половины цилиндра не бывает, и дробное значение
// означало бы опечатку, а не необычный мотор.
const MM3_IN_CM3 = 1000;
const CM3_IN_LITRE = 1000;

export const compute: CalcFunction = (inputs) => {
  const bore = toNumber(inputs.bore);
  const stroke = toNumber(inputs.stroke);
  const cylinders = toNumber(inputs.cylinders);
  const fail = (message: string) => ({
    primary: { label: 'Рабочий объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(bore > 0)) return fail('Диаметр цилиндра должен быть больше нуля');
  if (!(stroke > 0)) return fail('Ход поршня должен быть больше нуля');
  if (!(cylinders >= 1) || !Number.isInteger(cylinders)) return fail('Цилиндров должно быть целое число, не меньше одного');

  const one = (Math.PI / 4) * bore * bore * stroke / MM3_IN_CM3;
  const total = one * cylinders;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Рабочий объём', value: m(total, 'см³') },
    secondary: [
      { label: 'Объём одного цилиндра', value: m(one, 'см³') },
      { label: 'В литрах', value: m(total / CM3_IN_LITRE, 'л') },
      { label: 'Отношение хода к диаметру', value: formatMeasure(stroke / bore, fmtNumber) },
      { label: 'Цилиндров', value: `${fmtInt(cylinders)} шт` },
    ],
  };
};
