import type { CalcFunction } from '../types';
import { fmtNumber, toNumber } from '../format';

// Формула Эпли: 1RM = w * (1 + r/30)
export function oneRepMax(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

export const calcOneRm: CalcFunction = (inputs) => {
  const read = (value: unknown) => typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const weight = read(inputs.weight);
  const reps = read(inputs.reps);

  if (!Number.isFinite(weight) || weight <= 0 || !Number.isInteger(reps) || reps < 1 || reps > 12) {
    return {
      primary: { label: 'Примерный 1ПМ', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите конечный вес больше нуля и целое число повторений от 1 до 12', accent: 'red' }],
    };
  }

  const orm = oneRepMax(weight, reps);
  // The form and runner share a product range of 1..12. Never substitute
  // Epley under the name of another model when its denominator fails.
  const brzycki = weight * (36 / (37 - reps));
  const lander = weight * (100 / (101.3 - 2.67123 * reps));
  const scale = Math.max(orm, brzycki, lander);
  const average = scale * ((orm / scale + brzycki / scale + lander / scale) / 3);
  if (![orm, brzycki, lander, average].every((x) => Number.isFinite(x) && x > 0)) return {
    primary: { label: 'Примерный 1ПМ', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: 'Результат выходит за числовой диапазон', accent: 'red' }],
  };
  const display = (x: number) => x < 0.05 ? x.toExponential(2) : fmtNumber(x, 1);

  return {
    primary: { label: 'Примерный 1ПМ', value: `${display(orm)} кг` },
    secondary: [
      { label: '50% от 1ПМ', value: `${display(orm * 0.5)} кг` },
      { label: '60% от 1ПМ', value: `${display(orm * 0.6)} кг` },
      { label: '70% от 1ПМ', value: `${display(orm * 0.7)} кг` },
      { label: '80% от 1ПМ', value: `${display(orm * 0.8)} кг` },
      { label: '90% от 1ПМ', value: `${display(orm * 0.9)} кг` },
      { label: 'Формула Бжицки', value: `${display(brzycki)} кг` },
      { label: 'Формула Лэндера', value: `${display(lander)} кг` },
      { label: 'Средняя оценка', value: `${display(average)} кг`, accent: 'green' },
    ],
    note: reps > 10 ? 'Точность формулы снижается при повторениях больше 10.' : undefined,
  };
};
