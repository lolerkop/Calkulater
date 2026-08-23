import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Размер выборки: n₀ = z²·p·(1−p)/e².
//
// Это обратная задача к доверительному интервалу: там число респондентов
// задано и получается ширина интервала, здесь задана допустимая ширина и
// получается число респондентов.
//
// Доля 50 % даёт МАКСИМАЛЬНУЮ выборку: произведение p·(1−p) достигает максимума
// ровно посередине. Поэтому 50 % — безопасное умолчание, когда ожидаемая доля
// неизвестна: ошибиться в большую сторону нельзя.
//
// Поправка на конечную совокупность включается, когда объём генеральной
// совокупности задан: опрашивать 384 человека из посёлка в 500 жителей не нужно,
// хватит 218. Ноль означает бесконечную совокупность и поправку не включает.
//
// Округление вверх идёт через выпущенный ceilUnits: обычный Math.ceil на
// двоичном хвосте вида 384.0000000000001 добавляет лишнего респондента.
const Z: Record<string, number> = {
  '90': 1.6448536269514722,
  '95': 1.959963984540054,
  '99': 2.5758293035489004,
};

export const compute: CalcFunction = (inputs) => {
  const confidence = toStr(inputs.confidence, '95');
  const margin = toNumber(inputs.margin);
  const proportion = toNumber(inputs.proportion);
  const population = toNumber(inputs.population);
  const fail = (message: string) => ({
    primary: { label: 'Размер выборки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const z = Z[confidence];
  if (!z) return fail('Выберите доверительную вероятность из списка');
  if (!(margin > 0)) return fail('Предельная ошибка должна быть больше нуля');
  if (!(proportion >= 0) || !(proportion <= 100)) return fail('Ожидаемая доля задаётся от 0 до 100 процентов');
  if (!(population >= 0)) return fail('Объём совокупности не может быть отрицательным');

  const p = proportion / 100;
  const e = margin / 100;
  const raw = (z * z * p * (1 - p)) / (e * e);
  const corrected = population > 0 ? raw / (1 + (raw - 1) / population) : raw;
  const n = ceilUnits(corrected);

  return {
    primary: { label: 'Размер выборки', value: `${formatMeasure(n, fmtNumber)} чел` },
    secondary: [
      { label: 'Без поправки на совокупность', value: `${formatMeasure(ceilUnits(raw), fmtNumber)} чел` },
      { label: 'Критическое значение z', value: formatMeasure(z, fmtNumber) },
      { label: 'Предельная ошибка', value: `${formatStatistic(margin, fmtNumber)} %` },
      {
        label: 'Доля от совокупности',
        value: `${formatStatistic(population > 0 ? (n / population) * 100 : 0, fmtNumber)} %`,
      },
    ],
  };
};
