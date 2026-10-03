import { choice } from '../../lib/platform/financeWave14Input';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Cooked/raw mass ratio; energy conservation is an explicit model assumption.
const grams = (value: number) => `${formatMeasure(value, fmtNumber)} г`;

export const compute: CalcFunction = (inputs) => {
  const mode = choice(inputs.mode, ['rawToCooked', 'cookedToRaw'] as const, 'rawToCooked');
  const factor = toNumber(inputs.factor);
  const kcalPer100Raw = toNumber(inputs.kcalPer100Raw);

  const fail = (message: string) => ({
    primary: { label: mode === 'rawToCooked' ? 'Готовый вес' : 'Сухой вес', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode === null) return fail('Выберите корректный режим расчёта');
  if (factor === null || kcalPer100Raw === null) return fail('Введите корректные числовые данные');
  if (!(factor > 0)) return fail('Коэффициент должен быть больше нуля');
  if (kcalPer100Raw < 0) return fail('Калорийность не может быть отрицательной');

  let raw: number;
  let cooked: number;
  if (mode === 'rawToCooked') {
    const given = toNumber(inputs.raw);
    if (given === null) return fail('Введите корректные числовые данные');
    raw = given;
    if (!(raw > 0)) return fail('Сухой вес должен быть больше нуля');
    cooked = raw * factor;
  } else {
    const given = toNumber(inputs.cooked);
    if (given === null) return fail('Введите корректные числовые данные');
    cooked = given;
    if (!(cooked > 0)) return fail('Готовый вес должен быть больше нуля');
    raw = cooked / factor;
  }

  const totalKcal = raw * (kcalPer100Raw / 100);
  const cookedEnergy = kcalPer100Raw / factor;
  if (![raw, cooked].every(v => validOutput(v, true)) || ![totalKcal, cookedEnergy].every(v => validOutput(v, kcalPer100Raw > 0))) return fail('Результат вне допустимого диапазона');

  return {
    note: 'Исходный сухой или сырой вес: коэффициент равен готовому весу, делённому на исходный. Энергия сохранена по допущению; добавки и потери жира не учтены.',
    primary: {
      label: mode === 'rawToCooked' ? 'Готовый вес' : 'Сухой вес',
      value: mode === 'rawToCooked' ? grams(cooked) : grams(raw),
    },
    secondary: [
      { label: 'Сухой вес', value: grams(raw) },
      { label: 'Готовый вес', value: grams(cooked) },
      { label: 'Коэффициент разварки', value: formatMeasure(factor, fmtNumber) },
      { label: 'Калорий всего', value: `${fmtNumber(totalKcal, 0)} ккал` },
      { label: 'Ккал на 100 г готового', value: formatMeasure(cookedEnergy, fmtNumber) },
    ],
  };
};
