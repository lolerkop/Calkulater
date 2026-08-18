import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную сокращением на НОД:
//   НОД(1920, 1080) = 120 → 16:9 · НОД(2560, 1080) = 40 → 64:27
//   1280 × 9 ÷ 16 = 720 · НОД(1000, 1000) = 1000 → 1:1
export const aspectRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'Full HD 1920×1080 сокращается в 16:9',
    inputs: { mode: 'reduce', width: 1920, height: 1080 },
    expectPrimary: '16:9',
    expectSecondary: [{ label: 'Наибольший общий делитель', value: '120' }],
  },
  {
    name: 'ультраширокий 2560×1080 — это 64:27, а не 21:9',
    inputs: { mode: 'reduce', width: 2560, height: 1080 },
    expectPrimary: '64:27',
    expectSecondary: [{ label: 'Ближайшее распространённое', value: '21:9' }],
  },
  {
    name: 'недостающая сторона: 1280 при 16:9 даёт высоту 720',
    inputs: { mode: 'side', ratioW: 16, ratioH: 9, known: 'width', side: 1280 },
    expectPrimary: '720 пикс',
  },
  {
    name: 'недостающая сторона в другую сторону: высота 1080 при 16:9 даёт 1920',
    inputs: { mode: 'side', ratioW: 16, ratioH: 9, known: 'height', side: 1080 },
    expectPrimary: '1 920 пикс',
  },
  {
    name: 'граница: квадрат 1000×1000 — это 1:1',
    inputs: { mode: 'reduce', width: 1000, height: 1000 },
    expectPrimary: '1:1',
  },
  {
    name: 'недопустимо: нулевая высота',
    inputs: { mode: 'reduce', width: 1920, height: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевая часть соотношения',
    inputs: { mode: 'side', ratioW: 0, ratioH: 9, known: 'width', side: 1280 },
    expectPrimary: '—',
  },
];
