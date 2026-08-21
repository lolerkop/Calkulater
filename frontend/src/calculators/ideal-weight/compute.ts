import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Идеальный вес по четырём именованным формулам плюс диапазон по ИМТ.
//
// Все четыре формулы построены одинаково: базовый вес при росте пять футов
// плюс надбавка за каждый дюйм сверх. Отсюда и перевод роста в дюймы — не
// украшение, а часть их устройства.
//
// Ни одна из формул не «правильнее» других: они расходятся на несколько
// килограммов и все выведены из статистики середины прошлого века. Поэтому
// выводятся ВСЕ ЧЕТЫРЕ и их среднее, а рядом — диапазон здорового веса по
// ИМТ, который единственный имеет вид интервала, а не точки. Одно число здесь
// выглядело бы точностью, которой нет.

const FORMULAS = {
  male: { devine: [50, 2.3], robinson: [52, 1.9], miller: [56.2, 1.41], hamwi: [48, 2.7] },
  female: { devine: [45.5, 2.3], robinson: [49, 1.7], miller: [53.1, 1.36], hamwi: [45.5, 2.2] },
} as const;

export const compute: CalcFunction = (inputs) => {
  const height = toNumber(inputs.height);
  const sex = toStr(inputs.sex, 'male');
  const fail = (message: string) => ({
    primary: { label: 'Среднее по формулам', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const set = FORMULAS[sex as keyof typeof FORMULAS];
  if (!set) return fail('Неизвестный пол');
  if (height < 120 || height > 230) return fail('Рост должен быть от 120 до 230 см');

  const over = Math.max(0, height / 2.54 - 60);
  const values = Object.fromEntries(
    Object.entries(set).map(([name, [base, per]]) => [name, base + per * over]),
  ) as Record<'devine' | 'robinson' | 'miller' | 'hamwi', number>;
  const average = (values.devine + values.robinson + values.miller + values.hamwi) / 4;
  const m = height / 100;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Среднее по формулам', value: `${measure(average)} кг` },
    secondary: [
      { label: 'Девайн', value: `${measure(values.devine)} кг` },
      { label: 'Робинсон', value: `${measure(values.robinson)} кг` },
      { label: 'Миллер', value: `${measure(values.miller)} кг` },
      { label: 'Хамви', value: `${measure(values.hamwi)} кг` },
      { label: 'Здоровый диапазон по ИМТ, от', value: `${measure(18.5 * m * m)} кг` },
      { label: 'Здоровый диапазон по ИМТ, до', value: `${measure(24.9 * m * m)} кг` },
    ],
    note: 'Формулы выведены из статистики середины прошлого века и расходятся между собой на несколько килограммов. Диапазон по ИМТ шире и честнее любой точки.',
  };
};
