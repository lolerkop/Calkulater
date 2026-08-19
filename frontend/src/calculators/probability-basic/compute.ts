import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Базовая вероятность.
//
// Случай «хотя бы одно из двух» намеренно считается как p₁ + p₂ − p₁·p₂, а не
// сложением: сложение посчитало бы дважды исход, в котором произошли оба
// события, и для двух событий по 50 % дало бы 100 % вместо 75 %.
//
// Ничего случайного здесь нет: расчёт детерминирован, симуляций не выполняется.
const fmt = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'single');
  const fail = (message: string) => ({
    primary: { label: 'Вероятность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let p = 0;
  if (mode === 'single' || mode === 'complement') {
    const favourable = toNumber(mode === 'single' ? inputs.favourable : inputs.favourable2);
    const total = toNumber(mode === 'single' ? inputs.total : inputs.total2);
    if (!Number.isInteger(favourable) || !Number.isInteger(total)) return fail('Исходы должны быть целыми');
    if (!(total > 0)) return fail('Всего исходов должно быть больше нуля');
    if (favourable > total) return fail('Благоприятных исходов не может быть больше общего числа');
    if (favourable < 0) return fail('Благоприятных исходов не может быть больше общего числа');
    p = favourable / total;
    if (mode === 'complement') p = 1 - p;
  } else {
    const first = toNumber(mode === 'independentBoth' ? inputs.p1 : inputs.p3);
    const second = toNumber(mode === 'independentBoth' ? inputs.p2 : inputs.p4);
    if (first < 0 || first > 1 || second < 0 || second > 1) return fail('Вероятность должна быть от 0 до 1');
    p = mode === 'independentBoth' ? first * second : first + second - first * second;
  }

  const odds = p >= 1 ? '—' : p <= 0 ? '—' : `${fmt((1 - p) / p)} к 1`;
  return {
    primary: { label: 'Вероятность', value: fmt(p) },
    secondary: [
      { label: 'В процентах', value: `${fmt(p * 100)}%` },
      { label: 'Противоположное событие', value: fmt(1 - p) },
      { label: 'Шансы', value: odds },
    ],
  };
};
