import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Расход калорий по MET-коэффициенту активности.
//
// Отличается от суточной нормы тем, что считает не обмен веществ, а конкретное
// занятие: MET — во сколько раз активность энергозатратнее покоя. Формула
// ккал = MET × 3,5 × масса(кг) ÷ 200 × минуты стандартна, и тройка с половиной
// в ней — потребление кислорода в покое, мл/кг/мин.
//
// Масса входит множителем, а не поправкой: человек 90 кг на том же велосипеде
// тратит почти на треть больше, чем человек 70 кг, и «средний» расход из таблиц
// для него занижен.
//
// Значения MET — усреднённые ориентиры, а не измерение. Поэтому список
// пресетов дополнен ручным вводом: свой коэффициент задаётся напрямую.

const PRESET_MET: Record<string, number> = {
  walking: 3.5,
  cycling: 7.5,
  swimming: 8,
  running: 9.8,
};

export const compute: CalcFunction = (inputs) => {
  const activity = toStr(inputs.activity, 'cycling');
  const met = activity === 'custom' ? toNumber(inputs.met) : PRESET_MET[activity] ?? 0;
  const weightKg = toNumber(inputs.weightKg);
  const minutes = toNumber(inputs.minutes);

  const fail = (message: string) => ({
    primary: { label: 'Потрачено калорий', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(met > 0)) return fail('Коэффициент MET должен быть больше нуля');
  if (!(weightKg > 0)) return fail('Масса тела должна быть больше нуля');
  if (!(minutes > 0)) return fail('Длительность должна быть больше нуля');

  const perMinute = (met * 3.5 * weightKg) / 200;
  const kcal = perMinute * minutes;

  return {
    primary: { label: 'Потрачено калорий', value: `${fmtNumber(kcal, 0)} ккал` },
    secondary: [
      { label: 'Калорий в минуту', value: formatMeasure(perMinute, fmtNumber) },
      { label: 'Расход в час', value: `${fmtNumber(perMinute * 60, 0)} ккал` },
      { label: 'Коэффициент MET', value: formatMeasure(met, fmtNumber) },
    ],
  };
};
