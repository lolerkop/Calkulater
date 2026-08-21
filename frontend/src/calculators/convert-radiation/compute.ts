import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Перевод единиц ЭКВИВАЛЕНТНОЙ дозы.
//
// Область намеренно ограничена одной физической величиной. Поглощённая доза
// в греях и активность в беккерелях — это другие величины, и смешивать их в
// одном плоском списке единиц значило бы предлагать перевод, которого не
// существует: зиверт и грей совпадают численно только при коэффициенте
// качества, равном единице, а беккерель не переводится в дозу вовсе.
//
// Соотношение бэра и зиверта точное по определению: 1 бэр = 0,01 Зв.

const TO_SIEVERT: Record<string, number> = {
  Sv: 1, mSv: 1e-3, uSv: 1e-6, nSv: 1e-9, rem: 1e-2, mrem: 1e-5,
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const from = toStr(inputs.from, 'mSv');
  const to = toStr(inputs.to, 'uSv');
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const a = TO_SIEVERT[from];
  const b = TO_SIEVERT[to];
  if (a === undefined || b === undefined) return fail('Неизвестная единица дозы');
  if (!(value >= 0)) return fail('Доза не может быть отрицательной');

  const ratio = a / b;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Результат', value: measure(value * ratio) },
    secondary: [
      { label: 'Исходное значение', value: measure(value) },
      { label: 'Соотношение', value: measure(ratio) },
    ],
    note: 'Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.',
  };
};
