import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Молярная масса по химической формуле.
//
// ОБЛАСТЬ ОПРЕДЕЛЕНИЯ НАЗВАНА ЯВНО и ограничена восемью элементами. Атомные
// массы — справочные величины, и дописывать их по памяти нельзя: ошибка в
// третьем знаке выглядит правдоподобно и не обнаруживается счётом. Расширение
// таблицы — отдельная задача со сверкой по первоисточнику, а не побочный
// результат этой волны. Неизвестный символ поэтому отклоняется с перечнем
// поддерживаемых, а не считается с нулевой массой.
//
// Значения — стандартные атомные веса IUPAC в сокращённой записи, ровно те,
// что зафиксированы планированием волны.
//
// Разбор рекурсивный, потому что скобки вкладываются: Ca(OH)2 — это кальций и
// удвоенная группа, а не «кальций, кислород, водород, два». Множитель после
// закрывающей скобки распространяется на всю группу.

const ATOMIC_WEIGHT: Record<string, number> = {
  H: 1.008, C: 12.011, N: 14.007, O: 15.999,
  Na: 22.990, S: 32.06, Cl: 35.45, Ca: 40.078,
};
const SUPPORTED = Object.keys(ATOMIC_WEIGHT).join(', ');
const stat = (value: number) => formatStatistic(value, fmtNumber);

type Composition = Record<string, number>;

function parseFormula(formula: string): Composition | string {
  let index = 0;

  const block = (depth: number): Composition | string => {
    const result: Composition = {};
    while (index < formula.length) {
      const char = formula[index];
      if (char === '(') {
        index += 1;
        const inner = block(depth + 1);
        if (typeof inner === 'string') return inner;
        let digits = '';
        while (index < formula.length && /\d/.test(formula[index])) { digits += formula[index]; index += 1; }
        const multiplier = digits ? Number(digits) : 1;
        if (multiplier === 0) return 'Множитель группы не может быть нулём';
        for (const [symbol, count] of Object.entries(inner)) {
          result[symbol] = (result[symbol] ?? 0) + count * multiplier;
        }
      } else if (char === ')') {
        if (depth === 0) return 'Лишняя закрывающая скобка';
        index += 1;
        return result;
      } else if (/[A-Z]/.test(char)) {
        let symbol = char;
        index += 1;
        while (index < formula.length && /[a-z]/.test(formula[index])) { symbol += formula[index]; index += 1; }
        if (!(symbol in ATOMIC_WEIGHT)) return `Элемент «${symbol}» не поддерживается. Доступны: ${SUPPORTED}`;
        let digits = '';
        while (index < formula.length && /\d/.test(formula[index])) { digits += formula[index]; index += 1; }
        const count = digits ? Number(digits) : 1;
        if (count === 0) return `Число атомов «${symbol}» не может быть нулём`;
        result[symbol] = (result[symbol] ?? 0) + count;
      } else {
        return `Символ «${char}» в формуле недопустим`;
      }
    }
    if (depth > 0) return 'Не хватает закрывающей скобки';
    return result;
  };

  const parsed = block(0);
  if (typeof parsed === 'string') return parsed;
  if (Object.keys(parsed).length === 0) return 'Введите химическую формулу';
  return parsed;
}

export const compute: CalcFunction = (inputs) => {
  const formula = toStr(inputs.formula, '').replace(/\s+/g, '');

  const fail = (message: string) => ({
    primary: { label: 'Молярная масса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!formula) return fail('Введите химическую формулу');
  const composition = parseFormula(formula);
  if (typeof composition === 'string') return fail(composition);

  const entries = Object.entries(composition);
  const molar = entries.reduce((sum, [symbol, count]) => sum + ATOMIC_WEIGHT[symbol] * count, 0);
  const atoms = entries.reduce((sum, [, count]) => sum + count, 0);

  const table: CalcResultTable = {
    title: 'Состав вещества',
    columns: ['Элемент', 'Атомов', 'Атомная масса', 'Вклад в массу', 'Доля массы'],
    rows: entries.map(([symbol, count]) => [
      symbol,
      fmtNumber(count, 0),
      stat(ATOMIC_WEIGHT[symbol]),
      stat(ATOMIC_WEIGHT[symbol] * count),
      `${fmtNumber((ATOMIC_WEIGHT[symbol] * count * 100) / molar, 2)}%`,
    ]),
    note: 'Атомные массы — стандартные атомные веса IUPAC в сокращённой записи.',
  };

  return {
    primary: { label: 'Молярная масса', value: `${stat(molar)} г/моль` },
    secondary: [
      { label: 'Атомов всего', value: fmtNumber(atoms, 0) },
      { label: 'Элементов', value: fmtNumber(entries.length, 0) },
      { label: 'Масса одной молекулы', value: `${stat(molar / 6.02214076e23 * 1e24)}·10⁻²⁴ г` },
    ],
    table,
  };
};
