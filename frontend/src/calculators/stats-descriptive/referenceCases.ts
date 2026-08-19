import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную (Phase 13P refcases.json):
//   4, 8, 15, 16, 23, 42 -> n=6, Σ=108, среднее 18, медиана (15+16)/2 = 15,5
//     отклонения -14 -10 -3 -2 5 24 -> квадраты 196+100+9+4+25+576 = 910
//     выборочная 910/5 = 182, σ = √182 = 13,4907…
//     генеральная 910/6 = 151,6667, σ = 12,3153…
//   2, 3, 3, 5, 7 -> среднее 4, медиана 3, мода 3, 16/4 = 4, σ = 2
export const statsDescriptiveReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'шесть значений, выборочная дисперсия',
    inputs: { values: '4\n8\n15\n16\n23\n42', mode: 'sample' },
    expectPrimary: '18',
    expectSecondary: [
      { label: 'Количество', value: '6' },
      { label: 'Сумма', value: '108' },
      { label: 'Медиана', value: '15,5' },
      { label: 'Мода', value: '—' },
      { label: 'Минимум', value: '4' },
      { label: 'Максимум', value: '42' },
      { label: 'Размах', value: '38' },
      { label: 'Дисперсия', value: '182' },
      { label: 'Стандартное отклонение', value: '13,4907' },
    ],
  },
  {
    name: 'пять значений с модой, запятая с пробелом — разделитель',
    inputs: { values: '2, 3, 3, 5, 7', mode: 'sample' },
    expectPrimary: '4',
    expectSecondary: [
      { label: 'Медиана', value: '3' },
      { label: 'Мода', value: '3' },
      { label: 'Дисперсия', value: '4' },
      { label: 'Стандартное отклонение', value: '2' },
    ],
  },
  {
    name: 'те же шесть значений, генеральная совокупность',
    inputs: { values: '4 8 15 16 23 42', mode: 'population' },
    expectPrimary: '18',
    expectSecondary: [
      { label: 'Дисперсия', value: '151,6667' },
      { label: 'Стандартное отклонение', value: '12,3153' },
    ],
  },
  {
    name: 'граница: одно значение — выборочная дисперсия не определена',
    inputs: { values: '42', mode: 'sample' },
    expectPrimary: '42',
    expectSecondary: [
      { label: 'Дисперсия', value: '—' },
      { label: 'Стандартное отклонение', value: '—' },
    ],
  },
  {
    name: 'пустой список отклоняется',
    inputs: { values: '', mode: 'sample' },
    expectPrimary: '—',
  },
  {
    name: 'нечисловой токен отклоняет весь ввод',
    inputs: { values: '4\nабв\n15', mode: 'sample' },
    expectPrimary: '—',
  },
];
