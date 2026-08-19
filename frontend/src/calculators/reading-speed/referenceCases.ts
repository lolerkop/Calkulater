import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из wpm = слова ÷ минуты вручную:
//   3000 / 12 = 250 · 1800 / 7 = 257,142… → 257
//   90 000 / 250 = 360 минут = 6 ч 0 мин
export const readingSpeedReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '3000 слов за 12 минут — 250 слов в минуту',
    inputs: { words: 3000, minutes: 12 },
    expectPrimary: '250 слов/мин',
    expectSecondary: [{ label: 'Слов в час', value: '15 000' }],
  },
  {
    name: '1800 слов за 7 минут — 257 слов в минуту',
    inputs: { words: 1800, minutes: 7 },
    expectPrimary: '257 слов/мин',
  },
  {
    name: 'книга на 90 000 слов при 250 слов/мин — шесть часов',
    inputs: { words: 3000, minutes: 12, bookWords: 90000 },
    expectPrimary: '250 слов/мин',
    expectSecondary: [{ label: 'Время на книгу', value: '6 ч 0 мин' }],
  },
  {
    name: 'граница: одно слово за одну минуту',
    inputs: { words: 1, minutes: 1 },
    expectPrimary: '1 слов/мин',
  },
  {
    name: 'недопустимо: нулевое время',
    inputs: { words: 3000, minutes: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: ноль слов',
    inputs: { words: 0, minutes: 12 },
    expectPrimary: '—',
  },
];
