import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Модульная шкала типографики: размеры получаются умножением базы на отношение,
// а не подбором «на глаз».
//
//   размер(ступень) = база × отношение^ступень
//
// Ступень 0 — это базовый размер текста; положительные ступени идут вверх к
// заголовкам, отрицательные вниз к подписям и сноскам. Смысл шкалы в том, что
// соседние размеры связаны одним и тем же множителем, поэтому набор выглядит
// согласованным при любом числе ступеней.
//
// Отношение обязано быть строго больше единицы: при единице шкала вырождается
// в один повторяющийся размер, при меньшем — переворачивается, и «вверх»
// начинает уменьшать. Ни то ни другое не является шкалой.
const PREVIEW = 12;
const PREVIEW_NOTE = 'Показаны первые 12 ступеней шкалы.';

export const compute: CalcFunction = (inputs) => {
  const base = toNumber(inputs.base);
  const ratio = toNumber(inputs.ratio);
  const stepsUp = Math.floor(toNumber(inputs.stepsUp));
  const stepsDown = Math.floor(toNumber(inputs.stepsDown));

  const fail = (message: string) => ({
    primary: { label: 'Наибольший размер', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(base > 0)) return fail('Базовый размер должен быть больше нуля');
  if (!(ratio > 1)) return fail('Отношение шкалы должно быть больше единицы');
  if (stepsUp < 0 || stepsDown < 0) return fail('Число ступеней не может быть отрицательным');

  const num = (value: number) => formatMeasure(value, fmtNumber);
  // Счёт идёт по индексу, а не по `step = -stepsDown`. Унарный минус на нуле
  // даёт в JS отрицательный нуль, и Intl честно печатает его как «-0»:
  // при нуле ступеней вниз базовая ступень называлась бы «-0» вместо «0».
  const steps: [number, number][] = [];
  for (let index = 0; index <= stepsDown + stepsUp; index += 1) {
    const step = index - stepsDown;
    steps.push([step, base * Math.pow(ratio, step)]);
  }

  const table: CalcResultTable = {
    title: 'Ступени шкалы',
    columns: ['Ступень', 'Размер'],
    rows: steps.slice(0, PREVIEW).map(([step, size]) => [fmtNumber(step, 0), num(size)]),
    note: steps.length > PREVIEW ? PREVIEW_NOTE : undefined,
  };

  return {
    primary: { label: 'Наибольший размер', value: num(base * Math.pow(ratio, stepsUp)) },
    secondary: [
      { label: 'Наименьший размер', value: num(base * Math.pow(ratio, -stepsDown)) },
      { label: 'Ступеней', value: fmtNumber(steps.length, 0) },
      { label: 'База', value: num(base) },
    ],
    table,
  };
};
