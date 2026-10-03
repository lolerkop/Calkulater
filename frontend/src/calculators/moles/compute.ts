import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Количество вещества: n = m / M, число частиц N = n · N_A.
//
// N_A = 6,02214076·10²³ моль⁻¹ — точное значение по определению СИ 2019 года,
// а не измеренная величина. Машинная арифметика и показ всё же округляются.
// Молярная масса вводится как обычное число: состав вещества калькулятор
// не разбирает и справочником не притворяется.

const AVOGADRO = 6.02214076e23;
const qty = (value: number): string => formatQuantity(value === 0 ? 0 : value, fmtNumber);
const number = (value: unknown): number | null => typeof value === 'number' || typeof value === 'string' ? parseLocalizedNumber(value) : null;
const positive = (value: number | null): value is number => value !== null && value > 0;
const validResult = (value: number, nonzero: boolean): boolean => Number.isFinite(value) && value >= 0 && (!nonzero || value > 0);

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'mass' : inputs.mode;
  const molarMass = number(inputs.molarMass);
  const fail = (message: string) => ({
    primary: { label: 'Количество вещества', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'mass' && mode !== 'amount') return fail('Неизвестный режим расчёта');
  if (!positive(molarMass)) return fail('Молярная масса должна быть конечным числом больше нуля');

  if (mode === 'amount') {
    const moles = number(inputs.moles);
    if (moles === null || moles < 0) return fail('Количество вещества должно быть конечным неотрицательным числом');
    const mass = moles * molarMass;
    const particles = moles * AVOGADRO;
    if (!validResult(mass, moles > 0) || !validResult(particles, moles > 0)) return fail('Результат вне допустимого диапазона');
    return {
      primary: { label: 'Масса', value: `${qty(mass)} г` },
      secondary: [
        { label: 'Количество вещества', value: `${qty(moles)} моль` },
        { label: 'Число частиц', value: qty(particles) },
      ],
    };
  }

  const mass = number(inputs.mass);
  if (mass === null || mass < 0) return fail('Масса должна быть конечным неотрицательным числом');
  const moles = mass / molarMass;
  const particles = moles * AVOGADRO;
  if (!validResult(moles, mass > 0) || !validResult(particles, mass > 0)) return fail('Результат вне допустимого диапазона');
  return {
    primary: { label: 'Количество вещества', value: `${qty(moles)} моль` },
    secondary: [
      { label: 'Число частиц', value: qty(particles) },
      { label: 'Молярная масса', value: `${qty(molarMass)} г/моль` },
    ],
  };
};
