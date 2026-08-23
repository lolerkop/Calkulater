import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Размер рамы и полей паспарту.
//
// Нижнее поле делают шире остальных — это старое правило багетной мастерской.
// Причина оптическая: геометрически равные поля глаз читает как «низ уже», и
// работа кажется съезжающей вниз. Прибавка в один-два сантиметра выравнивает
// восприятие, поэтому утяжеление вынесено отдельным полем.
export const compute: CalcFunction = (inputs) => {
  const photoWidth = toNumber(inputs.photoWidth);
  const photoHeight = toNumber(inputs.photoHeight);
  const border = toNumber(inputs.border);
  const bottomExtra = toNumber(inputs.bottomExtra);
  const fail = (message: string) => ({
    primary: { label: 'Размер рамы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(photoWidth > 0)) return fail('Ширина фотографии должна быть больше нуля');
  if (!(photoHeight > 0)) return fail('Высота фотографии должна быть больше нуля');
  if (!(border > 0)) return fail('Поле паспарту должно быть больше нуля');
  if (!(bottomExtra >= 0)) return fail('Утяжеление нижнего поля не может быть отрицательным');

  const outerWidth = photoWidth + 2 * border;
  const outerHeight = photoHeight + 2 * border + bottomExtra;

  return {
    primary: {
      label: 'Размер рамы',
      value: `${formatMeasure(outerWidth, fmtNumber)}×${formatMeasure(outerHeight, fmtNumber)} см`,
    },
    secondary: [
      { label: 'Нижнее поле', value: `${formatMeasure(border + bottomExtra, fmtNumber)} см` },
      { label: 'Верх и бока', value: `${formatMeasure(border, fmtNumber)} см` },
      { label: 'Площадь паспарту', value: `${formatMeasure(outerWidth * outerHeight - photoWidth * photoHeight, fmtNumber)} см²` },
      { label: 'Соотношение сторон рамы', value: formatMeasure(outerWidth / outerHeight, fmtNumber) },
    ],
  };
};
