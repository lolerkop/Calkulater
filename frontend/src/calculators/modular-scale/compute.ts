import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';
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
// начинает уменьшать. Эти два случая не поддерживаются выбранной возрастающей моделью.
const PREVIEW = 12;
const PREVIEW_NOTE = 'Показаны первые 12 ступеней шкалы.';

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, number as asNumber, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const base = read(inputs.base);
  const ratio = read(inputs.ratio);
  const stepsUp = integerInput(inputs.stepsUp) ?? NaN;
  const stepsDown = integerInput(inputs.stepsDown) ?? NaN;

  const fail = (message: string) => ({
    primary: { label: 'Наибольший размер', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![base, ratio, stepsUp, stepsDown].every(Number.isFinite)) return fail(INPUT);
  if (stepsUp > 20 || stepsDown > 20) return fail('В каждом направлении допускается от 0 до 20 целых ступеней');
  if (!(base > 0)) return fail('Базовый размер должен быть больше нуля');
  if (!(ratio > 1)) return fail('Отношение шкалы должно быть больше единицы');
  if (stepsUp < 0 || stepsDown < 0) return fail('Число ступеней не может быть отрицательным');

  const at = (step: number) => {
    const power = times(...Array.from({ length: Math.abs(step) }, () => exact(ratio)));
    return step < 0 ? divide(exact(base), power) : asNumber(times(exact(base), power));
  };
  const num = (value: number) => (value !== 0 && Math.abs(value) < 1e-6 ? value.toExponential(3).replace('.', ',') : formatMeasure(value, fmtNumber));
  // Счёт идёт по индексу, а не по `step = -stepsDown`. Унарный минус на нуле
  // даёт в JS отрицательный нуль, и Intl честно печатает его как «-0»:
  // при нуле ступеней вниз базовая ступень называлась бы «-0» вместо «0».
  const steps: [number, number][] = [];
  for (let index = 0; index <= stepsDown + stepsUp; index += 1) {
    const step = index - stepsDown;
    steps.push([step, at(step)]);
  }

  if (!steps.every(([, v]) => Number.isFinite(v) && v > 0)) return fail(RANGE);
  const table: CalcResultTable = {
    title: 'Ступени шкалы',
    columns: ['Ступень', 'Размер'],
    rows: steps.slice(0, PREVIEW).map(([step, size]) => [fmtNumber(step, 0), num(size)]),
    note: steps.length > PREVIEW ? PREVIEW_NOTE : undefined,
  };

  return {
    primary: { label: 'Наибольший размер', value: num(at(stepsUp)) },
    secondary: [
      { label: 'Наименьший размер', value: num(at(-stepsDown)) },
      { label: 'Ступеней', value: fmtNumber(steps.length, 0) },
      { label: 'База', value: num(base) },
    ],
    table,
  };
};
