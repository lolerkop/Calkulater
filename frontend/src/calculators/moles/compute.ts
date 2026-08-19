import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Количество вещества: n = m / M, число частиц N = n · N_A.
//
// N_A = 6,02214076·10²³ моль⁻¹ — точное значение по определению СИ 2019 года,
// а не измеренная величина, поэтому округлять его в расчёте нечего.
// Молярная масса вводится как обычное число: состав вещества калькулятор
// не разбирает и справочником не притворяется.

const AVOGADRO = 6.02214076e23;
const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'mass');
  const molarMass = toNumber(inputs.molarMass);
  const fail = (message: string) => ({
    primary: { label: 'Количество вещества', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(molarMass > 0)) return fail('Молярная масса должна быть больше нуля');

  if (mode === 'amount') {
    const moles = toNumber(inputs.moles);
    if (!(moles > 0)) return fail('Количество вещества должно быть больше нуля');
    return {
      primary: { label: 'Масса', value: `${qty(moles * molarMass)} г` },
      secondary: [
        { label: 'Количество вещества', value: `${qty(moles)} моль` },
        { label: 'Число частиц', value: qty(moles * AVOGADRO) },
      ],
    };
  }

  const mass = toNumber(inputs.mass);
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  const moles = mass / molarMass;
  return {
    primary: { label: 'Количество вещества', value: `${qty(moles)} моль` },
    secondary: [
      { label: 'Число частиц', value: qty(moles * AVOGADRO) },
      { label: 'Молярная масса', value: `${qty(molarMass)} г/моль` },
    ],
  };
};
