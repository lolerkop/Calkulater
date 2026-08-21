import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Освещение комнаты: сколько нужно люмен и сколько ламп.
//
// Норма освещённости — ВИДИМОЕ редактируемое допущение, а не спрятанная
// константа: для гостиной привычны 150 лк, для рабочего стола втрое больше, а
// нормативные значения различаются от страны к стране. Поле показывает, из
// чего получился ответ, и позволяет его изменить.
//
// Коэффициент запаса учитывает загрязнение и старение ламп: светильник со
// временем светит слабее, и делить на него — способ заложить это заранее.
// Число ламп округляется ВВЕРХ: половины лампы не бывает.

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const norm = toNumber(inputs.norm);
  const lamp = toNumber(inputs.lampLumens);
  const loss = toNumber(inputs.lossFactor);
  const fail = (message: string) => ({
    primary: { label: 'Нужно люмен', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(norm > 0)) return fail('Норма освещённости должна быть больше нуля');
  if (!(lamp > 0)) return fail('Световой поток лампы должен быть больше нуля');
  if (!(loss >= 0.4 && loss <= 1)) return fail('Коэффициент запаса должен быть от 0,4 до 1');

  const need = (area * norm) / loss;
  const lamps = Math.ceil(need / lamp);
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
    note: 'Норма освещённости — допущение, которое можно менять: для гостиной обычно берут около 150 лк, для рабочего места втрое больше. Нормативные значения различаются по странам.',
  };
};
