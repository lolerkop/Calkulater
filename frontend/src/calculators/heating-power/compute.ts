import { number as toNumber, integer, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Требуемая мощность отопления помещения.
//
// Объёмная прикидка с выбранным коэффициентом и фиксированным
// дополнением 100 Вт на окно. Это сохранённая учебная модель, а не расчёт
// теплопотерь по ограждениям, наружной температуре и вентиляции.

const qty = (value: number) => formatMeasure(value, fmtNumber);
const WINDOW_WATTS = 100;

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const height = toNumber(inputs.height);
  const wattsPerM3 = toNumber(inputs.wattsPerM3);
  const windows = integer(inputs.windows);

  const fail = (message: string) => ({
    primary: { label: 'Требуемая мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (area === null || height === null || wattsPerM3 === null) return fail('Введите корректные числовые данные');
  if (windows === null) return fail('Количество должно быть целым в допустимом диапазоне');

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(height > 0)) return fail('Высота потолка должна быть больше нуля');
  if (!(wattsPerM3 > 0)) return fail('Удельная норма должна быть больше нуля');
  if (windows < 0) return fail('Число окон не может быть отрицательным');

  const volume = area * height;
  const windowsWatts = windows * WINDOW_WATTS;
  const watts = volume * wattsPerM3 + windowsWatts;

  if (!validOutput(volume, true) || !validOutput(watts, true) || !validOutput(watts / 1000, true) || !validOutput(windowsWatts)) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Требуемая мощность', value: `${qty(watts / 1000)} кВт` },
    secondary: [
      { label: 'В ваттах', value: `${qty(watts)} Вт` },
      { label: 'Объём помещения', value: `${qty(volume)} м³` },
      { label: 'Норма на объём', value: `${qty(wattsPerM3)} Вт/м³` },
      { label: 'Надбавка на окна', value: `${qty(windowsWatts)} Вт` },
    ],
  };
};
