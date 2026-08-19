import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Молярная концентрация: C = n / V, где объём берётся в литрах.
//
// Объём приводится к литрам ДО подстановки в формулу: миллилитры и кубометры
// выбираются в списке, и без явного перевода расчёт молча дал бы число,
// отличающееся в тысячу раз и при этом выглядящее правдоподобно.

const qty = (value: number): string => formatQuantity(value, fmtNumber);
const TO_LITRES: Record<string, number> = { ml: 0.001, l: 1, m3: 1000 };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'moles');
  const volume = toNumber(inputs.volume) * (TO_LITRES[toStr(inputs.volumeUnit, 'l')] ?? 1);
  const fail = (message: string) => ({
    primary: { label: 'Молярная концентрация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(volume > 0)) return fail('Объём должен быть больше нуля');

  let moles: number;
  if (mode === 'mass') {
    const mass = toNumber(inputs.mass);
    const molarMass = toNumber(inputs.molarMass);
    if (!(mass > 0)) return fail('Масса должна быть больше нуля');
    if (!(molarMass > 0)) return fail('Молярная масса должна быть больше нуля');
    moles = mass / molarMass;
  } else {
    moles = toNumber(inputs.moles);
    if (!(moles > 0)) return fail('Количество вещества должно быть больше нуля');
  }

  return {
    primary: { label: 'Молярная концентрация', value: `${qty(moles / volume)} моль/л` },
    secondary: [
      { label: 'Количество вещества', value: `${qty(moles)} моль` },
      { label: 'Объём раствора', value: `${qty(volume)} л` },
    ],
  };
};
