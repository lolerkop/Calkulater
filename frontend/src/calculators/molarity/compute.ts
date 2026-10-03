import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Молярная концентрация: C = n / V, где объём берётся в литрах.
//
// Отношение считается до масштабирования объёма, если это сохраняет диапазон.
// Непредставимый промежуточный перевод объёма не превращает ответ в нуль.

const qty = (value: number): string => formatQuantity(value === 0 ? 0 : value, fmtNumber);
const TO_LITRES: Record<string, number> = { ml: 0.001, l: 1, m3: 1000 };
const VOLUME_SYMBOL: Record<string, string> = { ml: 'мл', l: 'л', m3: 'м³' };
const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const positive = (value: number | null): value is number => value !== null && value > 0;

function concentration(amount: number, volume: number, scale: number): number | undefined {
  if (amount === 0) return 0;
  return [(amount / volume) / scale, (amount / scale) / volume, amount / (volume * scale)]
    .find(value => Number.isFinite(value) && value > 0);
}

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'moles' : inputs.mode;
  const unit = inputs.volumeUnit === undefined ? 'l' : inputs.volumeUnit;
  const fail = (message: string) => ({
    primary: { label: 'Молярная концентрация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'moles' && mode !== 'mass') return fail('Неизвестный режим расчёта');
  if (typeof unit !== 'string' || !Object.hasOwn(TO_LITRES, unit)) return fail('Неизвестная единица объёма');
  const rawVolume = number(inputs.volume);
  if (!positive(rawVolume)) return fail('Объём должен быть конечным числом больше нуля');

  let moles: number;
  if (mode === 'mass') {
    const mass = number(inputs.mass);
    const molarMass = number(inputs.molarMass);
    if (mass === null || mass < 0) return fail('Масса должна быть конечным неотрицательным числом');
    if (!positive(molarMass)) return fail('Молярная масса должна быть конечным числом больше нуля');
    moles = mass / molarMass;
    if (mass > 0 && moles === 0) return fail('Результат вне допустимого диапазона');
  } else {
    const amount = number(inputs.moles);
    if (amount === null || amount < 0) return fail('Количество вещества должно быть конечным неотрицательным числом');
    moles = amount;
  }
  if (!Number.isFinite(moles)) return fail('Результат вне допустимого диапазона');
  const scale = TO_LITRES[unit];
  const result = concentration(moles, rawVolume, scale);
  if (result === undefined) return fail('Результат вне допустимого диапазона');
  const volume = rawVolume * scale;
  const volumeText = Number.isFinite(volume) && volume > 0
    ? `${qty(volume)} л`
    : `${qty(rawVolume)} ${VOLUME_SYMBOL[unit]}`;

  return {
    primary: { label: 'Молярная концентрация', value: `${qty(result)} моль/л` },
    secondary: [
      { label: 'Количество вещества', value: `${qty(moles)} моль` },
      { label: 'Объём раствора', value: volumeText },
    ],
  };
};
