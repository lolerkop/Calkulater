import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Сбор дождевой воды с крыши.
//
// Ключ к арифметике: квадратный метр под слоем в один миллиметр даёт РОВНО
// один литр, поэтому площадь в квадратных метрах, умноженная на осадки в
// миллиметрах, сразу даёт литры — без коэффициентов перевода.
//
// Коэффициент стока задаёт пользователь: он зависит от кровли и от того, что
// часть воды остаётся на поверхности и испаряется. Умолчание 0,9 — выбранный пример,
// не подтверждённая характеристика всех материалов и не норматив.
const BARREL_LITRES = 200;

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const depth = toNumber(inputs.depth);
  const runoff = toNumber(inputs.coeff);
  const fail = (message: string) => ({
    primary: { label: 'Соберётся воды', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (area === null || depth === null || runoff === null) return fail('Введите корректные числовые данные');

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(depth > 0)) return fail('Слой осадков должен быть больше нуля');
  if (!(runoff > 0 && runoff <= 1)) return fail('Коэффициент стока задаётся от 0 до 1');

  const litres = area * depth * runoff;

  const barrels = litres <= BARREL_LITRES ? 1 : ceilUnits(litres / BARREL_LITRES);
  const lost = area * depth * (1 - runoff);
  if (!validOutput(litres, true) || !validOutput(litres / 1000, true) || !validOutput(depth * runoff, true) || !Number.isSafeInteger(barrels) || barrels < 1 || !validOutput(lost)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Соберётся воды', value: `${formatMeasure(litres, fmtNumber)} л` },
    secondary: [
      { label: 'В кубометрах', value: `${formatMeasure(litres / 1000, fmtNumber)} м³` },
      { label: 'Бочек по 200 литров', value: `${barrels} шт` },
      { label: 'Собрано с квадратного метра', value: `${formatMeasure(depth * runoff, fmtNumber)} л` },
      { label: 'Потеряно на стоке и испарении', value: `${formatMeasure(lost, fmtNumber)} л` },
    ],
  };
};
