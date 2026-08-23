import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Громкость наушников: паспортная чувствительность плюс прибавка от мощности.
//
// Чувствительность в децибелах на милливатт — это уровень звукового давления
// при подведённом милливатте. Каждое удвоение мощности прибавляет ровно 3 дБ,
// поэтому прибавка равна 10·log₁₀(P), и десятикратная мощность даёт ровно
// десять децибел.
//
// Напряжение и ток выводятся из мощности и импеданса: именно они, а не
// мощность, ограничивают выход усилителя, и по ним видно, хватит ли его
// высокоомным наушникам.
const MW_IN_W = 1000;
const A_IN_MA = 1000;

export const compute: CalcFunction = (inputs) => {
  const sensitivity = toNumber(inputs.sensitivity);
  const impedance = toNumber(inputs.impedance);
  const power = toNumber(inputs.power);
  const fail = (message: string) => ({
    primary: { label: 'Звуковое давление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(sensitivity > 0)) return fail('Чувствительность должна быть больше нуля');
  if (!(impedance > 0)) return fail('Импеданс должен быть больше нуля');
  if (!(power > 0)) return fail('Подводимая мощность должна быть больше нуля');

  const gain = 10 * Math.log10(power);
  const watts = power / MW_IN_W;

  return {
    primary: { label: 'Звуковое давление', value: `${formatMeasure(sensitivity + gain, fmtNumber)} дБ` },
    secondary: [
      { label: 'Прибавка от мощности', value: `${formatMeasure(gain, fmtNumber)} дБ` },
      { label: 'Напряжение на выходе', value: `${formatMeasure(Math.sqrt(watts * impedance), fmtNumber)} В` },
      { label: 'Ток', value: `${formatMeasure(Math.sqrt(watts / impedance) * A_IN_MA, fmtNumber)} мА` },
      { label: 'Импеданс', value: `${formatMeasure(impedance, fmtNumber)} Ом` },
    ],
  };
};
