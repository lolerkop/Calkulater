import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Кулинарный перевод объёма в массу и обратно.
//
// Плотности — общепринятые кулинарные величины в г/мл. Они собственные, а не
// внешние: таблица фиксированных приблизительных значений. Использованная
// плотность всегда выводится; источник не аттестован как таблица точных свойств.
//
// Чашка здесь явно выбрана как 240 мл. Это не метрическая чашка 250 мл
// и не US customary cup 236,5882365 мл; коэффициент сохраняется.

const DENSITY: Record<string, number> = {
  water: 1, milk: 1.03, flour: 0.53, sugar: 0.85, salt: 1.2,
  rice: 0.85, oil: 0.92, honey: 1.42, butter: 0.91,
};
const VOLUME: Record<string, number> = { ml: 1, l: 1000, cup: 240, tbsp: 15, tsp: 5 };

export const compute: CalcFunction = (inputs) => {
  const value = typeof inputs.value === 'number' ? inputs.value
    : typeof inputs.value === 'string' && inputs.value.trim() ? parseLocalizedNumber(inputs.value) : null;
  const unit = inputs.unit === undefined ? 'cup' : inputs.unit;
  const product = inputs.product === undefined ? 'flour' : inputs.product;
  const direction = inputs.direction === undefined ? 'toGrams' : inputs.direction;
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (typeof product !== 'string' || !Object.hasOwn(DENSITY, product)) return fail('Неизвестный продукт');
  if (typeof unit !== 'string' || !Object.hasOwn(VOLUME, unit)) return fail('Неизвестная единица объёма');
  if (direction !== 'toGrams' && direction !== 'toVolume') return fail('Неизвестное направление');
  if (value === null || !Number.isFinite(value)) return fail('Введите конечное число');
  if (value < 0) return fail('Значение не может быть отрицательным');
  const density = DENSITY[product];
  const factor = VOLUME[unit];

  const measure = (x: number) => formatQuantity(x, fmtNumber);
  const ml = direction === 'toGrams' ? value * factor : value / density;
  const result = direction === 'toGrams' ? value * (factor * density) : value / (density * factor);
  if (![ml, result].every(Number.isFinite) || (value > 0 && (ml === 0 || result === 0))) {
    return fail('Результат вне допустимого диапазона');
  }

  return {
    primary: { label: 'Результат', value: measure(result) },
    secondary: [
      { label: 'Плотность продукта', value: `${measure(density)} г/мл` },
      { label: 'В миллилитрах', value: `${measure(ml)} мл` },
      { label: 'Исходное значение', value: measure(value) },
    ],
    note: 'Чашка этого калькулятора — 240 мл. Плотности продуктов приблизительны; результат зависит от состава и способа наполнения мерной посуды.',
  };
};
