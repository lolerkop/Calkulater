import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   панграмма: 12 слов, 69 символов с пробелами, 58 без, 2 предложения
//   средняя длина слова 58 / 12 = 4,8333; слов в предложении 12 / 2 = 6
export const textWordCharCountReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "русская панграмма из двух предложений",
    inputs: { "text": "Съешь ещё этих мягких французских булок, да выпей же чаю. Всё готово!" },
    expectPrimary: "12",
    expectSecondary: [{ label: "Символов с пробелами", value: "69" }, { label: "Символов без пробелов", value: "58" }, { label: "Предложений", value: "2" }, { label: "Средняя длина слова", value: "4,8333" }],
  },
  {
    name: "английский текст из двух абзацев",
    inputs: { "text": "First paragraph has five words.\n\nSecond one is here! And a question?" },
    expectPrimary: "12",
    expectSecondary: [{ label: "Абзацев", value: "2" }, { label: "Предложений", value: "3" }, { label: "Символов без пробелов", value: "56" }],
  },
  {
    name: "граница: одно слово без знаков препинания",
    inputs: { "text": "Привет" },
    expectPrimary: "1",
    expectSecondary: [{ label: "Символов с пробелами", value: "6" }, { label: "Предложений", value: "1" }, { label: "Средняя длина слова", value: "6" }],
  },
  {
    name: "пустой текст отклоняется",
    inputs: { "text": "   " },
    expectPrimary: "—",
  },
];
