import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Средний балл с учётом веса предметов.
//
// Отличается от калькулятора нужной оценки направлением: там по текущему баллу
// считают, что нужно получить на экзамене, здесь по уже полученным оценкам
// считают итог. Вторая строка — простое среднее без весов: разница между ним и
// взвешенным показывает, тянут ли вниз именно тяжёлые предметы.
//
// Шкала НЕ навязывается. Оценки принимаются любые неотрицательные, поэтому
// работают и пятибалльная, и стобалльная, и четырёхбалльная GPA. Соответствие между
// ними калькулятор не устанавливает: таблицы перевода различаются от вуза к
// вузу, и молча выбрать одну значило бы выдать чужое правило за общее.
//
// Вес по умолчанию равен единице: строка «5» — это оценка с весом 1, и тогда
// взвешенное среднее совпадает с простым.

const stat = (value: number) => formatStatistic(value, fmtNumber);
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'Средний балл', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const lines = toStr(inputs.grades, '').split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) return fail('Введите хотя бы одну оценку');

  let weightSum = 0;
  let productSum = 0;
  let gradeSum = 0;
  for (const line of lines) {
    const tokens = tokenize(line);
    if (tokens.length === 0 || tokens.length > 2) return fail(`Строка «${line}»: нужны оценка и, при желании, её вес`);
    const grade = parseLocalizedNumber(tokens[0], 'ru');
    if (grade === null) return fail(`«${tokens[0]}» не число`);
    if (grade < 0) return fail('Оценка не может быть отрицательной');
    const weight = tokens.length === 2 ? parseLocalizedNumber(tokens[1], 'ru') : 1;
    if (weight === null) return fail(`«${tokens[1]}» не число`);
    if (!(weight > 0)) return fail('Вес предмета должен быть больше нуля');
    weightSum += weight;
    productSum += grade * weight;
    gradeSum += grade;
  }

  return {
    primary: { label: 'Средний балл', value: stat(productSum / weightSum) },
    secondary: [
      { label: 'Сумма кредитов', value: formatMeasure(weightSum, fmtNumber) },
      { label: 'Сумма произведений', value: formatMeasure(productSum, fmtNumber) },
      { label: 'Предметов', value: fmtNumber(lines.length, 0) },
      { label: 'Простое среднее', value: stat(gradeSum / lines.length) },
    ],
  };
};
