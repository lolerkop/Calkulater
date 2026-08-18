import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения взяты из международных определений единиц, а не получены прогоном
// движка:
//   1 бар = 100000 Па · 1 атм = 101325 Па (точно)
//   1 мм рт. ст. = 133,322387415 Па (конвенционное значение)
//   1 psi = 4,4482216152605 Н / 0,00064516 м² = 6894,757… Па · 1 МПа = 10 бар
export const pressureReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'бар в паскали: 100000',
    inputs: { value: 1, from: 'bar', to: 'pa' },
    expectPrimary: '100 000,00 Па',
  },
  {
    name: 'атмосфера в паскали: 101325',
    inputs: { value: 1, from: 'atm', to: 'pa' },
    expectPrimary: '101 325,00 Па',
  },
  {
    // Конвенционный миллиметр ртутного столба определён как ровно
    // 133,322387415 Па. Торр определён иначе — как 1/760 атмосферы, то есть
    // 133,32236842… Па. Величины расходятся в восьмом знаке, и поэтому
    // атмосфера равна 760 торр точно, но 759,9999 мм рт. ст.
    name: 'миллиметр ртутного столба определён как 133,322387415 Па',
    inputs: { value: 1, from: 'mmhg', to: 'pa' },
    expectPrimary: '133,3224 Па',
  },
  {
    name: 'атмосфера в мм рт. ст.: 759,9999, а не ровно 760',
    inputs: { value: 1, from: 'atm', to: 'mmhg' },
    expectPrimary: '759,9999 мм рт. ст.',
  },
  {
    name: 'мегапаскаль равен десяти барам',
    inputs: { value: 1, from: 'mpa', to: 'bar' },
    expectPrimary: '10,0000 бар',
  },
  {
    name: 'psi в паскали: 6894,757…',
    inputs: { value: 1, from: 'psi', to: 'pa' },
    expectPrimary: '6 894,76 Па',
  },
  {
    name: 'миллибар в паскали: 100',
    inputs: { value: 1, from: 'mbar', to: 'pa' },
    expectPrimary: '100,0000 Па',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'bar', to: 'atm' },
    expectPrimary: '0 атм',
  },
];
