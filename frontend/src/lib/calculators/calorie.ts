import type { CalcFunction } from '../types';
import { fmtInt, toNumber } from '../format';

export const calcCalorie: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Дневная оценка энергии', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const read = (value: unknown, fallback = Number.NaN) => value === undefined ? fallback : typeof value === 'number' || typeof value === 'string' && value.trim() !== '' ? toNumber(value, Number.NaN) : Number.NaN;
  const gender = inputs.gender ?? 'male';
  const goal = inputs.goal ?? 'maintain';
  const age = read(inputs.age);
  const height = read(inputs.height);
  const weight = read(inputs.weight);
  const activity = read(inputs.activity, 1.55);
  const goalAdjustment = goal === 'maintain' ? 0 : read(inputs.goalAdjustment, 15);
  const proteinPct = read(inputs.proteinPct, 30);
  const fatPct = read(inputs.fatPct, 25);
  if (gender !== 'male' && gender !== 'female') return fail('Выберите мужскую или женскую формулу');
  if (!['maintain', 'lose', 'gain'].includes(String(goal))) return fail('Выберите цель расчёта');
  if (!Number.isFinite(age) || age < 19 || age > 78 || !Number.isFinite(height) || height <= 0 || !Number.isFinite(weight) || weight <= 0) return fail('Введите возраст от 19 до 78 лет, конечные рост и вес больше нуля');
  if (![1.2, 1.375, 1.55, 1.725, 1.9].includes(activity)) return fail('Выберите коэффициент активности из списка');
  if (!Number.isFinite(goalAdjustment) || goalAdjustment < 0 || goalAdjustment > 30) return fail('Изменение калорий должно быть от 0 до 30 процентов');
  if (![proteinPct, fatPct].every((x) => Number.isFinite(x) && x >= 10 && x <= 60) || proteinPct + fatPct > 100) return fail('Доли белков и жиров должны быть от 10 до 60 процентов каждая и в сумме не больше 100');

  // Simplified Mifflin–St Jeor resting-energy equation (1990). The age range
  // matches the development cohort, not a guarantee of individual accuracy.
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
  const tdee = bmr * activity;
  const adjusted = tdee * (goal === 'lose' ? 1 - goalAdjustment / 100 : goal === 'gain' ? 1 + goalAdjustment / 100 : 1);
  if (![bmr, tdee, adjusted].every((x) => Number.isFinite(x) && x > 0)) return fail('Результат выходит за числовой диапазон');
  const carbsPct = 100 - proteinPct - fatPct;
  const protein = adjusted * (proteinPct / 100 / 4);
  const fat = adjusted * (fatPct / 100 / 9);
  const carbs = adjusted * (carbsPct / 100 / 4);
  const display = (x: number) => x > 0 && x < 0.5 ? x.toExponential(2) : fmtInt(x);
  return {
    primary: { label: 'Дневная оценка энергии', value: `${display(adjusted)} ккал` },
    secondary: [
      { label: 'Расход энергии в покое (REE)', value: `${display(bmr)} ккал` },
      { label: 'Белки', value: `${display(protein)} г` },
      { label: 'Жиры', value: `${display(fat)} г` },
      { label: 'Углеводы', value: `${display(carbs)} г` },
      { label: 'Поддержание веса (TDEE)', value: `${display(tdee)} ккал` },
    ],
    note: 'Это сценарий оценки расхода и распределения энергии. Коэффициент активности, процент изменения и доли БЖУ — выбранные допущения, а не индивидуальное назначение или прогноз скорости изменения веса.',
  };
};
