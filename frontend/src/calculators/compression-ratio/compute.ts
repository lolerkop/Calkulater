import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Степень сжатия: (Vрабочий + Vкамеры) / Vкамеры.
//
// Величина безразмерная и записывается как «10,1:1», поэтому кроме числа
// выводится и привычная запись отношением — так её печатают в паспортах.
//
// Чувствительность к камере сгорания резкая: у мотора с рабочим объёмом
// цилиндра 454 см³ фрезеровка головки на кубик поднимает степень сжатия
// заметно, а на объём цилиндра почти не влияет. Отсюда и практика: степень
// сжатия поднимают камерой, а не расточкой.
export const compute: CalcFunction = (inputs) => {
  const displacement = toNumber(inputs.displacement);
  const chamber = toNumber(inputs.chamber);
  const fail = (message: string) => ({
    primary: { label: 'Степень сжатия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(displacement > 0)) return fail('Рабочий объём цилиндра должен быть больше нуля');
  if (!(chamber > 0)) return fail('Объём камеры сгорания должен быть больше нуля');

  const cr = (displacement + chamber) / chamber;

  return {
    primary: { label: 'Степень сжатия', value: formatMeasure(cr, fmtNumber) },
    secondary: [
      { label: 'Полный объём цилиндра', value: `${formatMeasure(displacement + chamber, fmtNumber)} см³` },
      { label: 'Объём камеры сгорания', value: `${formatMeasure(chamber, fmtNumber)} см³` },
      { label: 'Рабочий объём цилиндра', value: `${formatMeasure(displacement, fmtNumber)} см³` },
      { label: 'Записью', value: `${formatMeasure(cr, fmtNumber)}:1` },
    ],
  };
};
