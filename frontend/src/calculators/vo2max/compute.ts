import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

// Cooper coefficients preserved as the existing commonly used equation;
// original full-text coefficient provenance remains unverified in the audit.
// Uth2004 HR ratio validation:46 well-trained men21–51, not a universal norm.
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'МПК (VO₂max)', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const mode = toStr(inputs.mode, 'cooper');
  if (mode !== 'cooper' && mode !== 'hr') return fail('Неизвестный режим');
  let value: number;
  const rows = [{ label: 'Метод', value: mode === 'hr' ? 'по пульсу' : 'тест Купера' }];
  if (mode === 'hr') {
    const rest = number(inputs.hrRest), maximum = number(inputs.hrMax);
    if (![rest, maximum].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
    if (!(rest > 0)) return fail('Пульс покоя должен быть больше нуля');
    if (!(maximum > rest)) return fail('Максимальный пульс должен быть больше пульса покоя');
    value = 15.3 * (maximum / rest);
    rows.push({ label: 'Пульс покоя', value: formatMeasure(rest, fmtNumber) }, { label: 'Максимальный пульс', value: formatMeasure(maximum, fmtNumber) });
  } else {
    const distance = number(inputs.distance);
    if (!Number.isFinite(distance)) return fail('Введите конечные числа для выбранного режима');
    if (!(distance > 504.9)) return fail('При дистанции не более 504,9 м эта формула не даёт положительной оценки');
    value = (distance - 504.9) / 44.73;
    rows.push({ label: 'Дистанция за 12 минут', value: `${formatMeasure(distance, fmtNumber)} м` });
  }
  if (!Number.isFinite(value)) return fail('Результат выходит за числовой диапазон');
  return { primary: { label: 'МПК (VO₂max)', value: `${formatMeasure(value, fmtNumber)} мл/кг/мин` }, secondary: rows,
    note: 'Это эмпирическая оценка, не лабораторное измерение и не диагноз. Положительный ответ сам по себе не подтверждает применимость модели.' };
};
