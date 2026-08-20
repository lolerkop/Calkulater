import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Требуемая мощность отопления помещения.
//
// Считается от ОБЪЁМА, а не от площади: при потолке 3,2 м та же площадь требует
// на пятую часть больше тепла, чем при 2,7 м, и расчёт «сто ватт на квадрат»
// эту разницу теряет целиком.
//
// Удельная норма — поле ввода, а не константа. Она зависит от утепления, региона
// и года постройки, и подавать её как универсальный норматив нельзя: обычный
// разброс 30–50 Вт/м³ означает полуторакратную разницу в итоговой мощности.
// Надбавка за окна прибавляется отдельно, потому что теплопотери через остекление
// не масштабируются объёмом комнаты.

const qty = (value: number) => formatMeasure(value, fmtNumber);
const WINDOW_WATTS = 100;

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const height = toNumber(inputs.height);
  const wattsPerM3 = toNumber(inputs.wattsPerM3);
  const windows = toNumber(inputs.windows);

  const fail = (message: string) => ({
    primary: { label: 'Требуемая мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(height > 0)) return fail('Высота потолка должна быть больше нуля');
  if (!(wattsPerM3 > 0)) return fail('Удельная норма должна быть больше нуля');
  if (windows < 0) return fail('Число окон не может быть отрицательным');

  const volume = area * height;
  const windowsWatts = windows * WINDOW_WATTS;
  const watts = volume * wattsPerM3 + windowsWatts;

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
