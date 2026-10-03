import { choice } from '../../lib/platform/financeWave14Input';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Volume-input convention: water in mL = coffee in g × k, not beverage yield.
const MODE_LABEL: Record<string, string> = {
  coffee: 'Кофе',
  water: 'Вода',
  ratio: 'Соотношение',
};

export const compute: CalcFunction = (inputs) => {
  const mode = choice(inputs.mode, ['coffee', 'water', 'ratio'] as const, 'coffee');
  const water = mode === 'water' ? 0 : toNumber(inputs.water);
  const coffee = mode === 'coffee' ? 0 : toNumber(inputs.coffee);
  const ratio = mode === 'ratio' ? 1 : toNumber(inputs.ratio);
  const label = MODE_LABEL[mode ?? 'coffee'] ?? MODE_LABEL.coffee;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number) => formatMeasure(value, fmtNumber);

  if (mode === null) return fail('Выберите корректный режим расчёта');
  if (water === null || coffee === null || ratio === null) return fail('Введите корректные числовые данные');
  if (!(ratio > 0) && mode !== 'ratio') return fail('Соотношение должно быть больше нуля');

  let outWater: number;
  let outCoffee: number;
  if (mode === 'water') {
    if (!(coffee > 0)) return fail('Масса кофе должна быть больше нуля');
    outCoffee = coffee;
    outWater = coffee * ratio;
  } else if (mode === 'ratio') {
    if (!(water > 0)) return fail('Объём воды должен быть больше нуля');
    if (!(coffee > 0)) return fail('Масса кофе должна быть больше нуля');
    outWater = water;
    outCoffee = coffee;
  } else {
    if (!(water > 0)) return fail('Объём воды должен быть больше нуля');
    outWater = water;
    outCoffee = water / ratio;
  }

  const outRatio = outWater / outCoffee;
  const capacity = outCoffee * 2;
  if (![outWater, outCoffee, outRatio, capacity].every(v => validOutput(v, true))) return fail('Результат вне допустимого диапазона');
  const solved = mode === 'ratio'
    ? `1:${m(outRatio)}`
    : mode === 'water' ? `${m(outWater)} мл` : `${m(outCoffee)} г`;

  return {
    note: 'Вода — объём, поданный на заваривание, не выход напитка. Условная ёмкость гущи использует допущение 2 мл/г; фактическое удержание воды не измеряется.',
    primary: { label, value: solved },
    secondary: [
      { label: 'Вода', value: `${m(outWater)} мл` },
      { label: 'Кофе', value: `${m(outCoffee)} г` },
      { label: 'Соотношение', value: `1:${m(outRatio)}` },
      { label: 'Условная ёмкость гущи', value: `${m(capacity)} мл` },
    ],
  };
};
