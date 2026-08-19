import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Процент за тест: правильные ответы, делённые на общее число вопросов.
//
// Знаменатель здесь — все вопросы теста, а не отвеченные: иначе пропуск
// превращался бы в улучшение результата. Условие correct ≤ total проверяется
// явно, потому что арифметика сама по себе пропустила бы 21 из 20 и выдала
// 105 %, то есть правдоподобное число вместо ошибки ввода.
//
// Перевода в пятибалльную или буквенную шкалу нет намеренно: шкалы различаются
// от школы к школе, и без справочника такой перевод был бы выдумкой.
export const compute: CalcFunction = (inputs) => {
  const correct = Math.round(toNumber(inputs.correct));
  const total = Math.round(toNumber(inputs.total));
  const passMark = toNumber(inputs.passMark);

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(total > 0)) return fail('Всего вопросов должно быть больше нуля');
  if (correct < 0) return fail('Число правильных ответов не может быть отрицательным');
  if (correct > total) return fail('Правильных ответов не может быть больше, чем вопросов');

  const percent = (correct / total) * 100;
  const wrong = total - correct;

  const secondary = [
    { label: 'Правильных', value: `${fmtInt(correct)} из ${fmtInt(total)}` },
    { label: 'Ошибок', value: fmtInt(wrong) },
    { label: 'Доля ошибок', value: `${fmtNumber((wrong / total) * 100, 2)}%` },
  ];

  if (passMark > 0) {
    const passed = percent >= passMark;
    secondary.push({
      label: 'Проходной балл',
      value: passed ? 'Тест сдан' : 'Тест не сдан',
      ...(passed ? {} : { accent: 'red' as const }),
    });
  }

  return {
    primary: { label: 'Результат', value: `${fmtNumber(percent, 2)}%` },
    secondary,
  };
};
