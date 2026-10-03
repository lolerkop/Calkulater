import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Освещение комнаты: сколько нужно люмен и сколько ламп.
//
// Упрощённая прикидка: коэффициент использования принят равным1.
// Сохранённый коэффициент 0,4..1 — доля сохраняющегося света,
// а не гарантия измеренной освещённости или выполнения местного стандарта.
// Число одинаковых ламп округляется вверх.

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const norm = toNumber(inputs.norm);
  const lamp = toNumber(inputs.lampLumens);
  const loss = toNumber(inputs.lossFactor);
  const fail = (message: string) => ({
    primary: { label: 'Нужно люмен', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (area === null || norm === null || lamp === null || loss === null) return fail('Введите корректные числовые данные');

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(norm > 0)) return fail('Норма освещённости должна быть больше нуля');
  if (!(lamp > 0)) return fail('Световой поток лампы должен быть больше нуля');
  if (!(loss >= 0.4 && loss <= 1)) return fail('Коэффициент запаса должен быть от 0,4 до 1');

  const need = (area * norm) / loss;
  const lamps = need <= lamp ? 1 : ceilUnits(need / lamp);
  if (!validOutput(need, true) || !validOutput(need / area, true) || !Number.isSafeInteger(lamps) || lamps < 1 || !validOutput(lamps * lamp, true)) return fail('Результат вне допустимого диапазона');
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Нужно люмен', value: `${measure(need)} лм` },
    secondary: [
      { label: 'Ламп', value: fmtNumber(lamps, 0) },
      { label: 'Люмен на квадратный метр', value: measure(need / area) },
      { label: 'Норма освещённости', value: `${measure(norm)} лк` },
      { label: 'Коэффициент запаса', value: measure(loss) },
      { label: 'Установленный поток', value: `${measure(lamps * lamp)} лм` },
    ],
    note: 'Освещённость — выбранная цель. Использование света принято равным 1; распределение и измеренные люксы не рассчитываются.',
  };
};
