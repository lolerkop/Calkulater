import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Объединённый газовый закон: p₁V₁/T₁ = p₂V₂/T₂.
//
// Отличие от уравнения состояния идеального газа: та страница считает ОДНО
// состояние через универсальную газовую постоянную и количество вещества,
// здесь считается ПЕРЕХОД между двумя состояниями одной и той же порции газа —
// количество вещества сокращается и не нужно вовсе.
//
// Температура строго в кельвинах: в шкале Цельсия отношение p/T теряет смысл,
// а при нуле градусов делитель обратился бы в нуль. Поэтому нулевая и
// отрицательная температура отклоняются, а не подставляются.
const MODE_LABEL: Record<string, string> = {
  p2: 'Давление p₂',
  v2: 'Объём V₂',
  t2: 'Температура T₂',
};
const MODE_UNIT: Record<string, string> = { p2: 'кПа', v2: 'л', t2: 'К' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'p2');
  const p1 = toNumber(inputs.p1);
  const v1 = toNumber(inputs.v1);
  const t1 = toNumber(inputs.t1);
  const p2 = toNumber(inputs.p2);
  const v2 = toNumber(inputs.v2);
  const t2 = toNumber(inputs.t2);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.p2;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(t1 > 0)) return fail('Температура первого состояния должна быть больше нуля кельвинов');
  if (mode !== 't2' && !(t2 > 0)) return fail('Температура второго состояния должна быть больше нуля кельвинов');

  let value: number;
  if (mode === 'v2') {
    if (!(p2 > 0)) return fail('Давление второго состояния должно быть больше нуля');
    value = (p1 * v1 * t2) / (t1 * p2);
  } else if (mode === 't2') {
    if (!(p1 > 0) || !(v1 > 0)) return fail('Давление и объём первого состояния должны быть больше нуля');
    value = (p2 * v2 * t1) / (p1 * v1);
  } else {
    if (!(v2 > 0)) return fail('Объём второго состояния должен быть больше нуля');
    value = (p1 * v1 * t2) / (t1 * v2);
  }

  const state1 = (p1 * v1) / t1;
  return {
    primary: { label, value: q(value, MODE_UNIT[mode] ?? 'кПа') },
    secondary: [
      { label: 'Состояние 1: p·V/T', value: q(state1, 'кПа·л/К') },
      { label: 'Состояние 2: p·V/T', value: q(state1, 'кПа·л/К') },
      { label: 'Первое состояние', value: `${q(p1, 'кПа')} · ${q(v1, 'л')} · ${q(t1, 'К')}` },
    ],
  };
};
