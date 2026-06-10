import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, toNumber, toStr } from '../format';

export const calcCalorie: CalcFunction = (inputs) => {
  const gender = toStr(inputs.gender, 'male');
  const age = toNumber(inputs.age);
  const height = toNumber(inputs.height);
  const weight = toNumber(inputs.weight);
  const activity = toNumber(inputs.activity, 1.55);
  const goal = toStr(inputs.goal, 'maintain');
  const goalAdjustment = Math.min(30, Math.max(0, toNumber(inputs.goalAdjustment, 15))) / 100;
  const proteinPct = Math.min(60, Math.max(10, toNumber(inputs.proteinPct, 30)));
  const fatPct = Math.min(60, Math.max(10, toNumber(inputs.fatPct, 25)));
  const macroScale = proteinPct + fatPct > 100 ? 100 / (proteinPct + fatPct) : 1;
  const effectiveProteinPct = proteinPct * macroScale;
  const effectiveFatPct = fatPct * macroScale;
  const carbsPct = Math.max(0, 100 - effectiveProteinPct - effectiveFatPct);

  if (age <= 0 || height <= 0 || weight <= 0) {
    return {
      primary: { label: 'Дневная норма', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите рост, вес и возраст', accent: 'red' }],
    };
  }

  // Mifflin-St Jeor
  const bmr = gender === 'male'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const tdee = bmr * activity;
  const adjusted = goal === 'lose'
    ? tdee * (1 - goalAdjustment)
    : goal === 'gain'
      ? tdee * (1 + goalAdjustment)
      : tdee;

  // БЖУ: 30/25/45 от калорий
  // Б: 4 ккал/г, Ж: 9 ккал/г, У: 4 ккал/г
  const protein = (adjusted * effectiveProteinPct / 100) / 4;
  const fat = (adjusted * effectiveFatPct / 100) / 9;
  const carbs = (adjusted * carbsPct / 100) / 4;

  return {
    primary: { label: 'Дневная норма', value: `${fmtInt(adjusted)} ккал` },
    secondary: [
      { label: 'Базовый обмен (BMR)', value: `${fmtInt(bmr)} ккал` },
      { label: 'Белки', value: `${fmtInt(protein)} г` },
      { label: 'Жиры', value: `${fmtInt(fat)} г` },
      { label: 'Углеводы', value: `${fmtInt(carbs)} г` },
      { label: 'Поддержание веса (TDEE)', value: `${fmtInt(tdee)} ккал` },
    ],
    note: adjusted < (gender === 'male' ? 1500 : 1200)
      ? 'Получилось очень низкое значение калорий. Не используйте такой дефицит без консультации врача или диетолога.'
      : 'Расчёт служит стартовой оценкой. Корректируйте калорийность по динамике веса за 2–3 недели.',
  };
};
