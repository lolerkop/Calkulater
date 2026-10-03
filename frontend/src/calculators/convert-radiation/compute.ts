import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Перевод единиц ЭКВИВАЛЕНТНОЙ дозы.
//
// Область намеренно ограничена одной физической величиной. Поглощённая доза
// в греях и активность в беккерелях — это другие величины, и смешивать их в
// одном плоском списке единиц значило бы предлагать перевод, которого не
// существует без модели облучения и соответствующих весовых коэффициентов.
//
// Соотношение бэра и зиверта точное по определению: 1 бэр = 0,01 Зв.

const TO_SIEVERT: Record<string, number> = {
  Sv: 1, mSv: 1e-3, uSv: 1e-6, nSv: 1e-9, rem: 1e-2, mrem: 1e-5,
};

const TARGET_LABEL: Record<string, string> = {
  Sv: 'В Зв', mSv: 'В мЗв', uSv: 'В мкЗв', nSv: 'В нЗв', rem: 'В бэр', mrem: 'В мбэр',
};

export const compute: CalcFunction = (inputs) => {
  const raw = inputs.value;
  const value = typeof raw === 'number' || typeof raw === 'string' ? parseLocalizedNumber(raw) : null;
  const from = inputs.from === undefined ? 'mSv' : inputs.from;
  const to = inputs.to === undefined ? 'uSv' : inputs.to;
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (typeof from !== 'string' || typeof to !== 'string' || !Object.hasOwn(TO_SIEVERT, from) || !Object.hasOwn(TO_SIEVERT, to)) return fail('Неизвестная единица дозы');
  if (value === null) return fail('Введите конечное число');
  const a = TO_SIEVERT[from];
  const b = TO_SIEVERT[to];
  if (!(value >= 0)) return fail('Доза не может быть отрицательной');

  const ratio = a / b;
  const result = value * ratio;
  if (!Number.isFinite(result) || (value > 0 && result === 0)) return fail('Результат вне допустимого диапазона');
  const measure = (x: number) => formatQuantity(x === 0 ? 0 : x, fmtNumber);

  return {
    primary: { label: TARGET_LABEL[to], value: measure(result) },
    secondary: [
      { label: 'Исходное значение', value: measure(value) },
      { label: 'Соотношение', value: measure(ratio) },
    ],
    note: 'Переводятся единицы эквивалентной дозы. Поглощённая доза в греях и активность в беккерелях — другие физические величины, и прямого перевода между ними и зивертом нет.',
  };
};
