import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Ощущаемая температура при ветре — канадско-американская формула 2001 года
// (JAG/TI), принятая метеослужбами Канады и США:
//
//   WC = 13,12 + 0,6215·t − 11,37·v^0,16 + 0,3965·t·v^0,16
//
// где t в °C, v в км/ч на высоте 10 м.
//
// У формулы есть ОБЛАСТЬ, и вне её она не приближение, а бессмыслица: при
// t > 10 °C и при v < 4,8 км/ч она даёт числа, которых никто не ощущает.
// Поэтому вне области расчёт отказывает, а не выдаёт правдоподобное число.
//
// Отличие от индекса жары: тот считает, насколько ТЯЖЕЛЕЕ переносится жара при
// влажности, здесь — насколько СИЛЬНЕЕ ощущается холод при ветре. Формулы
// независимы и области у них не пересекаются.
//
// Ветер не охлаждает воздух: термометр показывает ту же температуру. Он сносит
// прогретый пограничный слой у кожи, и тело теряет тепло быстрее — ощущение
// меняется, физическая температура нет.
const MIN_WIND_KMH = 4.8;
const MAX_TEMP_C = 10;

export const compute: CalcFunction = (inputs) => {
  const t = toNumber(inputs.t);
  const v = toNumber(inputs.v);
  const fail = (message: string) => ({
    primary: { label: 'Ощущаемая температура', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (t > MAX_TEMP_C) return fail('Формула работает при температуре не выше 10 °C');
  if (v < MIN_WIND_KMH) return fail('Формула работает при ветре не слабее 4,8 км/ч');

  const p = Math.pow(v, 0.16);
  const chill = 13.12 + 0.6215 * t - 11.37 * p + 0.3965 * t * p;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Ощущаемая температура', value: m(chill, '°C') },
    secondary: [
      { label: 'Разница с термометром', value: m(chill - t, '°C') },
      { label: 'Температура воздуха', value: m(t, '°C') },
      { label: 'Скорость ветра', value: m(v, 'км/ч') },
      { label: 'Ощущаемая в градусах Фаренгейта', value: m((chill * 9) / 5 + 32, '°F') },
    ],
  };
};
