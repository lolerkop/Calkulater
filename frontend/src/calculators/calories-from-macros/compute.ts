import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Калорийность по коэффициентам Этуотера: белки и углеводы дают 4 ккал
// на грамм, жиры — 9. Никаких других макронутриентов калькулятор не считает.
//
//   ккал = 4 × белки + 9 × жиры + 4 × углеводы
//
// Доли считаются от суммы, поэтому при нулевом итоге они неопределены —
// это и есть единственный недопустимый случай.
const KCAL_PER_GRAM = { protein: 4, fat: 9, carbs: 4 } as const;

export const compute: CalcFunction = (inputs) => {
  const protein = Math.max(0, toNumber(inputs.protein));
  const fat = Math.max(0, toNumber(inputs.fat));
  const carbs = Math.max(0, toNumber(inputs.carbs));

  const fromProtein = protein * KCAL_PER_GRAM.protein;
  const fromFat = fat * KCAL_PER_GRAM.fat;
  const fromCarbs = carbs * KCAL_PER_GRAM.carbs;
  const total = fromProtein + fromFat + fromCarbs;

  if (total <= 0) {
    return {
      primary: { label: 'Всего калорий', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите хотя бы один макронутриент', accent: 'red' }],
    };
  }

  const share = (part: number) => `${fmtNumber((part / total) * 100, 2)} %`;
  return {
    primary: { label: 'Всего калорий', value: `${fmtInt(Math.round(total))} ккал` },
    secondary: [
      { label: 'Из белков', value: `${fmtInt(Math.round(fromProtein))} ккал · ${share(fromProtein)}` },
      { label: 'Из жиров', value: `${fmtInt(Math.round(fromFat))} ккал · ${share(fromFat)}` },
      { label: 'Из углеводов', value: `${fmtInt(Math.round(fromCarbs))} ккал · ${share(fromCarbs)}` },
    ],
  };
};
