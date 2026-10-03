import { measure as displayMeasure, read, finite, mode as selectedMode, INPUT, MODE, RANGE, exact, times, evaluated } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const moment = read(inputs.moment);
  const section = selectedMode(inputs.section, 'rect', ['rect','circle']);
  const b = read(inputs.b);
  const h = read(inputs.h);
  const d = read(inputs.d);
  const fail = (message: string) => ({
    primary: { label: 'Напряжение изгиба', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (section === null) return fail(MODE);
  if (!finite(moment,...(section === 'circle' ? [d] : [b,h]))) return fail(INPUT);
  if (!(moment > 0)) return fail('Изгибающий момент должен быть больше нуля');
  let modulusD;
  let divisor;
  if (section === 'circle') {
    if (!(d > 0)) return fail('Диаметр должен быть больше нуля');
    modulusD = times(exact(Math.PI),exact(d),exact(d),exact(d));
    divisor = exact(32);
  } else {
    if (!(b > 0)) return fail('Ширина сечения должна быть больше нуля');
    if (!(h > 0)) return fail('Высота сечения должна быть больше нуля');
    modulusD = times(exact(b),exact(h),exact(h));
    divisor = exact(6);
  }

  const modulus = evaluated(modulusD,divisor);
  const stress = evaluated(times(exact(moment),exact(1000),divisor),modulusD);
  if (!finite(modulus,stress)) return fail(RANGE);
  return {
    primary: { label: 'Напряжение изгиба', value: `${displayMeasure(stress)} МПа` },
    secondary: [
      { label: 'Момент сопротивления', value: `${displayMeasure(modulus)} мм³` },
      { label: 'Изгибающий момент', value: `${displayMeasure(moment)} Н·м` },
      { label: 'Сечение', value: section === 'circle' ? 'круг' : 'прямоугольник' },
      // Предел текучести материала здесь НЕ зашивается: он зависит от марки
      // стали или породы дерева, а редактируемого поля в замороженном наборе
      // нет. Сравнивать напряжение с допускаемым — шаг за пределами расчёта,
      // и об этом сказано в тексте страницы.
      { label: 'Определяющий размер сечения', value: `${displayMeasure(section === 'circle' ? d : h)} мм` },
    ],
  };
};
