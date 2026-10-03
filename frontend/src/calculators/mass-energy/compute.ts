import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

const C = 299792458;
export const compute: CalcFunction = (inputs) => {
  const grams = readScalar(inputs.massG);
  const fail = (message: string) => ({ primary: { label: 'Энергия покоя', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!Number.isFinite(grams)) return fail(INPUT);
  if (!(grams > 0)) return fail('Масса должна быть больше нуля');
  const kilograms = positiveRatio([grams], [1000]);
  const energy = positiveRatio([grams, C, C], [1000]);
  const kwh = positiveRatio([grams, C, C], [1000, 3.6e6]);
  const tnt = positiveRatio([grams, C, C], [1000, 4.184e9]);
  const millions = positiveRatio([grams, C, C], [1000, 3.6e6, 1e6]);
  if (![energy, kwh, tnt, millions].every(x => Number.isFinite(x) && x > 0)) return fail(RANGE);
  return { primary: { label: 'Энергия покоя', value: `${formatQuantity(energy, fmtNumber)} Дж` }, secondary: [
    { label: 'В киловатт-часах', value: `${formatQuantity(kwh, fmtNumber)} кВт·ч` },
    { label: 'В тоннах тротилового эквивалента', value: `${formatQuantity(tnt, fmtNumber)} т` },
    { label: 'Масса', value: kilograms > 0 ? `${formatQuantity(kilograms, fmtNumber)} кг` : 'Ненулевое значение меньше числового диапазона' },
    { label: 'В миллионах киловатт-часов', value: `${formatQuantity(millions, fmtNumber)} млн кВт·ч` },
  ], note: 'Это энергия покоя mc², а не выход топлива или доступная электрическая энергия.' };
};
