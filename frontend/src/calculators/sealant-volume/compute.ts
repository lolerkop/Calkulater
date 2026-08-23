import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';
import { ceilUnits } from '../../lib/rounding';

// Расход герметика на шов.
//
// Удобство арифметики: миллиметр на миллиметр на метр даёт ровно миллилитр,
// поэтому сечение шва в квадратных миллиметрах, умноженное на длину в метрах,
// сразу даёт миллилитры без коэффициентов.
//
// Строка «метров из одного картриджа» отвечает на настоящий вопрос в магазине:
// не «сколько миллилитров», а «хватит ли одного картриджа на эту дверь».
const PERCENT = 100;

export const compute: CalcFunction = (inputs) => {
  const width = toNumber(inputs.width);
  const depth = toNumber(inputs.depth);
  const length = toNumber(inputs.length);
  const cartridge = toNumber(inputs.cart);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Нужно герметика', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(width > 0)) return fail('Ширина шва должна быть больше нуля');
  if (!(depth > 0)) return fail('Глубина шва должна быть больше нуля');
  if (!(length > 0)) return fail('Длина шва должна быть больше нуля');
  if (!(cartridge > 0)) return fail('Объём картриджа должен быть больше нуля');
  if (!(waste >= 0)) return fail('Запас не может быть отрицательным');

  const section = width * depth;
  const millilitres = section * length;
  const withWaste = millilitres * (1 + waste / PERCENT);

  return {
    primary: { label: 'Нужно герметика', value: `${formatMeasure(withWaste, fmtNumber)} мл` },
    secondary: [
      { label: 'Без запаса', value: `${formatMeasure(millilitres, fmtNumber)} мл` },
      { label: 'Картриджей', value: `${ceilUnits(withWaste / cartridge)} шт` },
      { label: 'Метров из одного картриджа', value: `${formatMeasure(cartridge / section, fmtNumber)} м` },
      { label: 'Сечение шва', value: `${formatMeasure(section, fmtNumber)} мм²` },
    ],
  };
};
