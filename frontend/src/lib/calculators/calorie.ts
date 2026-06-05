import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, toNumber, toStr } from '../format';

export const calcCalorie: CalcFunction = (inputs) => {
  const gender = toStr(inputs.gender, 'male');
  const age = toNumber(inputs.age);
  const height = toNumber(inputs.height);
  const weight = toNumber(inputs.weight);
  const activity = toNumber(inputs.activity, 1.55);
  const goal = toStr(inputs.goal, 'maintain');

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
  const adjusted = goal === 'lose' ? tdee * 0.85 : goal === 'gain' ? tdee * 1.15 : tdee;

  // БЖУ: 30/25/45 от калорий
  // Б: 4 ккал/г, Ж: 9 ккал/г, У: 4 ккал/г
  const protein = (adjusted * 0.30) / 4;
  const fat = (adjusted * 0.25) / 9;
  const carbs = (adjusted * 0.45) / 4;

  return {
    primary: { label: 'Дневная норма', value: `${fmtInt(adjusted)} ккал` },
    secondary: [
      { label: 'Базовый обмен (BMR)', value: `${fmtInt(bmr)} ккал` },
      { label: 'Белки', value: `${fmtInt(protein)} г` },
      { label: 'Жиры', value: `${fmtInt(fat)} г` },
      { label: 'Углеводы', value: `${fmtInt(carbs)} г` },
    ],
  };
};
