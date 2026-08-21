import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Кулинарный перевод объёма в массу и обратно.
//
// Плотности — общепринятые кулинарные величины в г/мл. Они собственные, а не
// внешние: справочник маленький, зафиксирован в калькуляторе, и использованная
// плотность ВСЕГДА выводится отдельной строкой. Иначе получилось бы число без
// объяснения, а разброс у сыпучих продуктов большой: мука в стакане, взятая
// ложкой и утрамбованная, различается на четверть.
//
// Чашка здесь метрическая, 240 мл, и это сказано в заметке: американская
// «cup» бывает и 236,6 мл, и молчание об этом стоило бы читателю точности.

const DENSITY: Record<string, number> = {
  water: 1, milk: 1.03, flour: 0.53, sugar: 0.85, salt: 1.2,
  rice: 0.85, oil: 0.92, honey: 1.42, butter: 0.91,
};
const VOLUME: Record<string, number> = { ml: 1, l: 1000, cup: 240, tbsp: 15, tsp: 5 };

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const unit = toStr(inputs.unit, 'cup');
  const product = toStr(inputs.product, 'flour');
  const direction = toStr(inputs.direction, 'toGrams');
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const density = DENSITY[product];
  const factor = VOLUME[unit];
  if (density === undefined) return fail('Неизвестный продукт');
  if (factor === undefined) return fail('Неизвестная единица объёма');
  if (!(value >= 0)) return fail('Значение не может быть отрицательным');

  const measure = (x: number) => formatMeasure(x, fmtNumber);
  const ml = direction === 'toGrams' ? value * factor : value / density;
  const result = direction === 'toGrams' ? ml * density : ml / factor;
  if (direction !== 'toGrams' && direction !== 'toVolume') return fail('Неизвестное направление');

  return {
    primary: { label: 'Результат', value: measure(result) },
    secondary: [
      { label: 'Плотность продукта', value: `${measure(density)} г/мл` },
      { label: 'В миллилитрах', value: `${measure(ml)} мл` },
      { label: 'Исходное значение', value: measure(value) },
    ],
    note: 'Чашка здесь метрическая, 240 мл. Плотности сыпучих продуктов зависят от того, как их насыпали: разброс до четверти — обычное дело.',
  };
};
