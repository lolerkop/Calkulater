import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Плотность: ρ = m ÷ V.
//
// Это НЕ перевод единиц. Соседняя страница convert-density переводит кг/м³ в
// г/см³ и обратно; здесь величина вычисляется из массы и объёма по определению.
// Обе задачи встречаются вместе, но вопросы разные, и смешивать их не нужно.

const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'rho');
  const fail = (message: string) => ({
    primary: { label: 'Плотность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let m = 0;
  let v = 0;
  let rho = 0;
  let primaryLabel = 'Плотность';
  if (mode === 'rho') {
    m = toNumber(inputs.m);
    v = toNumber(inputs.V);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (!(v > 0)) return fail('Объём должен быть больше нуля');
    rho = m / v;
  } else if (mode === 'm') {
    rho = toNumber(inputs.rho);
    v = toNumber(inputs.V2);
    if (!(rho > 0)) return fail('Плотность должна быть больше нуля');
    if (!(v > 0)) return fail('Объём должен быть больше нуля');
    m = rho * v;
    primaryLabel = 'Масса';
  } else {
    m = toNumber(inputs.m2);
    rho = toNumber(inputs.rho2);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (!(rho > 0)) return fail('Плотность должна быть больше нуля');
    v = m / rho;
    primaryLabel = 'Объём';
  }

  const primaryValue = mode === 'rho' ? `${qty(rho)} кг/м³` : mode === 'm' ? `${qty(m)} кг` : `${qty(v)} м³`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Плотность', value: `${qty(rho)} кг/м³` },
      { label: 'Масса', value: `${qty(m)} кг` },
      { label: 'Объём', value: `${qty(v)} м³` },
      { label: 'В граммах на кубический сантиметр', value: `${qty(rho / 1000)} г/см³` },
    ],
  };
};
