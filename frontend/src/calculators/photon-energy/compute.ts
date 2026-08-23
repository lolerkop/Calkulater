import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Энергия фотона: E = hc/λ.
//
// Величина крошечная — у видимого света порядка 10⁻¹⁹ джоуля, — поэтому главный
// ответ печатается показательной записью, а рядом даётся тот же результат в
// электронвольтах: именно в них энергию фотона и обсуждают, потому что там она
// выходит числом порядка единицы.
//
// Длина волны задаётся в нанометрах: видимый свет это 380–780 нм, и вводить
// 5,5·10⁻⁷ метра поле не приняло бы — показательную запись парсер отвергает.
const PLANCK = 6.62607015e-34;
const LIGHT = 299792458;
const ELECTRONVOLT = 1.602176634e-19;
const NM = 1e-9;
const NM_IN_CM = 1e-7;

export const compute: CalcFunction = (inputs) => {
  const wavelengthNm = toNumber(inputs.wavelengthNm);
  const fail = (message: string) => ({
    primary: { label: 'Энергия фотона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(wavelengthNm > 0)) return fail('Длина волны должна быть больше нуля');

  const lambda = wavelengthNm * NM;
  const energy = (PLANCK * LIGHT) / lambda;

  return {
    primary: { label: 'Энергия фотона', value: `${formatQuantity(energy, fmtNumber)} Дж` },
    secondary: [
      { label: 'В электронвольтах', value: `${formatMeasure(energy / ELECTRONVOLT, fmtNumber)} эВ` },
      { label: 'Частота', value: `${formatQuantity(LIGHT / lambda, fmtNumber)} Гц` },
      { label: 'Волновое число', value: `${formatMeasure(1 / (wavelengthNm * NM_IN_CM), fmtNumber)} 1/см` },
      { label: 'Длина волны', value: `${formatMeasure(wavelengthNm, fmtNumber)} нм` },
    ],
  };
};
