import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Децибелы: сложение уровней и перевод отношения в децибелы.
//
// Уровни НЕ складываются арифметически, и это главное заблуждение о шуме: два
// источника по 80 дБ дают не 160, а 83,01 дБ. Складываются мощности, а децибел
// — логарифм отношения мощностей, поэтому сумма считается через возврат к
// линейной шкале: 10·log₁₀(Σ10^(Lᵢ/10)). Удвоение мощности — это ровно +3,01 дБ,
// независимо от того, с какого уровня начинать.
//
// Отношение переводится по-разному для мощности и для амплитуды: у мощности
// множитель 10, у амплитуды 20, потому что мощность пропорциональна квадрату
// амплитуды. Путаница между этими двумя — вторая частая ошибка.
const POWER_FACTOR = 10;
const AMPLITUDE_FACTOR = 20;

const parseLevels = (raw: string): number[] | null => {
  const parts = raw.split(/[\s,;]+/).filter(Boolean);
  if (!parts.length) return null;
  const values: number[] = [];
  for (const part of parts) {
    const value = toNumber(part);
    if (!Number.isFinite(value)) return null;
    values.push(value);
  }
  return values;
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'sum');
  const raw = toStr(inputs.levels, '');
  const p1 = toNumber(inputs.p1);
  const p2 = toNumber(inputs.p2);
  const kind = toStr(inputs.kind, 'power');
  const fail = (message: string) => ({
    primary: { label: 'Уровень', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const db = (value: number) => `${formatMeasure(value, fmtNumber)} дБ`;

  if (mode === 'ratio') {
    if (!(p1 > 0)) return fail('Исходная величина должна быть больше нуля');
    if (!(p2 > 0)) return fail('Конечная величина должна быть больше нуля');
    const factor = kind === 'amplitude' ? AMPLITUDE_FACTOR : POWER_FACTOR;
    const level = factor * Math.log10(p2 / p1);
    const powerRatio = kind === 'amplitude' ? (p2 / p1) ** 2 : p2 / p1;
    return {
      primary: { label: 'Уровень', value: db(level) },
      secondary: [
        { label: 'Во сколько раз по мощности', value: formatMeasure(powerRatio, fmtNumber) },
        { label: 'Во сколько раз по амплитуде', value: formatMeasure(Math.sqrt(powerRatio), fmtNumber) },
        { label: 'Исходная величина', value: formatMeasure(p1, fmtNumber) },
        { label: 'Конечная величина', value: formatMeasure(p2, fmtNumber) },
      ],
    };
  }

  const levels = parseLevels(raw);
  if (!levels) return fail('Введите хотя бы один уровень в децибелах');
  const level = POWER_FACTOR * Math.log10(levels.reduce((sum, l) => sum + 10 ** (l / POWER_FACTOR), 0));
  const loudest = Math.max(...levels);
  return {
    primary: { label: 'Уровень', value: db(level) },
    secondary: [
      { label: 'Источников', value: fmtInt(levels.length) },
      { label: 'Самый громкий', value: db(loudest) },
      { label: 'Прибавка к самому громкому', value: db(level - loudest) },
      { label: 'Арифметическая сумма (так НЕ считают)', value: db(levels.reduce((a, b) => a + b, 0)) },
    ],
  };
};
