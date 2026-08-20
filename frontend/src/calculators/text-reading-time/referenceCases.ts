import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   1200 / 200 = 6 мин ровно; вслух 1200 / 130 = 9,2308 мин = 553,85 с -> 554 с
//   по тексту: 12 слов / 200 = 0,06 мин = 3,6 с -> 4 с
export const textReadingTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "1200 слов при 200 словах в минуту",
    inputs: { "mode": "words", "text": "", "words": 1200, "wpm": 200, "speechWpm": 130 },
    expectPrimary: "6 мин 0 с",
    expectSecondary: [{ label: "Время вслух", value: "9 мин 14 с" }, { label: "Чтение в минутах", value: "6" }, { label: "Слов", value: "1 200" }],
  },
  {
    name: "подсчёт по вставленному тексту",
    inputs: { "mode": "text", "text": "Съешь ещё этих мягких французских булок, да выпей же чаю. Всё готово!", "words": 0, "wpm": 200, "speechWpm": 130 },
    expectPrimary: "0 мин 4 с",
    expectSecondary: [{ label: "Время вслух", value: "0 мин 6 с" }, { label: "Слов", value: "12" }],
  },
  {
    name: "граница: ровно одна минута чтения",
    inputs: { "mode": "words", "text": "", "words": 200, "wpm": 200, "speechWpm": 130 },
    expectPrimary: "1 мин 0 с",
    expectSecondary: [{ label: "Чтение в минутах", value: "1" }],
  },
  {
    name: "нулевая скорость чтения отклоняется",
    inputs: { "mode": "words", "text": "", "words": 1200, "wpm": 0, "speechWpm": 130 },
    expectPrimary: "—",
  },
];
