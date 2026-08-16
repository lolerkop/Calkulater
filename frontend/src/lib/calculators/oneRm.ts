import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber } from '../format';

// Формула Эпли: 1RM = w * (1 + r/30)
export function oneRepMax(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

export const calcOneRm: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const reps = Math.round(toNumber(inputs.reps));

  if (weight <= 0 || reps <= 0) {
    return {
      primary: { label: 'Примерный 1ПМ', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите вес и количество повторений', accent: 'red' }],
    };
  }

  const orm = oneRepMax(weight, reps);
  const brzycki = reps >= 37 ? orm : weight * (36 / (37 - reps));
  // Знаменатель Лэндера обращается в ноль при reps = 101,3 / 2,67123 ≈ 37,92 и
  // дальше меняет знак, поэтому за полюсом формула выдавала отрицательный 1ПМ:
  // при 38 повторениях — минус 484 рабочих веса, и вместе с ним уходила в минус
  // средняя оценка. Форма ограничивает повторения двенадцатью, но раннер —
  // чистая функция с более широким входом, и её область определения задаёт сама
  // формула. Проверяется поэтому знаменатель, а не подобранный порог; вне
  // области берётся оценка Эпли — ровно так же строкой выше поступает Бжицки на
  // своём полюсе при 37 повторениях.
  const landerDenominator = 101.3 - 2.67123 * reps;
  const lander = landerDenominator > 0 ? (100 * weight) / landerDenominator : orm;
  const average = (orm + brzycki + lander) / 3;

  return {
    primary: { label: 'Примерный 1ПМ', value: `${fmtNumber(orm, 1)} кг` },
    secondary: [
      { label: '50% от 1ПМ', value: `${fmtNumber(orm * 0.5, 1)} кг` },
      { label: '60% от 1ПМ', value: `${fmtNumber(orm * 0.6, 1)} кг` },
      { label: '70% от 1ПМ', value: `${fmtNumber(orm * 0.7, 1)} кг` },
      { label: '80% от 1ПМ', value: `${fmtNumber(orm * 0.8, 1)} кг` },
      { label: '90% от 1ПМ', value: `${fmtNumber(orm * 0.9, 1)} кг` },
      { label: 'Формула Бжицки', value: `${fmtNumber(brzycki, 1)} кг` },
      { label: 'Формула Лэндера', value: `${fmtNumber(lander, 1)} кг` },
      { label: 'Средняя оценка', value: `${fmtNumber(average, 1)} кг`, accent: 'green' },
    ],
    note: reps > 10 ? 'Точность формулы снижается при повторениях больше 10.' : undefined,
  };
};
