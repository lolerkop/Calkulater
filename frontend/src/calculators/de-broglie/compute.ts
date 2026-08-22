import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Длина волны де Бройля: λ = h/(m·v).
//
// Волновые свойства есть у любого тела, но у макроскопических они ничтожны:
// у мяча длина волны выходит на тридцать с лишним порядков меньше атомного
// ядра, и наблюдать её нечем. Поэтому осмысленный диапазон — частицы, и поля
// заданы в их масштабе.
//
// Единицы масштабированы намеренно: масса электрона равна 9,11·10⁻³¹ кг, а
// `String(number)` ниже 10⁻⁶ уходит в показательную запись, которой разбор
// поля не принимает. В единицах 10⁻²⁷ кг электрон записывается как
// 0,00091093837 — обычное десятичное число.
//
// Отличие от калькулятора волны: тот связывает скорость, частоту и длину
// упругой волны. Здесь длина волны берётся из импульса частицы через
// постоянную Планка — величины разной природы.
const PLANCK = 6.62607015e-34;
const MASS_UNIT = 1e-27;
const KM = 1000;

export const compute: CalcFunction = (inputs) => {
  const mass27 = toNumber(inputs.mass27);
  const velocityKmS = toNumber(inputs.velocityKmS);
  const fail = (message: string) => ({
    primary: { label: 'Длина волны', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(mass27 > 0)) return fail('Масса должна быть больше нуля');
  if (!(velocityKmS > 0)) return fail('Скорость должна быть больше нуля');

  const mass = mass27 * MASS_UNIT;
  const velocity = velocityKmS * KM;
  const momentum = mass * velocity;
  const wavelength = PLANCK / momentum;

  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Длина волны', value: q(wavelength, 'м') },
    secondary: [
      { label: 'Импульс', value: q(momentum, 'кг·м/с') },
      { label: 'Частота', value: q(velocity / wavelength, 'Гц') },
      { label: 'В нанометрах', value: q(wavelength * 1e9, 'нм') },
      { label: 'Кинетическая энергия', value: q((momentum * velocity) / 2, 'Дж') },
    ],
  };
};
