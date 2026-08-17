// Эталонные случаи калькулятора краски.
//
// Значения выведены вручную по формуле со страницы, а не прогоном функции:
//
//   площадь (режим room) = 2 × (длина + ширина) × высота − окна × 1,5 − двери × 1,8
//   литры                = площадь × расход × слои × (1 + запас / 100)
//   банки                = округление вверх(литры / объём банки)
//   остаток              = (банки × объём − литры) / литры × 100
//
// Проверка вручную:
//   50 м² × 0,12 × 2 = 12,0 л; 12 / 2,5 = 4,8 → 5 банок; (12,5 − 12) / 12 = 4,17% → 4,2%
//   с запасом 10%: 12 × 1,1 = 13,2 л; 13,2 / 2,5 = 5,28 → 6 банок; (15 − 13,2) / 13,2 = 13,6%
//   комната 5×4×2,7: 2 × 9 × 2,7 = 48,6; −2×1,5 −1×1,8 = 43,8 м²
//                    43,8 × 0,12 × 2 = 10,512 → 10,5 л; 10,512 / 2,5 = 4,2 → 5 банок
//   30 м² × 0,15 × 1 = 4,5; ×1,05 = 4,725 → 4,7 л; 4,725 / 0,9 = 5,25 → 6 банок

import type { CalculatorReferenceCase } from '../../lib/platform/types';

export const paintReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'вручную: 50 м², 2 слоя, расход 0,12 → 12,0 л и 5 банок',
    inputs: { mode: 'manual', area: 50, coats: 2, consumption: 0.12, canVolume: 2.5, reserve: 0, canPrice: 0 },
    expectPrimary: '12,0 л',
    expectSecondary: [
      { label: 'Площадь окрашивания', value: '50,00 м²' },
      { label: 'Количество банок', value: '5 шт. × 2,5 л' },
      { label: 'Остаток из-за целых банок', value: '4,2 %' },
    ],
  },
  {
    name: 'вручную с запасом 10% и ценой: 13,2 л, 6 банок, 7 200 ₽',
    inputs: { mode: 'manual', area: 50, coats: 2, consumption: 0.12, canVolume: 2.5, reserve: 10, canPrice: 1200 },
    expectPrimary: '13,2 л',
    expectSecondary: [
      { label: 'Количество банок', value: '6 шт. × 2,5 л' },
      { label: 'Заданный запас', value: '10,0 %' },
      { label: 'Стоимость краски', value: '7 200,00 ₽' },
    ],
  },
  {
    name: 'по комнате с проёмами: 43,80 м² и 10,5 л',
    inputs: { mode: 'room', length: 5, width: 4, height: 2.7, windows: 2, doors: 1, coats: 2, consumption: 0.12, canVolume: 2.5, reserve: 0, canPrice: 0 },
    expectPrimary: '10,5 л',
    expectSecondary: [
      { label: 'Площадь окрашивания', value: '43,80 м²' },
      { label: 'Количество банок', value: '5 шт. × 2,5 л' },
    ],
  },
  {
    name: 'по комнате без проёмов: 48,60 м², один слой → 4,9 л и 1 банка',
    inputs: { mode: 'room', length: 5, width: 4, height: 2.7, windows: 0, doors: 0, coats: 1, consumption: 0.1, canVolume: 5, reserve: 0, canPrice: 0 },
    expectPrimary: '4,9 л',
    expectSecondary: [
      { label: 'Площадь окрашивания', value: '48,60 м²' },
      { label: 'Количество банок', value: '1 шт. × 5,0 л' },
    ],
  },
  {
    name: 'мелкая тара: 4,7 л при запасе 5% требует 6 банок по 0,9 л',
    inputs: { mode: 'manual', area: 30, coats: 1, consumption: 0.15, canVolume: 0.9, reserve: 5, canPrice: 0 },
    expectPrimary: '4,7 л',
    expectSecondary: [
      { label: 'Количество банок', value: '6 шт. × 0,9 л' },
      { label: 'Остаток из-за целых банок', value: '14,3 %' },
    ],
  },
  {
    name: 'нулевая площадь даёт прочерк, а не ноль литров',
    inputs: { mode: 'manual', area: 0, coats: 2, consumption: 0.12, canVolume: 2.5 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Введите положительные размеры' }],
  },
  {
    name: 'нулевой расход даёт прочерк',
    inputs: { mode: 'manual', area: 50, coats: 2, consumption: 0, canVolume: 2.5 },
    expectPrimary: '—',
  },
  {
    name: 'нулевой объём банки даёт прочерк, а не деление на ноль',
    inputs: { mode: 'manual', area: 50, coats: 2, consumption: 0.12, canVolume: 0 },
    expectPrimary: '—',
  },
];
